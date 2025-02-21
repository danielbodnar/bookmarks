# aws-samples/aws-genai-llm-chatbot (github.com)

<https://github.com/aws-samples/aws-genai-llm-chatbot>

## Description

A modular and comprehensive solution to deploy a Multi-LLM and Multi-RAG powered chatbot (Amazon Bedrock, Anthropic, HuggingFace, OpenAI, Meta, AI21, Cohere, Mistral) using AWS CDK on AWS - aws-samples/aws-genai-llm-chatbot

## Quote

> A modular and comprehensive solution to deploy a Multi-LLM and Multi-RAG powered chatbot (Amazon Bedrock, Anthropic, HuggingFace, OpenAI, Meta, AI21, Cohere, Mistral) using AWS CDK on AWS

## Tags

#amazon-bedrock #aurora #aws #bedrock #cdk #chatbot #claude #genai #huggingface #idefics #kendra #langchain #llm #opensearch #opensearch-serverless #pgvector #sagemaker #semantic-search #vectordb #TypeScript

## Content

# GitHub - aws-samples/aws-genai-llm-chatbot: A modular and comprehensive solution to deploy a Multi-LLM and Multi-RAG powered chatbot (Amazon Bedrock, Anthropic, HuggingFace, OpenAI, Meta, AI21, Cohere, Mistral) using AWS CDK on AWS {#github---aws-samplesaws-genai-llm-chatbot-a-modular-and-comprehensive-solution-to-deploy-a-multi-llm-and-multi-rag-powered-chatbot-amazon-bedrock-anthropic-huggingface-openai-meta-ai21-cohere-mistral-using-aws-cdk-on-aws .reader-title}

aws-samples

------------------------------------------------------------------------

## Building RAG use cases with GenAI Chatbot on AWS {#building-rag-use-cases-with-genai-chatbot-on-aws dir="auto" tabindex="-1"}

