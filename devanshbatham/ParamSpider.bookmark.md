# devanshbatham/ParamSpider (github.com)

<https://github.com/devanshbatham/ParamSpider>

## Description

Mining URLs from dark corners of Web Archives for bug hunting/fuzzing/further probing - GitHub - devanshbatham/ParamSpider: Mining URLs from dark corners of Web Archives for bug hunting/fuzzing/further probing

## Quote

>  Mining URLs from dark corners of Web Archives for bug hunting/fuzzing/further probing 

## Tags

#bugbounty #content-discovery #fuzzing #osint #parameter #parameter-finder #urls-parameters #Python

## Content

# GitHub - devanshbatham/ParamSpider: Mining URLs from dark corners of Web Archives for bug hunting/fuzzing/further probing {#github---devanshbathamparamspider-mining-urls-from-dark-corners-of-web-archives-for-bug-huntingfuzzingfurther-probing .reader-title}

devanshbatham

------------------------------------------------------------------------

## paramspider  {#paramspider dir="auto" tabindex="-1"}

[](#----paramspider--){#user-content-----paramspider-- aria-label="Permalink: 
    paramspider"}

#### Mining URLs from dark corners of Web Archives for bug hunting/fuzzing/further probing {#mining-urls-from-dark-corners-of-web-archives-for-bug-huntingfuzzingfurther-probing dir="auto" tabindex="-1"}

[](#--mining-urls-from-dark-corners-of-web-archives-for-bug-huntingfuzzingfurther-probing-){#user-content---mining-urls-from-dark-corners-of-web-archives-for-bug-huntingfuzzingfurther-probing- aria-label="Permalink:   Mining URLs from dark corners of Web Archives for bug hunting/fuzzing/further probing"}

[📖 About](#about) •
[🏗️ Installation](#installation) •
[⛏️ Usage](#usage) •
[🚀 Examples](#examples) •
[🤝 Contributing](#contributing) •

[![paramspider](https://github.com/devanshbatham/ParamSpider/raw/master/static/paramspider.png?raw=true)](https://github.com/devanshbatham/ParamSpider/blob/master/static/paramspider.png?raw=true){rel="noopener noreferrer"}

## About {#about dir="auto" tabindex="-1"}

[](#about){#user-content-about aria-label="Permalink: About"}

`paramspider` allows you to fetch URLs related to any domain or a list of domains from Wayback achives. It filters out \"boring\" URLs, allowing you to focus on the ones that matter the most.

## Installation {#installation dir="auto" tabindex="-1"}

[](#installation){#user-content-installation aria-label="Permalink: Installation"}

To install `paramspider`, follow these steps:

    git clone https://github.com/devanshbatham/paramspider
    cd paramspider
    pip install .

## Usage {#usage dir="auto" tabindex="-1"}

[](#usage){#user-content-usage aria-label="Permalink: Usage"}

To use `paramspider`, follow these steps:

    paramspider -d example.com

## Examples {#examples dir="auto" tabindex="-1"}

[](#examples){#user-content-examples aria-label="Permalink: Examples"}

Here are a few examples of how to use `paramspider`:

-   Discover URLs for a single domain:

        paramspider -d example.com

-   Discover URLs for multiple domains from a file:

        paramspider -l domains.txt

-   Stream URLs on the termial:

        paramspider -d example.com -s

-   Set up web request proxy:

        paramspider -d example.com --proxy '127.0.0.1:7890'

-   Adding a placeholder for URL parameter values (default: \"FUZZ\"):

         paramspider -d example.com -p '"><h1>reflection</h1>'

## Contributing {#contributing dir="auto" tabindex="-1"}

[](#contributing){#user-content-contributing aria-label="Permalink: Contributing"}

Contributions are welcome! If you\'d like to contribute to `paramspider`, please follow these steps:

1.  Fork the repository.
2.  Create a new branch.
3.  Make your changes and commit them.
4.  Submit a pull request.

## Star History {#star-history dir="auto" tabindex="-1"}

[](#star-history){#user-content-star-history aria-label="Permalink: Star History"}

[![Star History Chart](https://camo.githubusercontent.com/39b37547db966963e4f9f25ab597277ca48b0b3901c9637c0a58e3937725897d/68747470733a2f2f6170692e737461722d686973746f72792e636f6d2f7376673f7265706f733d646576616e736862617468616d2f706172616d73706964657226747970653d44617465){canonical-src="https://api.star-history.com/svg?repos=devanshbatham/paramspider&type=Date"}](https://star-history.com/#devanshbatham/paramspider&Date){rel="nofollow"}
