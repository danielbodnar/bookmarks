# hashicorp/terraform-cdk (github.com)

<https://github.com/hashicorp/terraform-cdk>

## Description

Define infrastructure resources using programming constructs and provision them using HashiCorp Terraform - hashicorp/terraform-cdk

## Quote

> Define infrastructure resources using programming constructs and provision them using HashiCorp Terraform

## Tags

#cdk #cdktf #hack #infrastructure-as-code #terraform #TypeScript

## Content

# GitHub - hashicorp/terraform-cdk: Define infrastructure resources using programming constructs and provision them using HashiCorp Terraform {#github---hashicorpterraform-cdk-define-infrastructure-resources-using-programming-constructs-and-provision-them-using-hashicorp-terraform .reader-title}

hashicorp

------------------------------------------------------------------------

[![](https://github.com/hashicorp/terraform-cdk/workflows/Release/badge.svg)](https://github.com/hashicorp/terraform-cdk/workflows/Release/badge.svg){rel="noopener noreferrer"}
[![npm version](https://camo.githubusercontent.com/d7ea763960785dc621bc3ce07dc9a664dcbd96e1770c5325fbc175033229aec6/68747470733a2f2f62616467652e667572792e696f2f6a732f63646b74662e737667){canonical-src="https://badge.fury.io/js/cdktf.svg"}](https://badge.fury.io/js/cdktf){rel="nofollow"}
[![PyPI version](https://camo.githubusercontent.com/4539c8efeaf7757de49d31a9ad68259692eed3e8b597269e62ec4c6d7a05c44a/68747470733a2f2f62616467652e667572792e696f2f70792f63646b74662e737667){canonical-src="https://badge.fury.io/py/cdktf.svg"}](https://badge.fury.io/py/cdktf){rel="nofollow"}
[![NuGet version](https://camo.githubusercontent.com/a89db6d3a83e35553e66d92d1401308216c99ed570bca12ac50fcd8dd0927ea7/68747470733a2f2f62616467652e667572792e696f2f6e752f4861736869436f72702e43646b74662e737667){canonical-src="https://badge.fury.io/nu/HashiCorp.Cdktf.svg"}](https://badge.fury.io/nu/HashiCorp.Cdktf){rel="nofollow"}
[![Maven Central](https://camo.githubusercontent.com/ec301b177b74d3d54dd0ce08879cbf915295e98d125949e4645982ec4a1caed8/68747470733a2f2f696d672e736869656c64732e696f2f6d6176656e2d63656e7472616c2f762f636f6d2e6861736869636f72702f63646b74663f636f6c6f723d627269676874677265656e){canonical-src="https://img.shields.io/maven-central/v/com.hashicorp/cdktf?color=brightgreen"}](https://search.maven.org/artifact/com.hashicorp/cdktf){rel="nofollow"}

## CDK for Terraform {#cdk-for-terraform dir="auto" tabindex="-1"}

[](#cdk-for-terraform){#user-content-cdk-for-terraform aria-label="Permalink: CDK for Terraform"}

Cloud Development Kit for Terraform (CDKTF) allows you to use familiar
programming languages to define cloud infrastructure and provision it through
HashiCorp Terraform. This gives you access to the entire Terraform ecosystem without learning HashiCorp Configuration Language (HCL) and lets you leverage the power of your existing toolchain for testing, dependency management, etc.

We currently support TypeScript, Python, Java, C#, and Go.

[![terraform platform](https://github.com/hashicorp/terraform-cdk/raw/main/docs/terraform-platform.png)](https://github.com/hashicorp/terraform-cdk/blob/main/docs/terraform-platform.png){rel="noopener noreferrer"}

CDKTF includes two packages:

-   [cdktf-cli](https://github.com/hashicorp/terraform-cdk/blob/main/packages/cdktf-cli) - A CLI that allows users to run commands to initialize, import, and synthesize CDK for Terraform applications.
-   [cdktf](https://github.com/hashicorp/terraform-cdk/blob/main/packages/cdktf) - A library for defining Terraform resources using programming constructs.

## Get Started {#get-started dir="auto" tabindex="-1"}

[](#get-started){#user-content-get-started aria-label="Permalink: Get Started"}

Choose a language:

-   [TypeScript](https://developer.hashicorp.com/terraform/tutorials/cdktf/cdktf-build?in=terraform%2Fcdktf&variants=cdk-language%3Atypescript){rel="nofollow"}
-   [Python](https://developer.hashicorp.com/terraform/tutorials/cdktf/cdktf-build?in=terraform%2Fcdktf&variants=cdk-language%3Apython){rel="nofollow"}
-   [Java](https://developer.hashicorp.com/terraform/tutorials/cdktf/cdktf-build?in=terraform%2Fcdktf&variants=cdk-language%3Ajava){rel="nofollow"}
-   [C#](https://developer.hashicorp.com/terraform/tutorials/cdktf/cdktf-build?in=terraform%2Fcdktf&variants=cdk-language%3Acsharp){rel="nofollow"}
-   [Go](https://developer.hashicorp.com/terraform/tutorials/cdktf/cdktf-build?in=terraform%2Fcdktf&variants=cdk-language%3Ago){rel="nofollow"}

> **Hands-on:** Try the tutorials in the [CDK for Terraform](https://learn.hashicorp.com/collections/terraform/cdktf){rel="nofollow"} collection on HashiCorp Learn.

## Documentation {#documentation dir="auto" tabindex="-1"}

[](#documentation){#user-content-documentation aria-label="Permalink: Documentation"}

Refer to the [CDKTF documentation](https://developer.hashicorp.com/terraform/cdktf){rel="nofollow"} for more detail about how to build and manage CDKTF applications, including:

-   [Application Architecture](https://developer.hashicorp.com/terraform/cdktf/concepts/cdktf-architecture){rel="nofollow"}: Learn the tools and processes that CDKTF uses to leverage the Terraform ecosystem and convert code into Terraform configuration files. It also explains the major components of a CDKTF application and how those pieces fit together.

-   [Project Setup](https://developer.hashicorp.com/terraform/cdktf/create-and-deploy/project-setup){rel="nofollow"}: Learn how to create a new CDKTF project from a pre-built or custom template. Also learn how to convert an existing HCL project into a CDKTF application.

-   [Unit Tests](https://developer.hashicorp.com/terraform/cdktf/test/unit-tests){rel="nofollow"}: Learn how to test your application in Typescript with jest.

-   [Examples](https://developer.hashicorp.com/terraform/cdktf/examples-and-guides/examples){rel="nofollow"}: Reference example projects in every supported language and review explanatory videos and other resources.

## Community {#community dir="auto" tabindex="-1"}

[](#community){#user-content-community aria-label="Permalink: Community"}

The development team would love your feedback to help guide the project.

-   Contribute using the [CONTRIBUTING.md](https://github.com/hashicorp/terraform-cdk/blob/main/CONTRIBUTING.md) guide.
-   Ask a question on the HashiCorp [Discuss](https://discuss.hashicorp.com/){rel="nofollow"} using the [terraform-cdk](https://discuss.hashicorp.com/c/terraform-core/cdk-for-terraform/){rel="nofollow"} category.
-   Report a [bug](https://github.com/hashicorp/terraform-cdk/issues/new?assignees=&labels=bug&template=bug-report.md&title=) or request a new [feature](https://github.com/hashicorp/terraform-cdk/issues/new?assignees=&labels=enhancement&template=feature-request.md&title=).
-   Browse all [open issues](https://github.com/hashicorp/terraform-cdk/issues).

## Build {#build dir="auto" tabindex="-1"}

[](#build){#user-content-build aria-label="Permalink: Build"}

About prerequisites, refer the [followings](https://github.com/hashicorp/terraform-cdk/blob/main/CONTRIBUTING.md#prerequisites).

Clone the project repository.

    git clone https://github.com/hashicorp/terraform-cdk.git

Download dependencies.

    cd terraform-cdk/
    yarn install

Build the project and packages.