[](#building-rag-use-cases-with-genai-chatbot-on-aws){#user-content-building-rag-use-cases-with-genai-chatbot-on-aws aria-label="Permalink: Building RAG use cases with GenAI Chatbot on AWS"}

[![Release Notes](https://camo.githubusercontent.com/972d64cf6e2e7a7bd3ed13e812a7eea179c100a9a457e269a770296a48736e74/68747470733a2f2f696d672e736869656c64732e696f2f6769746875622f762f72656c656173652f6177732d73616d706c65732f6177732d67656e61692d6c6c6d2d63686174626f74){canonical-src="https://img.shields.io/github/v/release/aws-samples/aws-genai-llm-chatbot"}](https://github.com/aws-samples/aws-genai-llm-chatbot/releases)
[![GitHub star chart](https://camo.githubusercontent.com/c7f4ea794cf0a866f6ac889991007abfdb8b2775f1c407478ecd801a2a63b76a/68747470733a2f2f696d672e736869656c64732e696f2f6769746875622f73746172732f6177732d73616d706c65732f6177732d67656e61692d6c6c6d2d63686174626f743f7374796c653d736f6369616c){canonical-src="https://img.shields.io/github/stars/aws-samples/aws-genai-llm-chatbot?style=social"}](https://star-history.com/#aws-samples/aws-genai-llm-chatbot){rel="nofollow"}
[![License: MIT](https://camo.githubusercontent.com/6cd0120cc4c5ac11d28b2c60f76033b52db98dac641de3b2644bb054b449d60c/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4c6963656e73652d4d49542d79656c6c6f772e737667){canonical-src="https://img.shields.io/badge/License-MIT-yellow.svg"}](https://opensource.org/licenses/MIT){rel="nofollow"}

[![Deploy with GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://aws-samples.github.io/aws-genai-llm-chatbot/guide/deploy.html#deploy-with-github-codespaces){rel="nofollow"}

[![Full Documentation](https://camo.githubusercontent.com/0e65f955972944f13c6168452f083598ded417d9e31cd09ab63dfc5416919187/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f46756c6c253230446f63756d656e746174696f6e2d626c75653f7374796c653d666f722d7468652d6261646765266c6f676f3d56697465266c6f676f436f6c6f723d7768697465){canonical-src="https://img.shields.io/badge/Full%20Documentation-blue?style=for-the-badge&logo=Vite&logoColor=white"}](https://aws-samples.github.io/aws-genai-llm-chatbot/){rel="nofollow"}

[![sample](https://github.com/aws-samples/aws-genai-llm-chatbot/raw/main/docs/about/assets/chabot-sample.gif "GenAI Chatbot on AWS"){animated-image=""}](https://github.com/aws-samples/aws-genai-llm-chatbot/blob/main/docs/about/assets/chabot-sample.gif){rel="noopener noreferrer"}

## 🚀 NEW! Support for new Amazon Nova Models 🚀 {#new-support-for-new-amazon-nova-models dir="auto" tabindex="-1"}

[](#-new-support-for-new-amazon-nova-models-){#user-content--new-support-for-new-amazon-nova-models- aria-label="Permalink: 🚀 NEW! Support for new Amazon Nova Models 🚀"}

### Deploy this chatbot to use the recently announced [Amazon Nova models](https://aws.amazon.com/blogs/aws/introducing-amazon-nova-frontier-intelligence-and-industry-leading-price-performance/){rel="nofollow"}! {#deploy-this-chatbot-to-use-the-recently-announced-amazon-nova-models dir="auto" tabindex="-1"}

[](#deploy-this-chatbot-to-use-the-recently-announced-amazon-nova-models){#user-content-deploy-this-chatbot-to-use-the-recently-announced-amazon-nova-models aria-label="Permalink: Deploy this chatbot to use the recently announced Amazon Nova models!"}

### These powerful models can **understand** and **generate** images and videos. {#these-powerful-models-can-understand-and-generate-images-and-videos. dir="auto" tabindex="-1"}

[](#these-powerful-models-can-understand-and-generate-images-and-videos){#user-content-these-powerful-models-can-understand-and-generate-images-and-videos aria-label="Permalink: These powerful models can understand and generate images and videos."}

Deploy this chatbot to experiment with:

-   `Amazon Nova Micro`
-   `Amazon Nova Lite`
-   `Amazon Nova Pro`
-   `Amazon Nova Canvas`
-   `Amazon Nova Reels`

Make sure to request access to the new models [here](https://aws-samples.github.io/aws-genai-llm-chatbot/documentation/model-requirements.html#amazon-bedrock-requirements){rel="nofollow"}

Read more about the new models [here](https://www.aboutamazon.com/news/aws/amazon-nova-artificial-intelligence-bedrock-aws){rel="nofollow"}

------------------------------------------------------------------------

This solution provides ready-to-use code so you can start **experimenting with a variety of Large Language Models and Multimodal Language Models, settings and prompts** in your own AWS account.

Supported model providers:

-   [Amazon Bedrock](https://aws.amazon.com/bedrock/){rel="nofollow"} which supports a wide range of models from AWS, Anthropic, Cohere and Mistral including the latest models from Amazon Nova. See [Recent announcements](https://aws.amazon.com/blogs/aws/introducing-amazon-nova-frontier-intelligence-and-industry-leading-price-performance/){rel="nofollow"} for more details.
-   [Amazon SageMaker](https://aws.amazon.com/sagemaker/){rel="nofollow"} self-hosted models from Foundation, Jumpstart and HuggingFace.
-   Third-party providers via API such as Anthropic, Cohere, AI21 Labs, OpenAI, etc. [See available langchain integrations](https://python.langchain.com/docs/integrations/llms/){rel="nofollow"} for a comprehensive list.

## Additional Resources {#additional-resources dir="auto" tabindex="-1"}

[](#additional-resources){#user-content-additional-resources aria-label="Permalink: Additional Resources"}

  Resource                                                                                            Description
  --------------------------------------------------------------------------------------------------- ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  [Secure Messenger GenAI Chatbot](https://github.com/aws-samples/secure-messenger-genai-chatbot)     A messenger built on Wickr that can interface with this chatbot to provide Q&A service in tightly regulated environments (i.e. HIPAA).
  [Project Lakechain](https://github.com/awslabs/project-lakechain)                                   A powerful cloud-native, AI-powered, document (docs, images, audios, videos) processing framework built on top of the AWS CDK.
  [AWS Generative AI CDK Constructs](https://github.com/awslabs/generative-ai-cdk-constructs/)        Open-source library extension of the [AWS Cloud Development Kit (AWS CDK)](https://docs.aws.amazon.com/cdk/v2/guide/home.html){rel="nofollow"} aimed to help developers build generative AI solutions using pattern-based definitions for their architecture.
  [Artifacts and Tools for Bedrock](https://github.com/aws-samples/artifacts-and-tools-for-bedrock)   An innovative chat-based user interface with support for tools and artifacts. It can create graphs and diagrams, analyze data, write games, create web pages, generate files, and much more.

## Roadmap {#roadmap dir="auto" tabindex="-1"}

[](#roadmap){#user-content-roadmap aria-label="Permalink: Roadmap"}

Roadmap is available through the [GitHub Project](https://github.com/orgs/aws-samples/projects/69)

## Authors {#authors dir="auto" tabindex="-1"}

[](#authors){#user-content-authors aria-label="Permalink: Authors"}

-   [Bigad Soleiman](https://www.linkedin.com/in/bigadsoleiman/){rel="nofollow"}
-   [Sergey Pugachev](https://www.linkedin.com/in/spugachev/){rel="nofollow"}

## Contributors {#contributors dir="auto" tabindex="-1"}

[](#contributors){#user-content-contributors aria-label="Permalink: Contributors"}

[![contributors](https://camo.githubusercontent.com/79267a153a6a28a1a0359bbe3abeff7660d7a86e45046c9b194bffdf3ffcd8ba/68747470733a2f2f636f6e747269622e726f636b732f696d6167653f7265706f3d6177732d73616d706c65732f6177732d67656e61692d6c6c6d2d63686174626f74266d61783d32303030){canonical-src="https://contrib.rocks/image?repo=aws-samples/aws-genai-llm-chatbot&max=2000"}](https://github.com/aws-samples/aws-genai-llm-chatbot/graphs/contributors)

## License {#license dir="auto" tabindex="-1"}

[](#license){#user-content-license aria-label="Permalink: License"}

This library is licensed under the MIT-0 License. See the LICENSE file.

-   [Changelog](https://github.com/aws-samples/aws-genai-llm-chatbot/blob/main/CHANGELOG.md) of the project.
-   [License](https://github.com/aws-samples/aws-genai-llm-chatbot/blob/main/LICENSE) of the project.
-   [Code of Conduct](https://github.com/aws-samples/aws-genai-llm-chatbot/blob/main/CODE_OF_CONDUCT.md) of the project.
-   [CONTRIBUTING](https://github.com/aws-samples/aws-genai-llm-chatbot/blob/main/CONTRIBUTING.md#security-issue-notifications) for more information.

Although this repository is released under the MIT-0 license, its front-end and SQL implementation use the following third party projects:

-   [psycopg2-binary](https://github.com/psycopg/psycopg2)
-   [jackspeak](https://github.com/isaacs/jackspeak)
-   [package-json-from-dist](https://github.com/isaacs/package-json-from-dist)
-   [path-scurry](https://github.com/isaacs/path-scurry)

These projects\' licensing includes the LGPL v3 and BlueOak-1.0.0 licenses.

## Legal Disclaimer {#legal-disclaimer dir="auto" tabindex="-1"}

[](#legal-disclaimer){#user-content-legal-disclaimer aria-label="Permalink: Legal Disclaimer"}

You should consider doing your own independent assessment before using the content in this sample for production purposes. This may include (amongst other things) testing, securing, and optimizing the content provided in this sample, based on your specific quality control practices and standards.
