# s-rah/onionscan (github.com)

<https://github.com/s-rah/onionscan>

## Description

OnionScan is a free and open source tool for investigating the Dark Web. - s-rah/onionscan

## Quote

> OnionScan is a free and open source tool for investigating the Dark Web.

## Tags

# #Go

## Content

# GitHub - s-rah/onionscan: OnionScan is a free and open source tool for investigating the Dark Web. {#github---s-rahonionscan-onionscan-is-a-free-and-open-source-tool-for-investigating-the-dark-web. .reader-title}

s-rah

------------------------------------------------------------------------

## What is OnionScan? {#what-is-onionscan dir="auto" tabindex="-1"}

[](#what-is-onionscan){#user-content-what-is-onionscan aria-label="Permalink: What is OnionScan?"}

[![Build Status](https://camo.githubusercontent.com/e71e81e75f99d8442e5ded24bc67b5c9231443dba8aa39293dae78fd1fc9fefa/68747470733a2f2f7472617669732d63692e6f72672f732d7261682f6f6e696f6e7363616e2e7376673f6272616e63683d6f6e696f6e7363616e2d302e32){canonical-src="https://travis-ci.org/s-rah/onionscan.svg?branch=onionscan-0.2"}](https://travis-ci.org/s-rah/onionscan){rel="nofollow"} [![Go Report Card](https://camo.githubusercontent.com/b405ecb42eda3c4c17c0d23f91aa32f01c86f6066a39ca1d3fe06f436d0ae98d/68747470733a2f2f676f7265706f7274636172642e636f6d2f62616467652f6769746875622e636f6d2f732d7261682f6f6e696f6e7363616e){canonical-src="https://goreportcard.com/badge/github.com/s-rah/onionscan"}](https://goreportcard.com/report/github.com/s-rah/onionscan){rel="nofollow"}

OnionScan is a free and open source tool for investigating the Dark Web. For all
the amazing technological innovations in the anonymity and privacy space, there
is always a constant threat that has no effective technological patch - human
error. [![](https://github.com/s-rah/onionscan/raw/master/templates/images/logo.png "OnionScan")](https://github.com/s-rah/onionscan/blob/master/templates/images/logo.png){rel="noopener noreferrer"}

Whether it is operational security leaks or software misconfiguration - most
often times the attacks on anonymity don\'t come from breaking the underlying
systems, but from ourselves.

OnionScan has two primary goals:

-   We want to help **operators of hidden services find and fix operational security
    issues with their services**. We want to help them detect misconfigurations and we
    want to inspire a new generation of anonymity engineering projects to help make
    the world a more private place.

-   Secondly we want to help **researchers** and **investigators monitor and track Dark Web sites**.
    In fact we want to make this as easy as possible. Not because we agree with the
    goals and motives of every investigation force out there - most often we don\'t.
    But by making these kinds of investigations easy, we hope to create a powerful
    incentive for new anonymity technology (see goal #1)

## Installing {#installing dir="auto" tabindex="-1"}

[](#installing){#user-content-installing aria-label="Permalink: Installing"}

### A Note on Dependencies {#a-note-on-dependencies dir="auto" tabindex="-1"}

[](#a-note-on-dependencies){#user-content-a-note-on-dependencies aria-label="Permalink: A Note on Dependencies"}

OnionScan requires either Go 1.6 or 1.7.

In order to install OnionScan you will need the following dependencies not
provided by the core go standard library:

-   golang.org/x/net/proxy - For the Tor SOCKS Proxy connection.
-   golang.org/x/net/crypto - For PGP parsing
-   golang.org/x/net/html - For HTML parsing
-   github.com/rwcarlsen/goexif - For EXIF data extraction.
-   github.com/HouzuoGuo/tiedot/db - For crawl database.

See [the wiki](https://github.com/s-rah/onionscan/wiki) for guidance.

### Grab with go get {#grab-with-go-get dir="auto" tabindex="-1"}

[](#grab-with-go-get){#user-content-grab-with-go-get aria-label="Permalink: Grab with go get"}

`go get github.com/s-rah/onionscan`

### Compile/Run from git cloned source {#compilerun-from-git-cloned-source dir="auto" tabindex="-1"}

[](#compilerun-from-git-cloned-source){#user-content-compilerun-from-git-cloned-source aria-label="Permalink: Compile/Run from git cloned source"}

Once you have cloned the repository into somewhere that go can find it you can
run `go install github.com/s-rah/onionscan` and then run the binary in `$GOPATH/bin/onionscan`.

Alternatively, you can just do `go run github.com/s-rah/onionscan.go` to run without compiling.

## Quick Start {#quick-start dir="auto" tabindex="-1"}

[](#quick-start){#user-content-quick-start aria-label="Permalink: Quick Start"}

For a simple report detailing the high, medium and low risk areas found with a
hidden service:

`onionscan notarealhiddenservice.onion`

The most interesting output comes from the verbose option:

`onionscan --verbose notarealhiddenservice.onion`

There is also a JSON output, if you want to integrate with another program or
application:

`onionscan --jsonReport notarealhiddenservice.onion`

If you would like to use a proxy server listening on something other that
`127.0.0.1:9050`, then you can use the \--torProxyAddress flag:

`onionscan --torProxyAddress=127.0.0.1:9150 notarealhiddenservice.onion`

More detailed documentation on usage can be found in [doc](https://github.com/s-rah/onionscan/blob/master/doc/README.md).

## What is scanned for? {#what-is-scanned-for dir="auto" tabindex="-1"}

[](#what-is-scanned-for){#user-content-what-is-scanned-for aria-label="Permalink: What is scanned for?"}

A list of privacy and security problems which are detected by OnionScan can be
found [here](https://github.com/s-rah/onionscan/blob/master/doc/what-is-scanned-for.md).

You can also directly configure the types of scanning that onionscan does using
the scans parameter.

`./bin/onionscan --scans web notarealhiddenservice.onion`

## Running the OnionScan Correlation Lab {#running-the-onionscan-correlation-lab dir="auto" tabindex="-1"}

[](#running-the-onionscan-correlation-lab){#user-content-running-the-onionscan-correlation-lab aria-label="Permalink: Running the OnionScan Correlation Lab"}

If you are a researcher monitoring multiple sites you will definitely want to use
the OnionScan Correlation Lab - a web interface hosted by OnionScan that allows
you to discover, search and tag different identity correlations.

You can find a full guide on the OnionScan correlation lab [here](https://github.com/s-rah/onionscan/blob/master/doc/correlation-lab.md).

## [![](https://github.com/s-rah/onionscan/raw/master/doc/images/correlation-lab-main.png "The main OnionScan Correlation Lab Screen")](https://github.com/s-rah/onionscan/blob/master/doc/images/correlation-lab-main.png){rel="noopener noreferrer"} {#section dir="auto" tabindex="-1"}

[](#){aria-label="Permalink:"}
