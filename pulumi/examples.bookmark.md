# pulumi/examples (github.com)

<https://github.com/pulumi/examples>

## Description

Infrastructure, containers, and serverless apps to AWS, Azure, GCP, and Kubernetes... all deployed with Pulumi - pulumi/examples

## Quote

> Infrastructure, containers, and serverless apps to AWS, Azure, GCP, and Kubernetes... all deployed with Pulumi

## Tags

#aws #azure #gcp #kubernetes #serverless #TypeScript

## Content

# GitHub - pulumi/examples: Infrastructure, containers, and serverless apps to AWS, Azure, GCP, and Kubernetes\... all deployed with Pulumi {#github---pulumiexamples-infrastructure-containers-and-serverless-apps-to-aws-azure-gcp-and-kubernetes...-all-deployed-with-pulumi .reader-title}

pulumi

------------------------------------------------------------------------

[![](https://camo.githubusercontent.com/c0ebfef99391fa52a9dc013f9750d27b677ff795644638022c86f271e98433ef/68747470733a2f2f7777772e70756c756d692e636f6d2f696d616765732f6c6f676f2f6c6f676f2d6f6e2d77686974652d626f782e7376673f){canonical-src="https://www.pulumi.com/images/logo/logo-on-white-box.svg?" width="350"}](https://www.pulumi.com/?utm_campaign=pulumi-examples-github-repo&utm_source=github.com&utm_medium=top-logo "Pulumi Examples - Build and Deploy Infrastructure as Code Solutions on Any Cloud"){rel="nofollow"}

[![Slack](https://camo.githubusercontent.com/cf81ee9a2e26c19a0391b075ab59105997d1208d3f2c324722789c4bcbc2fca1/687474703a2f2f7777772e70756c756d692e636f6d2f696d616765732f646f63732f6261646765732f736c61636b2e737667){canonical-src="http://www.pulumi.com/images/docs/badges/slack.svg"}](https://slack.pulumi.com/?utm_campaign=pulumi-examples-github-repo&utm_source=github.com&utm_medium=slack-badge){rel="nofollow"}
[![GitHub Discussions](https://camo.githubusercontent.com/da5b09a1ea3a02db8db07196bbf13e8520f7752769f2f06c2cef77ec836656dc/68747470733a2f2f696d672e736869656c64732e696f2f6769746875622f64697363757373696f6e732f70756c756d692f70756c756d69){canonical-src="https://img.shields.io/github/discussions/pulumi/pulumi"}](https://github.com/pulumi/pulumi/discussions)
[![License](https://camo.githubusercontent.com/94592b5e6dda688d477d052c73334dd24e8d9538d077b20a4a1fae07915c403f/68747470733a2f2f696d672e736869656c64732e696f2f6769746875622f6c6963656e73652f70756c756d692f70756c756d69){canonical-src="https://img.shields.io/github/license/pulumi/pulumi"}](https://github.com/pulumi/examples/blob/master/LICENSE)

**Pulumi** is the easiest way to build and deploy infrastructure, for any architecture and on any cloud, using programming languages that you already know and love. Code and ship infrastructure faster with your favorite languages and tools, and embed IaC anywhere with [Automation API](https://www.pulumi.com/docs/guides/automation-api/?utm_campaign=pulumi-examples-github-repo&utm_source=github.com&utm_medium=about-pulumi){rel="nofollow"}.

Pulumi is open source under the [Apache 2.0 license](https://github.com/pulumi/pulumi/blob/master/LICENSE), supports many languages and clouds, and is easy to extend.

## Table of contents {#table-of-contents dir="auto" tabindex="-1"}

[](#table-of-contents){#user-content-table-of-contents aria-label="Permalink: Table of contents"}

-   🚀 [About This Repo](#about-the-pulumi-examples-repo)
-   🧰 [All Pulumi Examples](#all-pulumi-examples)
-   👏 [Contributors](#contributors)
-   👥 [Pulumi Community](#community)
-   📘 [Pulumi Developer Resources](#pulumi-developer-resources)
-   🧭 [Pulumi Roadmap](#pulumi-roadmap)

## About the Pulumi Examples Repo {#about-the-pulumi-examples-repo dir="auto" tabindex="-1"}

[](#about-the-pulumi-examples-repo){#user-content-about-the-pulumi-examples-repo aria-label="Permalink: About the Pulumi Examples Repo"}

[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/pulumi/examples){rel="nofollow"}

This repository contains examples of using Pulumi to build and deploy cloud applications and infrastructure across major programming languages.

Each example has a two-part prefix, `<cloud>-<language>`, to indicate which `<cloud>` and `<language>` it pertains to. For example, `<cloud>` could be:

-   `aws` for [Amazon Web Services](https://github.com/pulumi/pulumi-aws)
-   `azure` for [Microsoft Azure](https://github.com/pulumi/pulumi-azure)
-   `gcp` for [Google Cloud Platform](https://github.com/pulumi/pulumi-gcp)
-   `kubernetes` for [Kubernetes](https://github.com/pulumi/pulumi-kubernetes)
-   `cloud` for [Pulumi\'s cross-cloud programming framework](https://github.com/pulumi/pulumi-cloud).

See the [Pulumi documentation](https://www.pulumi.com/docs/?utm_campaign=pulumi-examples-github-repo&utm_source=github.com&utm_medium=pulumi-examples){rel="nofollow"} for more details on getting started with Pulumi.

## Checking out a single example {#checking-out-a-single-example dir="auto" tabindex="-1"}

[](#checking-out-a-single-example){#user-content-checking-out-a-single-example aria-label="Permalink: Checking out a single example"}

You can checkout only the example(s) you want by using a [sparse checkout](https://git-scm.com/docs/git-sparse-checkout){rel="nofollow"}. The following commands show how checkout only the `aws-go-fargate` example. Replace `aws-go-fargate` with your example of interest.

    $ mkdir examples && cd examples
    $ git init
    $ git remote add origin -f https://github.com/pulumi/examples/
    $ git config core.sparseCheckout true
    $ echo "aws-go-fargate" >> .git/info/sparse-checkout ## update this
    $ git pull origin master

Don\'t see an example listed? [Try Pulumi AI](https://www.pulumi.com/ai/?utm_campaign=pulumi-examples-github-repo&utm_source=github.com&utm_medium=pulumi-examples){rel="nofollow"} and use natural-language prompts to generate Pulumi infrastructure-as-code programs in *any* language.

## All Pulumi examples {#all-pulumi-examples dir="auto" tabindex="-1"}

[](#all-pulumi-examples){#user-content-all-pulumi-examples aria-label="Permalink: All Pulumi examples"}

-   [AWS](#aws)
    -   [TypeScript](#typescript)
    -   [JavaScript](#javascript)
    -   [Python](#python)
    -   [Go](#go)
    -   [C#](#c)
    -   [F#](#f)
-   [Azure](#azure)
    -   [TypeScript](#typescript-1)
    -   [Python](#python-1)
    -   [Go](#go-1)
    -   [C#](#c-1)
    -   [F#](#f-1)
-   [GCP](#gcp)
    -   [TypeScript](#typescript-2)
    -   [JavaScript](#javascript-1)
    -   [Python](#python-2)
    -   [Go](#go-2)
    -   [C#](#c-2)
-   [Kubernetes](#kubernetes)
    -   [TypeScript](#typescript-3)
    -   [JavaScript](#javascript-2)
    -   [Python](#python-3)
    -   [Go](#go-3)
    -   [C#](#c-3)
-   [Openstack](#openstack)
-   [OVHCloud](#ovhcloud)
-   [Cloud](#cloud)
-   [DigitalOcean](#digitalocean)
-   [Multicloud](#multicloud)
-   [F5](#f5)
-   [Twilio](#twilio)
-   [Linode](#linode)
-   [Testing](#testing)
-   [Automation API](https://github.com/pulumi/automation-api-examples)

## AWS {#aws dir="auto" tabindex="-1"}

[](#aws){#user-content-aws aria-label="Permalink: AWS"}

### TypeScript {#typescript dir="auto" tabindex="-1"}

[](#typescript){#user-content-typescript aria-label="Permalink: TypeScript"}

[🔝 Back to the list](#all-pulumi-examples)

  Example                                                                                                                        Description
  ------------------------------------------------------------------------------------------------------------------------------ ------------------------------------------------------------------------------------------------------------------------------------------------------------
  [API Gateway](https://github.com/pulumi/examples/blob/master/aws-ts-apigateway)                                                Deploy a simple REST API that counts the number of times a route has been hit.
  [API Gateway HTTP API with routes](https://github.com/pulumi/examples/blob/master/aws-ts-apigatewayv2-http-api)                Deploy a HTTP API that invokes a Lambda.
  [API Gateway HTTP API quickstart](https://github.com/pulumi/examples/blob/master/aws-ts-apigatewayv2-http-api-quickcreate)     Deploy a very simple HTTP API that invokes a Lambda.
  [API Gateway V1 with EventBridge and Lambda](https://github.com/pulumi/examples/blob/master/aws-ts-apigateway-eventbridge)     Deploy a REST API that uses EventBridge to target a Lambda function. Includes API Gateway model validation and custom integration-response mapping.
  [API Gateway V2 with EventBridge and Lambda](https://github.com/pulumi/examples/blob/master/aws-ts-apigatewayv2-eventbridge)   Deploy an HTTP API that uses EventBridge to target a Lambda function.
  [Apigateway - Auth0](https://github.com/pulumi/examples/blob/master/aws-ts-apigateway-auth0)                                   Deploy a simple REST API protected by Auth0.
  [AppSync](https://github.com/pulumi/examples/blob/master/aws-ts-appsync)                                                       Deploy a basic GraphQL endpoint in AWS AppSync.
  [AssumeRole](https://github.com/pulumi/examples/blob/master/aws-ts-assume-role)                                                Use AssumeRole to create resources.
  [Containers](https://github.com/pulumi/examples/blob/master/aws-ts-containers)                                                 Provision containers on Fargate.
  [EKS - Dashboard](https://github.com/pulumi/examples/blob/master/aws-ts-eks)                                                   Deploy an EKS Kubernetes cluster with an EBS-backed StorageClass, then the Kubernetes Dashboard into the cluster.
  [EKS - Hello World](https://github.com/pulumi/examples/blob/master/aws-ts-eks-hello-world)                                     Deploy an EKS Kubernetes cluster with an EBS-backed StorageClass, then a Kubernetes namespace and nginx deployment into the cluster.
  [EKS - Migrate Node Groups](https://github.com/pulumi/examples/blob/master/aws-ts-eks-migrate-nodegroups)                      Create an EKS cluster and node group to use for workload migration with zero downtime.
  [Fargate](https://github.com/pulumi/examples/blob/master/aws-ts-hello-fargate)                                                 Build, deploy, and run a Dockerized app using ECS, ECR, and Fargate.
  [Lambda Thumbnailer](https://github.com/pulumi/examples/blob/master/aws-ts-lambda-thumbnailer)                                 Create a video thumbnail extractor using serverless functions.
  [Miniflux](https://github.com/pulumi/examples/blob/master/aws-ts-pulumi-miniflux)                                              Stand up an RSS Service using Fargate and RDS.
  [Pulumi Webhooks](https://github.com/pulumi/examples/blob/master/aws-ts-pulumi-webhooks)                                       Create a Pulumi `cloud.HttpEndpoint` that receives webhook events delivered by Pulumi Cloud, then echos the event to Slack.
  [RDS and Airflow](https://github.com/pulumi/examples/blob/master/aws-ts-airflow)                                               Deploy a RDS Postgres instance and containerized Airflow.
  [Resources](https://github.com/pulumi/examples/blob/master/aws-ts-resources)                                                   Create various resources, including `cloudwatch.Dashboard`, `cloudwatch.EventRule`, `cloudwatch.LogGroup`, and `sqs.Queue`.
  [Ruby on Rails](https://github.com/pulumi/examples/blob/master/aws-ts-ruby-on-rails)                                           Create a single EC2 virtual machine instance with a local MySQL database.
  [S3 Lambda](https://github.com/pulumi/examples/blob/master/aws-ts-s3-lambda-copyzip)                                           Set up two AWS S3 Buckets and a single Lambda that listens to one and, upon each new object arriving in it, zips it up and copies it to the second bucket.
  [Serverless Application](https://github.com/pulumi/examples/blob/master/aws-ts-serverless-raw)                                 Deploy a complete serverless C# application using raw resources from `@pulumi/aws`.
  [Serverless Datawarehouse](https://github.com/pulumi/examples/blob/master/aws-ts-serverless-datawarehouse)                     Deploy a serverless data warehouse.
  [Slackbot](https://github.com/pulumi/examples/blob/master/aws-ts-slackbot)                                                     Create a simple slackbot that posts a notification to a specific channel any time you\'re \@mentioned anywhere.
  [Stack Reference](https://github.com/pulumi/examples/blob/master/aws-ts-stackreference)                                        Create a \"team\" EC2 Instance with tags set from upstream stacks.
  [Static Website](https://github.com/pulumi/examples/blob/master/aws-ts-static-website)                                         Serve a static website using S3, CloudFront, Route53, and Certificate Manager.
  [Step Functions](https://github.com/pulumi/examples/blob/master/aws-ts-stepfunctions)                                          Use Step Functions with a Lambda function.
  [Thumbnailer](https://github.com/pulumi/examples/blob/master/aws-ts-thumbnailer)                                               Create a video thumbnail extractor using serverless functions and containers.
  [Twitter](https://github.com/pulumi/examples/blob/master/aws-ts-twitter-athena)                                                Query Twitter every 2 minutes, store the results in S3, and set up an Athena table and query.
  [URL Shortener](https://github.com/pulumi/examples/blob/master/aws-ts-url-shortener-cache-http)                                Create a serverless URL shortener that uses high-level components.
  [Voting App](https://github.com/pulumi/examples/blob/master/aws-ts-voting-app)                                                 Create a simple voting app using Redis and Python Flask.
  [Web Server](https://github.com/pulumi/examples/blob/master/aws-ts-webserver)                                                  Deploy an EC2 Virtual machine using TypeScript to run a Python web server.
  [Web Server with Manual Provisioning](https://github.com/pulumi/examples/blob/master/aws-ts-ec2-provisioners)                  Use Pulumi dynamic providers to accomplish post-provisioning configuration steps.
  [LangServe - Hello OpenAI](https://github.com/pulumi/examples/blob/master/aws-ts-langserve)                                    Deploy a LangServe app that uses OpenAI\'s on AWS ECS.

[Use Pulumi AI](https://www.pulumi.com/ai/?utm_campaign=pulumi-examples-github-repo&utm_source=github.com&utm_medium=pulumi-examples){rel="nofollow"} to build a new example in *any* language.

### JavaScript {#javascript dir="auto" tabindex="-1"}

[](#javascript){#user-content-javascript aria-label="Permalink: JavaScript"}

[🔝 Back to the list](#all-pulumi-examples)

  Example                                                                                               Description
  ----------------------------------------------------------------------------------------------------- ----------------------------------------------------------------------------------
  [Containers](https://github.com/pulumi/examples/blob/master/aws-js-containers)                        Provision containers on Fargate.
  [S3 Folder Component](https://github.com/pulumi/examples/blob/master/aws-js-s3-folder-component)      Serve a static website on S3 from a component.
  [S3 Folder](https://github.com/pulumi/examples/blob/master/aws-js-s3-folder)                          Serve a static website on S3.
  [Servless SQS to Slack](https://github.com/pulumi/examples/blob/master/aws-js-sqs-slack)              Wire up a serverless AWS Lambda to an AWS SQS queue and post a message to Slack.
  [Web Server - Component](https://github.com/pulumi/examples/blob/master/aws-js-webserver-component)   Deploy an EC2 instance using a common module for creating an instance.
  [Web Server](https://github.com/pulumi/examples/blob/master/aws-js-webserver)                         Deploy an EC2 Virtual machine running a Python web server.
  [LangServe - Hello OpenAI](https://github.com/pulumi/examples/blob/master/aws-js-langserve)           Deploy a LangServe app that uses OpenAI\'s on AWS ECS.

[Use Pulumi AI](https://www.pulumi.com/ai/?utm_campaign=pulumi-examples-github-repo&utm_source=github.com&utm_medium=pulumi-examples){rel="nofollow"} to build a new example in *any* language.

### Python {#python dir="auto" tabindex="-1"}

[](#python){#user-content-python aria-label="Permalink: Python"}

[🔝 Back to the list](#all-pulumi-examples)

  Example                                                                                                                        Description
  ------------------------------------------------------------------------------------------------------------------------------ -----------------------------------------------------------------------------------------------------------------------------
  [API Gateway HTTP API quickstart](https://github.com/pulumi/examples/blob/master/aws-py-apigatewayv2-http-api-quickcreate)     Deploy a very simple HTTP API that invokes a Lambda.
  [API Gateway V2 with EventBridge and Lambda](https://github.com/pulumi/examples/blob/master/aws-py-apigatewayv2-eventbridge)   Deploy an HTTP API that uses EventBridge to target a Lambda function.
  [AppSync](https://github.com/pulumi/examples/blob/master/aws-py-appsync)                                                       Deploy a basic GraphQL endpoint in AWS AppSync.
  [AssumeRole](https://github.com/pulumi/examples/blob/master/aws-py-assume-role)                                                Use AssumeRole to create resources.
  [Fargate](https://github.com/pulumi/examples/blob/master/aws-py-fargate)                                                       Provision a full ECS Fargate cluster running a load-balanced nginx web server.
  [Resources](https://github.com/pulumi/examples/blob/master/aws-py-resources)                                                   Create various resources, including `cloudwatch.Dashboard`, `cloudwatch.EventRule`, `cloudwatch.LogGroup`, and `sqs.Queue`.
  [S3 Folder](https://github.com/pulumi/examples/blob/master/aws-py-s3-folder)                                                   Serve a static website on S3.
  [Stack Reference](https://github.com/pulumi/examples/blob/master/aws-py-stackreference)                                        Create a \"team\" EC2 Instance with tags set from upstream stacks.
  [Step Functions](https://github.com/pulumi/examples/blob/master/aws-py-stepfunctions)                                          Use Step Functions with a Lambda function.
  [Web Server](https://github.com/pulumi/examples/blob/master/aws-py-webserver)                                                  Deploy an EC2 instance and open port 80.
  [LangServe - Hello OpenAI](https://github.com/pulumi/examples/blob/master/aws-py-langserve)                                    Deploy a LangServe app that uses OpenAI\'s on AWS ECS.

[Use Pulumi AI](https://www.pulumi.com/ai/?utm_campaign=pulumi-examples-github-repo&utm_source=github.com&utm_medium=pulumi-examples){rel="nofollow"} to build a new example in *any* language.

### Go {#go dir="auto" tabindex="-1"}

[](#go){#user-content-go aria-label="Permalink: Go"}

[🔝 Back to the list](#all-pulumi-examples)

  Example                                                                                       Description
  --------------------------------------------------------------------------------------------- ----------------------------------------------------------------------------------
  [AssumeRole](https://github.com/pulumi/examples/blob/master/aws-go-assume-role)               Use AssumeRole to create resources.
  [Fargate](https://github.com/pulumi/examples/blob/master/aws-go-fargate)                      Provision a full ECS Fargate cluster running a load-balanced nginx web server.
  [Lambda](https://github.com/pulumi/examples/blob/master/aws-go-lambda)                        Create a lambda that does a simple `ToUpper` on the string input and returns it.
  [S3 Folder](https://github.com/pulumi/examples/blob/master/aws-go-s3-folder)                  Serve a static website on S3.
  [Web Server](https://github.com/pulumi/examples/blob/master/aws-go-webserver)                 Deploy an EC2 Virtual machine running a Python web server.
  [LangServe - Hello OpenAI](https://github.com/pulumi/examples/blob/master/aws-go-langserve)   Deploy a LangServe app that uses OpenAI\'s on AWS ECS.

[Use Pulumi AI](https://www.pulumi.com/ai/?utm_campaign=pulumi-examples-github-repo&utm_source=github.com&utm_medium=pulumi-examples){rel="nofollow"} to build a new example in *any* language.

### C# {#c dir="auto" tabindex="-1"}

[](#c){#user-content-c aria-label="Permalink: C#"}

[🔝 Back to the list](#all-pulumi-examples)

  Example                                                                                       Description
  --------------------------------------------------------------------------------------------- ----------------------------------------------------------------------------------
  [AssumeRole](https://github.com/pulumi/examples/blob/master/aws-cs-assume-role)               Use AssumeRole to create resources.
  [Fargate](https://github.com/pulumi/examples/blob/master/aws-cs-fargate)                      Build, deploy, and run a Dockerized app using ECS, ECR, and Fargate.
  [Lambda](https://github.com/pulumi/examples/blob/master/aws-cs-lambda)                        Create a lambda that does a simple `ToUpper` on the string input and returns it.
  [S3 Folder](https://github.com/pulumi/examples/blob/master/aws-cs-s3-folder)                  Serve a static website on S3.
  [Web Server](https://github.com/pulumi/examples/blob/master/aws-cs-webserver)                 Deploy an EC2 instance and open port 80.
  [LangServe - Hello OpenAI](https://github.com/pulumi/examples/blob/master/aws-cs-langserve)   Deploy a LangServe app that uses OpenAI\'s on AWS ECS.

[Use Pulumi AI](https://www.pulumi.com/ai/?utm_campaign=pulumi-examples-github-repo&utm_source=github.com&utm_medium=pulumi-examples){rel="nofollow"} to build a new example in *any* language.

### F# {#f dir="auto" tabindex="-1"}

[](#f){#user-content-f aria-label="Permalink: F#"}

[🔝 Back to the list](#all-pulumi-examples)

  Example                                                                                       Description
  --------------------------------------------------------------------------------------------- -----------------------------------------------------------------
  [Lambda Web Server](https://github.com/pulumi/examples/blob/master/aws-fs-lambda-webserver)   Create a web server in AWS lambda using the Giraffe web server.
  [S3 Folder](https://github.com/pulumi/examples/blob/master/aws-fs-s3-folder)                  Serve a static website on S3.

[Use Pulumi AI](https://www.pulumi.com/ai/?utm_campaign=pulumi-examples-github-repo&utm_source=github.com&utm_medium=pulumi-examples){rel="nofollow"} to build a new example in *any* language.

## Azure {#azure dir="auto" tabindex="-1"}

[](#azure){#user-content-azure aria-label="Permalink: Azure"}

### TypeScript {#typescript-1 dir="auto" tabindex="-1"}

[](#typescript-1){#user-content-typescript-1 aria-label="Permalink: TypeScript"}

[🔝 Back to the list](#all-pulumi-examples)

  Example                                                                                                                           Description
  --------------------------------------------------------------------------------------------------------------------------------- ----------------------------------------------------------------------------------------------------------------
  [Azure Container Apps](https://github.com/pulumi/examples/blob/master/azure-ts-containerapps)                                     Run a Docker image on Azure Container Apps.
  [Azure Container Instance](https://github.com/pulumi/examples/blob/master/azure-ts-aci)                                           Run Azure Container Instances on Linux.
  [Azure Kubernetes Service](https://github.com/pulumi/examples/blob/master/azure-ts-aks)                                           Create an Azure Kubernetes Service (AKS) Cluster.
  [Azure App Service](https://github.com/pulumi/examples/blob/master/azure-ts-appservice)                                           Build a web application hosted in App Service and provision Azure SQL Database and Azure Application Insights.
  [Azure App Service with Docker](https://github.com/pulumi/examples/blob/master/azure-ts-appservice-docker)                        Build a web application hosted in App Service from Docker images.
  [App Service in Virtual Network](https://github.com/pulumi/examples/blob/master/azure-ts-webapp-privateendpoint-vnet-injection)   Deploy two App Services - Front web app with VNet injection and Back web app with a Private Endpoint.
  [Azure Cosmos DB and LogicApp](https://github.com/pulumi/examples/blob/master/azure-ts-cosmosdb-logicapp)                         Define Cosmos DB, API connections, and link them to a logic app.
  [Azure Functions](https://github.com/pulumi/examples/blob/master/azure-ts-functions)                                              Deploy a Node.js serverless function to Azure Functions.
  [Azure Functions - Many](https://github.com/pulumi/examples/blob/master/azure-ts-functions-many)                                  Deploy several kinds of Azure Functions created from raw deployment packages.
  [Azure SDK integration](https://github.com/pulumi/examples/blob/master/azure-ts-call-azure-sdk)                                   Call Azure SDK functions from a Pulumi program.
  [Static Website](https://github.com/pulumi/examples/blob/master/azure-ts-static-website)                                          Configure static website hosting in Azure Storage.
  [Azure Synapse](https://github.com/pulumi/examples/blob/master/azure-ts-synapse)                                                  Starting point for enterprise analytics solutions based on Azure Synapse.
  [Web Server](https://github.com/pulumi/examples/blob/master/azure-ts-webserver)                                                   Provision a Linux web server in an Azure Virtual Machine.

[Use Pulumi AI](https://www.pulumi.com/ai/?utm_campaign=pulumi-examples-github-repo&utm_source=github.com&utm_medium=pulumi-examples){rel="nofollow"} to build a new example in *any* language.

### Python {#python-1 dir="auto" tabindex="-1"}

[](#python-1){#user-content-python-1 aria-label="Permalink: Python"}

[🔝 Back to the list](#all-pulumi-examples)

  Example                                                                                                      Description
  ------------------------------------------------------------------------------------------------------------ ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  [Azure Container Apps](https://github.com/pulumi/examples/blob/master/azure-py-containerapps)                Run a Docker image on Azure Container Apps.
  [Azure Container Instance](https://github.com/pulumi/examples/blob/master/azure-py-aci)                      Run Azure Container Instances on Linux.
  [Azure Kubernetes Service](https://github.com/pulumi/examples/blob/master/azure-py-aks)                      Create an Azure Kubernetes Service (AKS) Cluster.
  [Azure App Service](https://github.com/pulumi/examples/blob/master/azure-py-appservice)                      Build a web application hosted in App Service and provision Azure SQL Database and Azure Application Insights.
  [Azure App Service with Docker](https://github.com/pulumi/examples/blob/master/azure-py-appservice-docker)   Build a web application hosted in App Service from Docker images.
  [Azure SDK integration](https://github.com/pulumi/examples/blob/master/azure-py-call-azure-sdk)              Call Azure SDK functions from a Pulumi program in Python.
  [Azure Cosmos DB and LogicApp](https://github.com/pulumi/examples/blob/master/azure-py-cosmosdb-logicapp)    Define Cosmos DB, API connections, and link them to a logic app.
  [Minecraft Server](https://github.com/pulumi/examples/blob/master/azure-py-minecraft-server)                 Deploy an Azure Virtual Machine and provision a Minecraft server.
  [Static Website](https://github.com/pulumi/examples/blob/master/azure-py-static-website)                     Configure static website hosting in Azure Storage.
  [Azure Synapse](https://github.com/pulumi/examples/blob/master/azure-py-synapse)                             Starting point for enterprise analytics solutions based on Azure Synapse.
  [Virtual Data Center](https://github.com/pulumi/examples/blob/master/azure-py-virtual-data-center)           Deploy Azure Virtual Data Center (VDC) hub-and-spoke network stacks in Azure, complete with ExpressRoute and VPN Gateways, Azure Firewall guarding a DMZ, and Azure Bastion.
  [Web Server](https://github.com/pulumi/examples/blob/master/azure-py-webserver)                              Provision a Linux web server in an Azure Virtual Machine.

[Use Pulumi AI](https://www.pulumi.com/ai/?utm_campaign=pulumi-examples-github-repo&utm_source=github.com&utm_medium=pulumi-examples){rel="nofollow"} to build a new example in *any* language.

### Go {#go-1 dir="auto" tabindex="-1"}

[](#go-1){#user-content-go-1 aria-label="Permalink: Go"}

[🔝 Back to the list](#all-pulumi-examples)

  Example                                                                                                      Description
  ------------------------------------------------------------------------------------------------------------ -------------------------------------------------------------------
  [Azure Container Apps](https://github.com/pulumi/examples/blob/master/azure-go-containerapps)                Run a Docker image on Azure Container Apps.
  [Azure Container Instance](https://github.com/pulumi/examples/blob/master/azure-go-aci)                      Run Azure Container Instances on Linux.
  [Azure Kubernetes Service](https://github.com/pulumi/examples/blob/master/azure-go-aks)                      Create an Azure Kubernetes Service (AKS) Cluster.
  [Azure App Service with Docker](https://github.com/pulumi/examples/blob/master/azure-go-appservice-docker)   Build a web application hosted in App Service from Docker images.
  [Static Website](https://github.com/pulumi/examples/blob/master/azure-go-static-website)                     Configure static website hosting in Azure Storage.
  [Azure SDK integration](https://github.com/pulumi/examples/blob/master/azure-go-call-azure-sdk)              Call Azure SDK functions from a Pulumi programin Go.

[Use Pulumi AI](https://www.pulumi.com/ai/?utm_campaign=pulumi-examples-github-repo&utm_source=github.com&utm_medium=pulumi-examples){rel="nofollow"} to build a new example in *any* language.

### C# {#c-1 dir="auto" tabindex="-1"}

[](#c-1){#user-content-c-1 aria-label="Permalink: C#"}

[🔝 Back to the list](#all-pulumi-examples)

  Example                                                                                                      Description
  ------------------------------------------------------------------------------------------------------------ ----------------------------------------------------------------------------------------------------------------
  Cluster.                                                                                                     
  [Azure Container Apps](https://github.com/pulumi/examples/blob/master/azure-cs-containerapps)                Run a Docker image on Azure Container Apps.
  [Azure Container Instance](https://github.com/pulumi/examples/blob/master/azure-cs-aci)                      Run Azure Container Instances on Linux.
  [Azure Kubernetes Service](https://github.com/pulumi/examples/blob/master/azure-cs-aks)                      Create an Azure Kubernetes Service (AKS) Cluster.
  [AKS web app with .NET 5](https://github.com/pulumi/examples/blob/master/azure-cs-net5-aks-webapp)           Create an Azure Kubernetes Service (AKS) cluster and deploy a web app to it using .NET 5 and C# 9.
  [AKS + Cosmos DB](https://github.com/pulumi/examples/blob/master/azure-cs-aks-cosmos-helm)                   A Helm chart deployed to AKS that stores TODOs in an Azure Cosmos DB MongoDB API.
  [Azure App Service](https://github.com/pulumi/examples/blob/master/azure-cs-appservice)                      Build a web application hosted in App Service and provision Azure SQL Database and Azure Application Insights.
  [Azure App Service with Docker](https://github.com/pulumi/examples/blob/master/azure-cs-appservice-docker)   Build a web application hosted in App Service from Docker images.
  [Azure API integration](https://github.com/pulumi/examples/blob/master/azure-cs-call-azure-api)              Call additional Azure API endpoints from a Pulumi program.
  [Azure Cosmos DB and LogicApp](https://github.com/pulumi/examples/blob/master/azure-cs-cosmosdb-logicapp)    Define Cosmos DB, API connections, and link them to a logic app.
  [Azure Functions](https://github.com/pulumi/examples/blob/master/azure-cs-functions)                         Deploy a Node.js serverless function to Azure Functions.
  [Static Website](https://github.com/pulumi/examples/blob/master/azure-cs-static-website)                     Configure static website hosting in Azure Storage.
  [Azure Synapse](https://github.com/pulumi/examples/blob/master/azure-cs-synapse)                             Starting point for enterprise analytics solutions based on Azure Synapse.
  [Azure SQL Server](https://github.com/pulumi/examples/blob/master/azure-cs-sqlserver)                        An example of a SQLServer on Azure PaaS.

[Use Pulumi AI](https://www.pulumi.com/ai/?utm_campaign=pulumi-examples-github-repo&utm_source=github.com&utm_medium=pulumi-examples){rel="nofollow"} to build a new example in *any* language.

## GCP {#gcp dir="auto" tabindex="-1"}

[](#gcp){#user-content-gcp aria-label="Permalink: GCP"}

### TypeScript {#typescript-2 dir="auto" tabindex="-1"}

[](#typescript-2){#user-content-typescript-2 aria-label="Permalink: TypeScript"}

[🔝 Back to the list](#all-pulumi-examples)

  Example                                                                                               Description
  ----------------------------------------------------------------------------------------------------- -----------------------------------------------------------------------------------------------------------------
  [Cloud Run](https://github.com/pulumi/examples/blob/master/gcp-ts-cloudrun)                           Deploy a custom Docker image into Google Cloud Run service.
  [Functions - Raw](https://github.com/pulumi/examples/blob/master/gcp-ts-serverless-raw)               Deploy two Google Cloud Functions implemented in Python and Go.
  [Functions](https://github.com/pulumi/examples/blob/master/gcp-ts-functions)                          Deploy an HTTP Google Cloud Function endpoint.
  [GKE - Hello World](https://github.com/pulumi/examples/blob/master/gcp-ts-gke-hello-world)            Deploy a GKE cluster, then a Kubernetes namespace and nginx deployment into the cluster.
  [GKE](https://github.com/pulumi/examples/blob/master/gcp-ts-gke)                                      Provision a Google Kubernetes Engine (GKE) cluster, then a Kubernetes Deployment.
  [Ruby on Rails](https://github.com/pulumi/examples/blob/master/gcp-ts-k8s-ruby-on-rails-postgresql)   Deliver a containerized Ruby on Rails application.
  [Slackbot](https://github.com/pulumi/examples/blob/master/gcp-ts-slackbot)                            Create a simple slackbot that posts a notification to a specific channel any time you\'re \@mentioned anywhere.

[Use Pulumi AI](https://www.pulumi.com/ai/?utm_campaign=pulumi-examples-github-repo&utm_source=github.com&utm_medium=pulumi-examples){rel="nofollow"} to build a new example in *any* language.

### JavaScript {#javascript-1 dir="auto" tabindex="-1"}

[](#javascript-1){#user-content-javascript-1 aria-label="Permalink: JavaScript"}

[🔝 Back to the list](#all-pulumi-examples)

  Example                                                                         Description
  ------------------------------------------------------------------------------- -------------------------------------
  [Web Server](https://github.com/pulumi/examples/blob/master/gcp-js-webserver)   Build a web server in Google Cloud.

[Use Pulumi AI](https://www.pulumi.com/ai/?utm_campaign=pulumi-examples-github-repo&utm_source=github.com&utm_medium=pulumi-examples){rel="nofollow"} to build a new example in *any* language.

### Python {#python-2 dir="auto" tabindex="-1"}

[](#python-2){#user-content-python-2 aria-label="Permalink: Python"}

[🔝 Back to the list](#all-pulumi-examples)

  Example                                                                                        Description
  ---------------------------------------------------------------------------------------------- -----------------------------------------------------------------------------------
  [Functions - Raw](https://github.com/pulumi/examples/blob/master/gcp-py-serverless-raw)        Deploy two Google Cloud Functions implemented in Python and Go.
  [Functions](https://github.com/pulumi/examples/blob/master/gcp-py-functions)                   Deploy a Python-based Google Cloud Function.
  [GKE](https://github.com/pulumi/examples/blob/master/gcp-py-gke)                               Provision a Google Kubernetes Engine (GKE) cluster, then a Kubernetes Deployment.
  [Network Component](https://github.com/pulumi/examples/blob/master/gcp-py-network-component)   Use a reusable component to create a Google Cloud Network and instance.
  [nginx Server](https://github.com/pulumi/examples/blob/master/gcp-py-instance-nginx)           Build a nginx server in Google Cloud.

[Use Pulumi AI](https://www.pulumi.com/ai/?utm_campaign=pulumi-examples-github-repo&utm_source=github.com&utm_medium=pulumi-examples){rel="nofollow"} to build a new example in *any* language.

### Go {#go-2 dir="auto" tabindex="-1"}

[](#go-2){#user-content-go-2 aria-label="Permalink: Go"}

[🔝 Back to the list](#all-pulumi-examples)

  Example                                                                                   Description
  ----------------------------------------------------------------------------------------- -------------------------------------------------------
  [Functions](https://github.com/pulumi/examples/blob/master/gcp-go-functions)              Deploy a Go-based Google Cloud Function.
  [Functions - Raw](https://github.com/pulumi/examples/blob/master/gcp-py-serverless-raw)   Deploy a Google Cloud Function implemented in Python.
  [Web Server](https://github.com/pulumi/examples/blob/master/gcp-go-webserver)             Build a web server in Google Cloud.

[Use Pulumi AI](https://www.pulumi.com/ai/?utm_campaign=pulumi-examples-github-repo&utm_source=github.com&utm_medium=pulumi-examples){rel="nofollow"} to build a new example in *any* language.

### C# {#c-2 dir="auto" tabindex="-1"}

[](#c-2){#user-content-c-2 aria-label="Permalink: C#"}

[🔝 Back to the list](#all-pulumi-examples)

  Example                                                                                   Description
  ----------------------------------------------------------------------------------------- -------------------------------------------------------
  [Functions - Raw](https://github.com/pulumi/examples/blob/master/gcp-py-serverless-raw)   Deploy a Google Cloud Function implemented in Python.
  [Functions](https://github.com/pulumi/examples/blob/master/gcp-go-functions)              Deploy a Go-based Google Cloud Function.

[Use Pulumi AI](https://www.pulumi.com/ai/?utm_campaign=pulumi-examples-github-repo&utm_source=github.com&utm_medium=pulumi-examples){rel="nofollow"} to build a new example in *any* language.

## Kubernetes {#kubernetes dir="auto" tabindex="-1"}

[](#kubernetes){#user-content-kubernetes aria-label="Permalink: Kubernetes"}

### TypeScript {#typescript-3 dir="auto" tabindex="-1"}

[](#typescript-3){#user-content-typescript-3 aria-label="Permalink: TypeScript"}

[🔝 Back to the list](#all-pulumi-examples)

  Example                                                                                                             Description
  ------------------------------------------------------------------------------------------------------------------- -----------------------------------------------------------------------------------------------------------------------
  [App Rollout via ConfigMap](https://github.com/pulumi/examples/blob/master/kubernetes-ts-configmap-rollout)         Enable a change in a ConfigMap to trigger a rollout of an nginx Deployment.
  [App Rollout via S3 Data Change](https://github.com/pulumi/examples/blob/master/kubernetes-ts-s3-rollout)           Enable a change in data in S3 to trigger a rollout of an nginx deployment.
  [Expose Deployment](https://github.com/pulumi/examples/blob/master/kubernetes-ts-exposed-deployment)                Deploy nginx to a Kubernetes cluster, and publicly explose it using a Kubernetes Service.
  [Guestbook](https://github.com/pulumi/examples/blob/master/kubernetes-ts-guestbook)                                 Build and deploy a simple, multi-tier web application using Kubernetes and Docker.
  [Jenkins](https://github.com/pulumi/examples/blob/master/kubernetes-ts-jenkins)                                     Deploy a container running the Jenkins continuous integration system onto a running Kubernetes cluster.
  [Multicloud](https://github.com/pulumi/examples/blob/master/kubernetes-ts-multicloud)                               Create managed Kubernetes clusters using AKS, EKS, and GKE, and deploy the application on each cluster.
  [nginx server](https://github.com/pulumi/examples/blob/master/kubernetes-ts-nginx)                                  Deploy a replicated nginx server to a Kubernetes cluster, using TypeScript and no YAML.
  [Sock Shop](https://github.com/pulumi/examples/blob/master/kubernetes-ts-sock-shop)                                 Deploy a version of the standard Sock Shop microservices reference app.
  [Staged App Rollout](https://github.com/pulumi/examples/blob/master/kubernetes-ts-staged-rollout-with-prometheus)   Create a staged rollout gated by checking that the P90 response time reported by Prometheus is less than some amount.
  [Wordpress Helm Chart](https://github.com/pulumi/examples/blob/master/kubernetes-ts-helm-wordpress)                 Use the Helm API to deploy v2.1.3 of the Wordpress Helm Chart to a Kubernetes cluster.

[Use Pulumi AI](https://www.pulumi.com/ai/?utm_campaign=pulumi-examples-github-repo&utm_source=github.com&utm_medium=pulumi-examples){rel="nofollow"} to build a new example in *any* language.

### Python {#python-3 dir="auto" tabindex="-1"}

[](#python-3){#user-content-python-3 aria-label="Permalink: Python"}

[🔝 Back to the list](#all-pulumi-examples)

  Example                                                                               Description
  ------------------------------------------------------------------------------------- ------------------------------------------------------------------------------------
  [Guestbook](https://github.com/pulumi/examples/blob/master/kubernetes-py-guestbook)   Build and deploy a simple, multi-tier web application using Kubernetes and Docker.

[Use Pulumi AI](https://www.pulumi.com/ai/?utm_campaign=pulumi-examples-github-repo&utm_source=github.com&utm_medium=pulumi-examples){rel="nofollow"} to build a new example in *any* language.

### C# {#c-3 dir="auto" tabindex="-1"}

[](#c-3){#user-content-c-3 aria-label="Permalink: C#"}

[🔝 Back to the list](#all-pulumi-examples)

  Example                                                                               Description
  ------------------------------------------------------------------------------------- ------------------------------------------------------------------------------------
  [Guestbook](https://github.com/pulumi/examples/blob/master/kubernetes-cs-guestbook)   Build and deploy a simple, multi-tier web application using Kubernetes and Docker.

[Use Pulumi AI](https://www.pulumi.com/ai/?utm_campaign=pulumi-examples-github-repo&utm_source=github.com&utm_medium=pulumi-examples){rel="nofollow"} to build a new example in *any* language.

### Go {#go-3 dir="auto" tabindex="-1"}

[](#go-3){#user-content-go-3 aria-label="Permalink: Go"}

[🔝 Back to the list](#all-pulumi-examples)

  Example                                                                                                       Description
  ------------------------------------------------------------------------------------------------------------- ------------------------------------------------------------------------------------------
  [Guestbook](https://github.com/pulumi/examples/blob/master/kubernetes-go-guestbook)                           Build and deploy a simple, multi-tier web application using Kubernetes and Docker.
  [App Rollout via ConfigMap](https://github.com/pulumi/examples/blob/master/kubernetes-go-configmap-rollout)   Enable a change in a ConfigMap to trigger a rollout of an nginx Deployment.
  [Wordpress Helm Chart](https://github.com/pulumi/examples/blob/master/kubernetes-go-helm-wordpress)           Use the Helm API to deploy v9.6.0 of the Wordpress Helm Chart to a Kubernetes cluster.
  [Expose Deployment](https://github.com/pulumi/examples/blob/master/kubernetes-go-exposed-deployment)          Deploy nginx to a Kubernetes cluster, and publicly expose it using a Kubernetes Service.

[Use Pulumi AI](https://www.pulumi.com/ai/?utm_campaign=pulumi-examples-github-repo&utm_source=github.com&utm_medium=pulumi-examples){rel="nofollow"} to build a new example in *any* language.

## Openstack {#openstack dir="auto" tabindex="-1"}

[](#openstack){#user-content-openstack aria-label="Permalink: Openstack"}

### Python {#python-4 dir="auto" tabindex="-1"}

[](#python-4){#user-content-python-4 aria-label="Permalink: Python"}

[🔝 Back to the list](#all-pulumi-examples)

[Web Server](https://github.com/pulumi/examples/blob/master/openstack-py-webserver) \| Deploy an Openstack instance and open port 8000.

[Use Pulumi AI](https://www.pulumi.com/ai/?utm_campaign=pulumi-examples-github-repo&utm_source=github.com&utm_medium=pulumi-examples){rel="nofollow"} to build a new example in *any* language.

## OVHCloud {#ovhcloud dir="auto" tabindex="-1"}

[](#ovhcloud){#user-content-ovhcloud aria-label="Permalink: OVHCloud"}

### Go {#go-4 dir="auto" tabindex="-1"}

[](#go-4){#user-content-go-4 aria-label="Permalink: Go"}

  Example                                                                               Description
  ------------------------------------------------------------------------------------- -------------------------------------------------------------
  [Kubernetes](https://github.com/pulumi/examples/blob/master/ovhcloud-go-kubernetes)   A sample to deploy a managed Kubernetes cluster on OVHcloud

[Use Pulumi AI](https://www.pulumi.com/ai/?utm_campaign=pulumi-examples-github-repo&utm_source=github.com&utm_medium=pulumi-examples){rel="nofollow"} to build a new example in *any* language.

## Cloud {#cloud dir="auto" tabindex="-1"}

[](#cloud){#user-content-cloud aria-label="Permalink: Cloud"}

### TypeScript {#typescript-4 dir="auto" tabindex="-1"}

[](#typescript-4){#user-content-typescript-4 aria-label="Permalink: TypeScript"}

[🔝 Back to the list](#all-pulumi-examples)

  Example                                                                                                                    Description
  -------------------------------------------------------------------------------------------------------------------------- ---------------------------------------------------------------------------------------------------------------------------
  [URL Shortener - Cache and HttpServer](https://github.com/pulumi/examples/blob/master/cloud-ts-url-shortener-cache-http)   Create a simple URL shortener SPA that uses the high-level `cloud.Table` and `cloud.HttpServer` components.
  [URL Shortener - Cache](https://github.com/pulumi/examples/blob/master/cloud-ts-url-shortener-cache)                       Create a simple URL shortener SPA that uses the high-level `cloud.Table` and `cloud.API` components.
  [URL Shortener](https://github.com/pulumi/examples/blob/master/cloud-ts-url-shortener)                                     Create a complete URL shortener web application that uses the high-level `cloud.Table` and `cloud.HttpServer` components.
  [Voting App](https://github.com/pulumi/examples/blob/master/cloud-ts-voting-app)                                           Create a simple voting app using Redis and Python Flask.

[Use Pulumi AI](https://www.pulumi.com/ai/?utm_campaign=pulumi-examples-github-repo&utm_source=github.com&utm_medium=pulumi-examples){rel="nofollow"} to build a new example in *any* language.

### JavaScript {#javascript-2 dir="auto" tabindex="-1"}

[](#javascript-2){#user-content-javascript-2 aria-label="Permalink: JavaScript"}

[🔝 Back to the list](#all-pulumi-examples)

  Example                                                                                                                  Description
  ------------------------------------------------------------------------------------------------------------------------ -------------------------------------------------------------------------------------------------
  [API on AWS](https://github.com/pulumi/examples/blob/master/cloud-js-api)                                                Create a simple REST API that counts the number of times a route has been hit.
  [Containers](https://github.com/pulumi/examples/blob/master/cloud-js-containers)                                         Provision containers on Fargate.
  [HttpServer](https://github.com/pulumi/examples/blob/master/cloud-js-httpserver)                                         Create a simple REST API that counts the number of times a route has been hit.
  [Thumbnailer - Machine Learning](https://github.com/pulumi/examples/blob/master/cloud-js-thumbnailer-machine-learning)   Create a video thumbnail extractor using serverless functions, containers, and AWS Rekognition.
  [Thumbnailer](https://github.com/pulumi/examples/blob/master/cloud-js-thumbnailer)                                       Create a video thumbnail extractor using serverless functions and containers.
  [Twitter](https://github.com/pulumi/examples/blob/master/cloud-js-twitter-athena)                                        Query Twitter every 2 minutes, store the results in S3, and set up an Athena table and query.

[Use Pulumi AI](https://www.pulumi.com/ai/?utm_campaign=pulumi-examples-github-repo&utm_source=github.com&utm_medium=pulumi-examples){rel="nofollow"} to build a new example in *any* language.

## DigitalOcean {#digitalocean dir="auto" tabindex="-1"}

[](#digitalocean){#user-content-digitalocean aria-label="Permalink: DigitalOcean"}

### TypeScript {#typescript-5 dir="auto" tabindex="-1"}

[](#typescript-5){#user-content-typescript-5 aria-label="Permalink: TypeScript"}

[🔝 Back to the list](#all-pulumi-examples)

  Example                                                                                            Description
  -------------------------------------------------------------------------------------------------- ----------------------------------------------
  [Droplets](https://github.com/pulumi/examples/blob/master/digitalocean-ts-loadbalanced-droplets)   Build sample architecture.
  [Kubernetes](https://github.com/pulumi/examples/blob/master/digitalocean-ts-k8s)                   Provision a DigitalOcean Kubernetes cluster.

[Use Pulumi AI](https://www.pulumi.com/ai/?utm_campaign=pulumi-examples-github-repo&utm_source=github.com&utm_medium=pulumi-examples){rel="nofollow"} to build a new example in *any* language.

### Python {#python-5 dir="auto" tabindex="-1"}

[](#python-5){#user-content-python-5 aria-label="Permalink: Python"}

[🔝 Back to the list](#all-pulumi-examples)

  Example                                                                                            Description
  -------------------------------------------------------------------------------------------------- ----------------------------------------------
  [Droplets](https://github.com/pulumi/examples/blob/master/digitalocean-py-loadbalanced-droplets)   Build sample architecture.
  [Kubernetes](https://github.com/pulumi/examples/blob/master/digitalocean-py-k8s)                   Provision a DigitalOcean Kubernetes cluster.

[Use Pulumi AI](https://www.pulumi.com/ai/?utm_campaign=pulumi-examples-github-repo&utm_source=github.com&utm_medium=pulumi-examples){rel="nofollow"} to build a new example in *any* language.

### C# {#c-4 dir="auto" tabindex="-1"}

[](#c-4){#user-content-c-4 aria-label="Permalink: C#"}

[🔝 Back to the list](#all-pulumi-examples)

  Example                                                                                            Description
  -------------------------------------------------------------------------------------------------- ----------------------------------------------
  [Droplets](https://github.com/pulumi/examples/blob/master/digitalocean-cs-loadbalanced-droplets)   Build sample architecture.
  [Kubernetes](https://github.com/pulumi/examples/blob/master/digitalocean-cs-k8s)                   Provision a DigitalOcean Kubernetes cluster.

[Use Pulumi AI](https://www.pulumi.com/ai/?utm_campaign=pulumi-examples-github-repo&utm_source=github.com&utm_medium=pulumi-examples){rel="nofollow"} to build a new example in *any* language.

## Multicloud {#multicloud dir="auto" tabindex="-1"}

[](#multicloud){#user-content-multicloud aria-label="Permalink: Multicloud"}

### TypeScript {#typescript-6 dir="auto" tabindex="-1"}

[](#typescript-6){#user-content-typescript-6 aria-label="Permalink: TypeScript"}

[🔝 Back to the list](#all-pulumi-examples)

[Try Pulumi Copilot](https://app.pulumi.com/?utm_campaign=pulumi-examples-github-repo&utm_source=github.com&utm_medium=pulumi-examples){rel="nofollow"} and use natural-language prompts to generate Pulumi example programs in *any* language.

  Example                                                                           Description
  --------------------------------------------------------------------------------- -------------------------------------------------------------------------
  [Buckets](https://github.com/pulumi/examples/blob/master/multicloud-ts-buckets)   Use a single Pulumi program to provision resources in both AWS and GCP.

[Use Pulumi AI](https://www.pulumi.com/ai/?utm_campaign=pulumi-examples-github-repo&utm_source=github.com&utm_medium=pulumi-examples){rel="nofollow"} to build a new example in *any* language.

## F5 {#f5 dir="auto" tabindex="-1"}

[](#f5){#user-content-f5 aria-label="Permalink: F5"}

### TypeScript {#typescript-7 dir="auto" tabindex="-1"}

[](#typescript-7){#user-content-typescript-7 aria-label="Permalink: TypeScript"}

[🔝 Back to the list](#all-pulumi-examples)

  Example                                                                                             Description
  --------------------------------------------------------------------------------------------------- -----------------------------------------------------------------------------
  [BigIP Local Traffic Manager](https://github.com/pulumi/examples/blob/master/f5bigip-ts-ltm-pool)   Provide load balancing via an F5 BigIP appliance to backend HTTP instances.

[Use Pulumi AI](https://www.pulumi.com/ai/?utm_campaign=pulumi-examples-github-repo&utm_source=github.com&utm_medium=pulumi-examples){rel="nofollow"} to build a new example in *any* language.

## Twilio {#twilio dir="auto" tabindex="-1"}

[](#twilio){#user-content-twilio aria-label="Permalink: Twilio"}

### TypeScript {#typescript-8 dir="auto" tabindex="-1"}

[](#typescript-8){#user-content-typescript-8 aria-label="Permalink: TypeScript"}

[🔝 Back to the list](#all-pulumi-examples)

  Example                                                                           Description
  --------------------------------------------------------------------------------- ----------------------------------------------------------------------------
  [Component](https://github.com/pulumi/examples/blob/master/twilio-ts-component)   Create a custom Component Resource to parse incoming messages from Twilio.

[Use Pulumi AI](https://www.pulumi.com/ai/?utm_campaign=pulumi-examples-github-repo&utm_source=github.com&utm_medium=pulumi-examples){rel="nofollow"} to build a new example in *any* language.

## Linode {#linode dir="auto" tabindex="-1"}

[](#linode){#user-content-linode aria-label="Permalink: Linode"}

### JavaScript {#javascript-3 dir="auto" tabindex="-1"}

[](#javascript-3){#user-content-javascript-3 aria-label="Permalink: JavaScript"}

[🔝 Back to the list](#all-pulumi-examples)

  Example                                                                            Description
  ---------------------------------------------------------------------------------- -------------------------------
  [Web Server](https://github.com/pulumi/examples/blob/master/linode-js-webserver)   Build a web server on Linode.

[Use Pulumi AI](https://www.pulumi.com/ai/?utm_campaign=pulumi-examples-github-repo&utm_source=github.com&utm_medium=pulumi-examples){rel="nofollow"} to build a new example in *any* language.

## Testing {#testing dir="auto" tabindex="-1"}

[](#testing){#user-content-testing aria-label="Permalink: Testing"}

[🔝 Back to the list](#all-pulumi-examples)

  Example                                                                                           Description
  ------------------------------------------------------------------------------------------------- ----------------------------------------------
  [Unit Tests in TypeScript](https://github.com/pulumi/examples/blob/master/testing-unit-ts)        Mock-based unit tests in TypeScript.
  [Unit Tests in Python](https://github.com/pulumi/examples/blob/master/testing-unit-py)            Mock-based unit tests in Python.
  [Unit Tests in Go](https://github.com/pulumi/examples/blob/master/testing-unit-go)                Mock-based unit tests in Go.
  [Unit Tests in C#](https://github.com/pulumi/examples/blob/master/testing-unit-cs)                Mock-based unit tests in C#.
  [Testing with Policies](https://github.com/pulumi/examples/blob/master/testing-pac-ts)            Tests based on Policy-as-Code in TypeScript.
  [Integration Testing in Go](https://github.com/pulumi/examples/blob/master/testing-integration)   Deploy-check-destroy tests in Go.

[Use Pulumi AI](https://www.pulumi.com/ai/?utm_campaign=pulumi-examples-github-repo&utm_source=github.com&utm_medium=pulumi-examples){rel="nofollow"} to build a new example in *any* language.

## Automation API {#automation-api dir="auto" tabindex="-1"}

[](#automation-api){#user-content-automation-api aria-label="Permalink: Automation API"}

[🔝 Back to the list](#all-pulumi-examples)

[Automation API Examples](https://github.com/pulumi/automation-api-examples)

## Community {#community dir="auto" tabindex="-1"}

[](#community){#user-content-community aria-label="Permalink: Community"}

Engage with our community to elevate your developer experience:

-   **Join our online [Pulumi Community on Slack](https://slack.pulumi.com/?utm_campaign=pulumi-pulumi-examples-repo&utm_source=github.com&utm_medium=welcome-slack){rel="nofollow"}** - Interact with thousands of Pulumi developers for collaborative problem-solving and knowledge-sharing!
-   **Join a [Local Pulumi User Groups (PUGs)](https://www.meetup.com/pro/pugs/){rel="nofollow"}**- Attend tech-packed meetups and hands-on virtual or in-person workshops.
-   **Follow [\@PulumiCorp](https://twitter.com/PulumiCorp){rel="nofollow"} on X (Twitter)** - Get real-time updates, technical insights, and sneak peeks into the latest features.
-   **Subscribe to our YouTube Channel, [PulumiTV](https://www.youtube.com/@PulumiTV){rel="nofollow"}** - Learn about AI / ML essentials, launches, workshops, demos and more.
-   **Follow our [LinkedIn](https://www.linkedin.com/company/pulumi/?utm_campaign=pulumi-examples-github-repo&utm_source=github.com&utm_medium=examples-community){rel="nofollow"}** - Uncover company news, achievements, and behind-the-scenes glimpses.

## Contributors {#contributors dir="auto" tabindex="-1"}

[](#contributors){#user-content-contributors aria-label="Permalink: Contributors"}

Meet the [brilliant minds behind this project](https://github.com/pulumi/examples/graphs/contributors), view their profiles, and learn about their valuable contributions.

Want to contribute an example? Please visit our [CONTRIBUTING](https://github.com/pulumi/examples/blob/master/CONTRIBUTING.md) doc for details.

## Pulumi developer resources {#pulumi-developer-resources dir="auto" tabindex="-1"}

[](#pulumi-developer-resources){#user-content-pulumi-developer-resources aria-label="Permalink: Pulumi developer resources"}

Delve deeper into our project with additional resources:

-   [Get Started with Pulumi](https://www.pulumi.com/docs/get-started/?utm_campaign=pulumi-examples-github-repo&utm_source=github.com&utm_medium=examples-resources){rel="nofollow"}: Deploy a simple application in AWS, Azure, Google Cloud, or Kubernetes using Pulumi.
-   [Documentation](https://www.pulumi.com/docs/?utm_campaign=pulumi-examples-github-repo&utm_source=github.com&utm_medium=examples-resources){rel="nofollow"}: Learn about Pulumi concepts, follow user guides, and consult the reference documentation.
-   [Pulumi Blog](https://www.pulumi.com/blog/?utm_campaign=pulumi-examples-github-repo&utm_source=github.com&utm_medium=examples-resources){rel="nofollow"} - Stay in the loop with our latest tech announcements, insightful articles, and updates.
-   [Registry](https://www.pulumi.com/registry/?utm_campaign=pulumi-examples-github-repo&utm_source=github.com&utm_medium=examples-resources){rel="nofollow"}: Search for packages and learn about the supported resources you need. Install the package directly into your project, browse the API documentation, and start building.
-   [Try Pulumi AI](https://www.pulumi.com/ai/?utm_campaign=pulumi-examples-github-repo&utm_source=github.com&utm_medium=examples-resources){rel="nofollow"} - Use natural-language prompts to generate Pulumi infrastructure-as-code programs in any language.

## Pulumi roadmap {#pulumi-roadmap dir="auto" tabindex="-1"}

[](#pulumi-roadmap){#user-content-pulumi-roadmap aria-label="Permalink: Pulumi roadmap"}

Review the planned work for the upcoming quarter and a selected backlog of issues that are on our mind but not yet scheduled on the [Pulumi Roadmap.](https://github.com/orgs/pulumi/projects/44)
