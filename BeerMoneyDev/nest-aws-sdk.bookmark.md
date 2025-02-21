# BeerMoneyDev/nest-aws-sdk (github.com)

<https://github.com/BeerMoneyDev/nest-aws-sdk>

## Description

A thin wrapping layer around the aws-sdk package for clean NestJS dependency injection. - BeerMoneyDev/nest-aws-sdk

## Quote

> A thin wrapping layer around the aws-sdk package for clean NestJS dependency injection.

## Tags

#aws #aws-sdk #nest #nestjs #TypeScript

## Content

# GitHub - BeerMoneyDev/nest-aws-sdk: A thin wrapping layer around the aws-sdk package for clean NestJS dependency injection. {#github---beermoneydevnest-aws-sdk-a-thin-wrapping-layer-around-the-aws-sdk-package-for-clean-nestjs-dependency-injection. .reader-title}

BeerMoneyDev

------------------------------------------------------------------------

## nest-aws-sdk {#nest-aws-sdk dir="auto" tabindex="-1"}

[](#nest-aws-sdk){#user-content-nest-aws-sdk aria-label="Permalink: nest-aws-sdk"}

[![](https://camo.githubusercontent.com/edfec58912178d3ef13a11c539cab7cb0521d54f1edb96f2d3245b40ca456ee6/68747470733a2f2f626565726d6f6e65796465762d6173736574732e73332e616d617a6f6e6177732e636f6d2f6e6573742d6177732d73646b2d6c6f676f2e706e67){canonical-src="https://beermoneydev-assets.s3.amazonaws.com/nest-aws-sdk-logo.png"}](https://camo.githubusercontent.com/edfec58912178d3ef13a11c539cab7cb0521d54f1edb96f2d3245b40ca456ee6/68747470733a2f2f626565726d6f6e65796465762d6173736574732e73332e616d617a6f6e6177732e636f6d2f6e6573742d6177732d73646b2d6c6f676f2e706e67){rel="noopener noreferrer nofollow"}

**A thin wrapping layer around the [aws-sdk](https://github.com/aws/aws-sdk-js) (AWS SDK v2) package for clean [NestJS](https://github.com/nestjs) dependency injection.**

[![NPM Version](https://camo.githubusercontent.com/5db435c93a74cd6df4b638b3bfa9628993178c4550aff631e5431b602ab18f8c/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f6e6573742d6177732d73646b2e737667){canonical-src="https://img.shields.io/npm/v/nest-aws-sdk.svg"}](https://www.npmjs.com/package/nest-aws-sdk){rel="nofollow"}
[![Package License](https://camo.githubusercontent.com/0ca840e7095a2e793e659b92663ef029565904f91e1e9b6f40944a68d8ae7524/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f6c2f6e6573742d6177732d73646b2e737667){canonical-src="https://img.shields.io/npm/l/nest-aws-sdk.svg"}](https://www.npmjs.com/package/nest-aws-sdk){rel="nofollow"}
[![NPM Downloads](https://camo.githubusercontent.com/99aedcbbf69f2732806363e9adf3c1fcd673d5bc6e23ed4aff3867e44053546b/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f646d2f6e6573742d6177732d73646b2e737667){canonical-src="https://img.shields.io/npm/dm/nest-aws-sdk.svg"}](https://www.npmjs.com/package/nest-aws-sdk){rel="nofollow"}

## Features {#features dir="auto" tabindex="-1"}

[](#features){#user-content-features aria-label="Permalink: Features"}

-   Decorator for injecting AWS services.
-   An AWS service factory for on-the-fly AWS client creation.
-   A simple dependency injection model with AwsSdkModule.forRootAsync() and AwsSdkModule.forFeature().
-   Helper test tools for creating mocked AWS clients.

## How To Use {#how-to-use dir="auto" tabindex="-1"}

[](#how-to-use){#user-content-how-to-use aria-label="Permalink: How To Use"}

## Install {#install dir="auto" tabindex="-1"}

[](#install){#user-content-install aria-label="Permalink: Install"}

    npm install --save nest-aws-sdk aws-sdk

## Basic Usage - Root-level feature registration {#basic-usage---root-level-feature-registration dir="auto" tabindex="-1"}

[](#basic-usage---root-level-feature-registration){#user-content-basic-usage---root-level-feature-registration aria-label="Permalink: Basic Usage - Root-level feature registration"}

Below is an example of injecting the AwsSdkModule at the global root level. This also demonstrates some of the testing tools provided to make mocking and spying on AWS clients easier.

    // app.module.ts
    import { Module } from '@nestjs/common';
    import { AwsSdkModule } from 'nest-aws-sdk';
    import { SharedIniFileCredentials, S3 } from 'aws-sdk';
    import { ServiceConfigurationOptions } from 'aws-sdk/lib/service';
    import { S3ManagerModule } from './s3-manager/s3-manager.module';

    @Module({
      imports: [
        S3ManagerModule,
        AwsSdkModule.forRoot({
          defaultServiceOptions: {
            region: 'us-east-1',
            credentials: new SharedIniFileCredentials({
              profile: 'my-profile',
            }),
          },
          services: [S3],
        }),
      ],
      providers: [],
      exports: [],
    })
    export class AppModule {}

    // s3-manager.module.ts
    import { Module } from '@nestjs/common';
    import { S3ManagerService } from './s3-manager.service';

    @Module({
      imports: [],
      providers: [S3ManagerService],
      exports: [S3ManagerService],
    })
    class S3ManagerModule {}

    // s3-manager.service.ts
    import { Injectable } from '@nestjs/common';
    import { InjectAwsService } from 'nest-aws-sdk';
    import { S3 } from 'aws-sdk';

    @Injectable()
    export class S3ManagerService {
      constructor(@InjectAwsService(S3) private readonly s3: S3) {}

      async listBucketContents(bucket: string) {
        const response = await this.s3.listObjectsV2({ Bucket: bucket }).promise();
        return response.Contents.map(c => c.Key);
      }
    }

    // s3-manager.service.spec.ts
    import { Test, TestingModule } from '@nestjs/testing';
    import { S3 } from 'aws-sdk';
    import {
      createAwsServiceMock,
      createAwsServicePromisableSpy,
      getAwsServiceMock,
    } from 'nest-aws-sdk/dist/testing';
    import { S3ManagerService } from './s3-manager.service';

    describe('S3ManagerService', () => {
      describe('listBucketContents()', () => {
        it('should call the list method and return the Content keys', async () => {
          const module: TestingModule = await Test.createTestingModule({
            providers: [
              S3ManagerService,
              createAwsServiceMock(S3, {
                useValue: {
                  listObjectsV2: () => null,
                },
              }),
            ],
          }).compile();

          const service = module.get(S3ManagerService);

          const listSpy = createAwsServicePromisableSpy(
            getAwsServiceMock(module, S3),
            'listObjectsV2',
            'resolve',
            {
              Contents: [{ Key: 'myKey' }],
            },
          );

          const result = await service.listBucketContents('myBucket');

          expect(result.length).toBe(1);
          expect(result[0]).toBe('myKey');
          expect(listSpy).toHaveBeenCalledTimes(1);
          expect(listSpy).toHaveBeenCalledWith({ Bucket: 'myBucket' });
        });
      });
    });

## Basic Usage - Module-level feature registration {#basic-usage---module-level-feature-registration dir="auto" tabindex="-1"}

[](#basic-usage---module-level-feature-registration){#user-content-basic-usage---module-level-feature-registration aria-label="Permalink: Basic Usage - Module-level feature registration"}

Below is an example of injecting the AwsSdkModule global providers at the root-level and the client feature registration at the feature-submodule.

    // app.module.ts
    import { Module } from '@nestjs/common';
    import { AwsSdkModule } from 'nest-aws-sdk';
    import { SharedIniFileCredentials } from 'aws-sdk';
    import { ServiceConfigurationOptions } from 'aws-sdk/lib/service';
    import { S3ManagerModule } from './s3-manager/s3-manager.module';

    @Module({
      imports: [
        S3ManagerModule,
        AwsSdkModule.forRootAsync({
          defaultServiceOptions: {
            useValue: {
              region: 'us-east-1',
              credentials: new SharedIniFileCredentials({
                profile: 'my-profile',
              }),
            },
          },
        }),
      ],
      providers: [],
      exports: [],
    })
    export class AppModule {}

    // s3-manager.module.ts
    import { Module } from '@nestjs/common';
    import { AwsSdkModule } from 'nest-aws-sdk';
    import { S3 } from 'aws-sdk';
    import { S3ManagerService } from './s3-manager.service';

    @Module({
      imports: [AwsSdkModule.forFeatures([S3])],
      providers: [S3ManagerService],
      exports: [S3ManagerService],
    })
    class S3ManagerModule {}

## AwsSdkModule.forRoot() {#awssdkmodule.forroot dir="auto" tabindex="-1"}

[](#awssdkmoduleforroot){#user-content-awssdkmoduleforroot aria-label="Permalink: AwsSdkModule.forRoot()"}

`AwsSdkModule.forRoot()` is the simplest form of registration and uses statically assigned `options` values.

### options {#options dir="auto" tabindex="-1"}

[](#options){#user-content-options aria-label="Permalink: options"}

#### defaultServiceOptions?: Partial \| (() =\> Partial); {#defaultserviceoptions-partial-partial dir="auto" tabindex="-1"}

[](#defaultserviceoptions-partial----partial){#user-content-defaultserviceoptions-partial----partial aria-label="Permalink: defaultServiceOptions?: Partial | (() => Partial);"}

`defaultServiceOptions` is an optional object or object-returning method to get the aws-sdk `ServiceConfigurationOptions` object. This includes the `region`, `credentials`, and other client-level configuration.

#### services?: Array\<AwsServiceType \| AwsServiceWithServiceOptions\>, {#services-arrayawsservicetype-awsservicewithserviceoptions dir="auto" tabindex="-1"}

[](#services-arrayawsservicetype--awsservicewithserviceoptions){#user-content-services-arrayawsservicetype--awsservicewithserviceoptions aria-label="Permalink: services?: Array<AwsServiceType | AwsServiceWithServiceOptions>,"}

`services` can optionally be registered at the root level by passing an array of aws-sdk types, i.e. `S3`, or a `AwsServiceWithServiceOptions` object. These are interchangable and can be used as such:

    import { AwsSdkModule } from 'nest-aws-sdk';
    import { CloudFront, S3, SharedIniFileCredentials } from 'aws-sdk';

    @Module({
      imports: [
        AwsSdkModule.forRoot({
          services: [
            S3,
            {
              service: CloudFront,
              serviceOptions: {
                credentials: new SharedIniFileCredentials({
                  profile: 'aws-nest-sdk',
                }),
              },
            },
          ],
        }),
      ],
    })
    class AppRootModule {}

**Note: the supplied values in serviceOptions will override the values supplied in the defaultServiceOptions object.**

## forRootAsync {#forrootasync dir="auto" tabindex="-1"}

[](#forrootasync){#user-content-forrootasync aria-label="Permalink: forRootAsync"}

`AwsSdkModule.forRootAsync()` is an injectable form of the `AwsSdkModule.forRoot()` import and currently supports two types of instantiation: \'useFactory\' and \'useValue\'. Support for ClassProvider and ExistingProvider coming soon.

### No parameters {#no-parameters dir="auto" tabindex="-1"}

[](#no-parameters){#user-content-no-parameters aria-label="Permalink: No parameters"}

`AwsSdkModule.forRootAsync()` can be called with no provided parameters. This will allow the AWS clients to be created without any provided credential context, which is not uncommon when running in an AWS environment.

    // app.module.ts
    import { Module } from '@nestjs/common';
    import { AwsSdkModule } from 'nest-aws-sdk';
    import { S3ManagerModule } from './s3-manager/s3-manager.module';

    @Module({
      imports: [S3ManagerModule, AwsSdkModule.forRootAsync()],
      providers: [],
      exports: [],
    })
    export class AppModule {}

### useValue {#usevalue dir="auto" tabindex="-1"}

[](#usevalue){#user-content-usevalue aria-label="Permalink: useValue"}

useValue is the simplest way to modify the service options of the created clients.

    // app.module.ts
    import { Module } from '@nestjs/common';
    import { AwsSdkModule } from 'nest-aws-sdk';
    import { SharedIniFileCredentials } from 'aws-sdk';
    import { ServiceConfigurationOptions } from 'aws-sdk/lib/service';
    import { S3ManagerModule } from './s3-manager/s3-manager.module';

    @Module({
      imports: [
        S3ManagerModule,
        AwsSdkModule.forRootAsync({
          defaultServiceOptions: {
            useValue: {
              region: 'us-east-1',
              credentials: new SharedIniFileCredentials({
                profile: 'my-profile',
              }),
            },
          },
        }),
      ],
      providers: [],
      exports: [],
    })
    export class AppModule {}

### useFactory {#usefactory dir="auto" tabindex="-1"}

[](#usefactory){#user-content-usefactory aria-label="Permalink: useFactory"}

useFactory allows for dynamic modification of the service options. This includes support for `imports` and `inject`.

    // app.module.ts
    import { Module } from '@nestjs/common';
    import { AwsSdkModule } from 'nest-aws-sdk';
    import { ConfigService, ConfigModule } from './config';

    @Module({
      imports: [
        AwsSdkModule.forRootAsync({
          defaultServiceOptions: {
            useFactory: (cs: ConfigService) => {
              return {
                region: 'us-east-1',
                credentials: cs.getCredentials(),
              };
            },
            imports: [ConfigModule],
            inject: [ConfigService],
          },
        }),
      ],
      providers: [],
      exports: [],
    })

## AwsSdkModule.forFeatures() {#awssdkmodule.forfeatures dir="auto" tabindex="-1"}

[](#awssdkmoduleforfeatures){#user-content-awssdkmoduleforfeatures aria-label="Permalink: AwsSdkModule.forFeatures()"}

`AwsSdkModule.forFeatures()` creates the providers for the AWS clients you wish to use at a module-specific level.

**Note: forFeatures cannot be used in combination with root-level service registrations.**

### Basic usage {#basic-usage dir="auto" tabindex="-1"}

[](#basic-usage){#user-content-basic-usage aria-label="Permalink: Basic usage"}

To provide clients to the module context, pass the client constructor symbol to the `AwsSdkModule.forFeatures()` method. Note, it is best to import the client directly from `aws-sdk` instead of from deeper paths - the deeper paths may produce unexpected behaviors.

    import { Module } from '@nestjs/common';
    import { S3 } from 'aws-sdk';
    import { AwsSdkModule } from 'nest-aws-sdk';

    @Module({
      imports: [AwsSdkModule.forFeatures([S3])],
      providers: [],
      exports: [],
    })
    class AppSubModule {}

## AwsServiceFactory {#awsservicefactory dir="auto" tabindex="-1"}

[](#awsservicefactory){#user-content-awsservicefactory aria-label="Permalink: AwsServiceFactory"}

The `AwsServiceFactory` class is exposed to the root- and feature-level. This allows for dynamic creation of AWS clients without feature registration. In addition, the default options are injectable via the `@InjectAwsDefaultOptions()` decorator.

    import { Injectable } from '@nestjs/common';
    import { InjectAwsDefaultOptions } from '../src';
    import { S3, SharedIniFileCredentials } from 'aws-sdk';
    import { ServiceConfigurationOptions } from 'aws-sdk/lib/service';

    @Injectable()
    export class AppService {
      constructor(
        @InjectAwsDefaultOptions() readonly options: ServiceConfigurationOptions,
        readonly factory: AwsServiceFactory,
      ) {}
    }

## Testing {#testing dir="auto" tabindex="-1"}

[](#testing){#user-content-testing aria-label="Permalink: Testing"}

For testing AWS clients, we recommend fully replacing the AWS clients as they have side-effects inside of the constructor. To do so, methods are made available to make mocking these clients very simple.

### createAwsServiceMock {#createawsservicemock dir="auto" tabindex="-1"}

[](#createawsservicemock){#user-content-createawsservicemock aria-label="Permalink: createAwsServiceMock"}

This method allows for override an AWS client instantiation. To mock a client, call the `createAwsServiceMock` method with the client constructor and pass a provider object that will be used in its stead.

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        S3ManagerService,
        createAwsServiceMock(S3, {
          useValue: {
            listObjectsV2: () => null,
          },
        }),
      ],
    }).compile();

### getAwsServiceMock {#getawsservicemock dir="auto" tabindex="-1"}

[](#getawsservicemock){#user-content-getawsservicemock aria-label="Permalink: getAwsServiceMock"}

To retrieve a mock from the test bed via the correct symbol, `getAwsServiceMock` is exported.

    const s3 = getAwsServiceMock(module, S3);

### createAwsServicePromisableSpy {#createawsservicepromisablespy dir="auto" tabindex="-1"}

[](#createawsservicepromisablespy){#user-content-createawsservicepromisablespy aria-label="Permalink: createAwsServicePromisableSpy"}

It is common to want to use the `.promise()` method returned by most AWS client methods. To make spying on these simpler, the `createAwsServicePromisableSpy` creates a spy and returns a promised value.

    it('should call the list method and return the Content keys', async () => {
      const listSpy: jest.SpyInstance = createAwsServicePromisableSpy(
        s3, // the mocked object to spy on
        'listObjectsV2', // the method to spy on
        'resolve', // 'resolve' or 'reject'
        { Contents: [{ Key: 'myKey' }] }, // the value to resolve or reject
      );

      const result = await service.listBucketContents('myBucket');

      expect(result.length).toBe(1);
      expect(result[0]).toBe('myKey');
      expect(listSpy).toHaveBeenCalledTimes(1);
      expect(listSpy).toHaveBeenCalledWith({ Bucket: 'myBucket' });
    });

## Stay In Touch {#stay-in-touch dir="auto" tabindex="-1"}

[](#stay-in-touch){#user-content-stay-in-touch aria-label="Permalink: Stay In Touch"}

-   Author - [Kerry Ritter](https://twitter.com/kerryritter){rel="nofollow"} and BeerMoneyDev

## License {#license dir="auto" tabindex="-1"}

[](#license){#user-content-license aria-label="Permalink: License"}

nest-aws-sdk is MIT licensed.

## Contributing {#contributing dir="auto" tabindex="-1"}

[](#contributing){#user-content-contributing aria-label="Permalink: Contributing"}

Nest-AWS-SDK is released through [semantic-release](https://github.com/semantic-release/semantic-release). Effectively this means that versioning is based off commit messages. Please review [angular-changelog-convention](https://github.com/conventional-changelog-archived-repos/conventional-changelog-angular/blob/master/convention.md) and commit under that format. Otherwise semantic-release won\'t pick up commits for versioning this library.
