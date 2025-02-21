# virgs/jsonPlaceholderReplacer (github.com)

<https://github.com/virgs/jsonPlaceholderReplacer>

## Description

Typescript library/cli to replace placeholders in json - virgs/jsonPlaceholderReplacer

## Quote

> Typescript library/cli to replace placeholders in json

## Tags

#cli #javascript #javascript-library #json #library #placeholder #replacer #substitution #typescript #TypeScript

## Content

# GitHub - virgs/jsonPlaceholderReplacer: Typescript library/cli to replace placeholders in json {#github---virgsjsonplaceholderreplacer-typescript-librarycli-to-replace-placeholders-in-json .reader-title}

virgs

------------------------------------------------------------------------

## jsonPlaceholderReplacer {#jsonplaceholderreplacer dir="auto" tabindex="-1"}

[](#jsonplaceholderreplacer){#user-content-jsonplaceholderreplacer aria-label="Permalink: jsonPlaceholderReplacer"}

[![npm version](https://camo.githubusercontent.com/a7d10a81fef405be2aa7ba6f18272b09934d5367da06bc958b5562b261a5fb3f/68747470733a2f2f62616467652e667572792e696f2f6a732f6a736f6e2d706c616365686f6c6465722d7265706c616365722e737667){canonical-src="https://badge.fury.io/js/json-placeholder-replacer.svg"}](https://badge.fury.io/js/json-placeholder-replacer){rel="nofollow"}
[![build status](https://camo.githubusercontent.com/37a3a8cc9c5eb94a7c803559e3beb3aba0f1749526b0162dd96d6a5555567d89/68747470733a2f2f636972636c6563692e636f6d2f67682f76697267732f6a736f6e506c616365686f6c6465725265706c616365722e7376673f7374796c653d736869656c64){canonical-src="https://circleci.com/gh/virgs/jsonPlaceholderReplacer.svg?style=shield"}](https://app.circleci.com/pipelines/github/virgs/jsonPlaceholderReplacer){rel="nofollow"}
[![Maintainability](https://camo.githubusercontent.com/b02abf73cfc5d48d9462fe2db29a83d688bc90fec4a4f737db442b389e4b0744/68747470733a2f2f6170692e636f6465636c696d6174652e636f6d2f76312f6261646765732f36653538366666366562313261363764613038652f6d61696e7461696e6162696c697479){canonical-src="https://api.codeclimate.com/v1/badges/6e586ff6eb12a67da08e/maintainability"}](https://codeclimate.com/github/lopidio/jsonPlaceholderReplacer/maintainability){rel="nofollow"}
[![Test Coverage](https://camo.githubusercontent.com/16b339e6de526d0d135f5e8712511c16ad34590df20163f18f8a3cc70d82ff76/68747470733a2f2f6170692e636f6465636c696d6174652e636f6d2f76312f6261646765732f36653538366666366562313261363764613038652f746573745f636f766572616765){canonical-src="https://api.codeclimate.com/v1/badges/6e586ff6eb12a67da08e/test_coverage"}](https://codeclimate.com/github/lopidio/jsonPlaceholderReplacer/test_coverage){rel="nofollow"}
[![Known Vulnerabilities](https://camo.githubusercontent.com/691c2ca9db652911b92dde7cf76a90ab17cc0e273373c0d0473ae0e96e335deb/68747470733a2f2f736e796b2e696f2f746573742f6769746875622f76697267732f6a736f6e506c616365686f6c6465725265706c616365722f62616467652e737667){canonical-src="https://snyk.io/test/github/virgs/jsonPlaceholderReplacer/badge.svg"}](https://app.snyk.io/){rel="nofollow"}

Lightweight yet really powerful typescript library/cli to replace placeholders in an javascript object/JSON.
By default, all you have to do is to use double curly brackets **{{placeholderKey}}** or angle brackets **\<\<placeholderKey\>\>**, interchangeably, to identify the placeholder.
Don\'t worry, if you don\'t like these default placeholders you can create your own.

## CLI usage {#cli-usage dir="auto" tabindex="-1"}

[](#cli-usage){#user-content-cli-usage aria-label="Permalink: CLI usage"}

    json-placeholder-replacer annotetad-json.json [...variableMaps]

### Example {#example dir="auto" tabindex="-1"}

[](#example){#user-content-example aria-label="Permalink: Example"}

\$ json-placeholder-replacer [annotated.json](https://github.com/virgs/jsonPlaceholderReplacer/blob/main/annotated.json) [variable_map.json](https://github.com/virgs/jsonPlaceholderReplacer/blob/main/variable_map.json)
\$ jpr [variable_map.json](https://github.com/virgs/jsonPlaceholderReplacer/blob/main/variable_map.json) \< [annotated.json](https://github.com/virgs/jsonPlaceholderReplacer/blob/main/annotated.json)
\$ cat [annotated.json](https://github.com/virgs/jsonPlaceholderReplacer/blob/main/annotated.json) \| jpr [variable_map.json](https://github.com/virgs/jsonPlaceholderReplacer/blob/main/variable_map.json)
\$ echo \'{\"curly\": \"{{key}}\", \"angle\": \"\<\>\"}\' \| jpr variable_maps

### Would result {#would-result dir="auto" tabindex="-1"}

[](#would-result){#user-content-would-result aria-label="Permalink: Would result"}

    cat replaceable.json
            # {
            #  "curly": "{{key}}",
            #  "angle": "<<key>>"
            # }
    cat variable.map:
            # {
            #         "key": 10,
            #         "not-mapped": 20
            # }
    json-placeholder-replacer replaceable.json variable.map
            # {
            #         "curly": 10,
            #         "angle": 10,
            #         "not-mapped": 20
            # }

## Library usage {#library-usage dir="auto" tabindex="-1"}

[](#library-usage){#user-content-library-usage aria-label="Permalink: Library usage"}

    import { JsonPlaceholderReplacer } from "json-placeholder-replacer";
    const placeHolderReplacer = new JsonPlaceholderReplacer();

    placeHolderReplacer.addVariableMap({
      key: 100,
      otherKey: 200,
    });
    const afterReplace = placeHolderReplacer.replace({
      replaceable: "{{key}}",
      otherReplaceableWithSameKey: "<<key>>",
      otherReplaceable: "{{otherKey}}",
    });

    // afterReplace = {
    //    replaceable: 100,
    //    otherReplaceableWithSameKey: 100,
    //    otherReplaceable: 200
    // }

Note

An object passed to `.replace()` is mutated in-place:

    const beforeReplace = { some: "{{placeholder}}" };
    const afterReplace = placeHolderReplacer.replace(beforeReplace);
    // beforeReplace === afterReplace

### You can replace the default placeholders with some as cool as you want {#you-can-replace-the-default-placeholders-with-some-as-cool-as-you-want dir="auto" tabindex="-1"}

[](#you-can-replace-the-default-placeholders-with-some-as-cool-as-you-want){#user-content-you-can-replace-the-default-placeholders-with-some-as-cool-as-you-want aria-label="Permalink: You can replace the default placeholders with some as cool as you want"}

    const placeHolderReplacer = new JsonPlaceholderReplacer({
      delimiterTags: [{ begin: "@{{-", end: "-}}@" }],
    });
    placeHolderReplacer.addVariableMap({
      key: "nice",
    });
    const afterReplace = placeHolderReplacer.replace({
      replaceable: "@{{-key-}}@",
    });

    // afterReplace = {
    //    replaceable: "nice",
    // }

### It\'s also possible to add more than one variables map {#its-also-possible-to-add-more-than-one-variables-map dir="auto" tabindex="-1"}

[](#its-also-possible-to-add-more-than-one-variables-map){#user-content-its-also-possible-to-add-more-than-one-variables-map aria-label="Permalink: It's also possible to add more than one variables map"}

    placeHolderReplacer.addVariableMap({
      firstMapKey: "1",
    });
    placeHolderReplacer.addVariableMap({
      secondMapKey: 2,
    });
    const afterReplace = placeHolderReplacer.replace({
      replaceable: "{{firstMapKey}}",
      otherReplaceable: "<<secondMapKey>>",
    });

    // afterReplace = {
    //    replaceable: "1",
    //    otherReplaceable: 2
    // }

### And the last added maps have higher priority (but non-nullish values will be preserved from previous map) {#and-the-last-added-maps-have-higher-priority-but-non-nullish-values-will-be-preserved-from-previous-map dir="auto" tabindex="-1"}

[](#and-the-last-added-maps-have-higher-priority-but-non-nullish-values-will-be-preserved-from-previous-map){#user-content-and-the-last-added-maps-have-higher-priority-but-non-nullish-values-will-be-preserved-from-previous-map aria-label="Permalink: And the last added maps have higher priority (but non-nullish values will be preserved from previous map)"}

    placeHolderReplacer.addVariableMap({
      id: "lowerPriority",
      name: "Name",
    });
    placeHolderReplacer.addVariableMap({
      id: "higherPriority",
      name: undefined,
    });
    const afterReplace = placeHolderReplacer.replace({
      id: "{{id}}",
      name: "{{name}}",
    });

    // afterReplace = {
    //    id: "higherPriority"
    //    name: "Name"
    // }

### It\'s possible to override global values map with `.setVariableMap()` {#its-possible-to-override-global-values-map-with-.setvariablemap dir="auto" tabindex="-1"}

[](#its-possible-to-override-global-values-map-with-setvariablemap){#user-content-its-possible-to-override-global-values-map-with-setvariablemap aria-label="Permalink: It's possible to override global values map with .setVariableMap()"}

    placeHolderReplacer.addVariableMap({
      id: "Id",
      name: "Name",
    });
    placeHolderReplacer.setVariableMap({
      // <- note setVariableMap() here
      id: "New Id",
      name: undefined,
    });
    const afterReplace = placeHolderReplacer.replace({
      id: "{{id}}",
      name: "{{name}}",
    });

    // afterReplace = {
    //    id: "New Id"
    //    name: "{{name}}"
    // }

### It\'s possible to override global maps with local by `.replaceWith()` {#its-possible-to-override-global-maps-with-local-by-.replacewith dir="auto" tabindex="-1"}

[](#its-possible-to-override-global-maps-with-local-by-replacewith){#user-content-its-possible-to-override-global-maps-with-local-by-replacewith aria-label="Permalink: It's possible to override global maps with local by .replaceWith()"}

    placeHolderReplacer.addVariableMap({
      id: "Id",
      name: "Name",
    });
    const afterReplace = placeHolderReplacer.replaceWith(
      {
        id: "{{id}}",
        name: "{{name}}",
      },
      { name: "New Name" },
    );

    // afterReplace = {
    //    id: "{{id}}"
    //    name: "New Name"
    // }

### It keeps original variable types {#it-keeps-original-variable-types dir="auto" tabindex="-1"}

[](#it-keeps-original-variable-types){#user-content-it-keeps-original-variable-types aria-label="Permalink: It keeps original variable types"}

If a variable in the map is boolean/string/number/object, it remains as boolean/string/number/object when it\'s replaced

    placeHolderReplacer.addVariableMap({
      booleanKey: true,
      stringKey: "string",
      numberKey: 10,
      objectKey: {
        inner: "inner",
      },
    });
    const afterReplace = placeHolderReplacer.replace({
      booleanReplaceable: "{{booleanKey}}",
      stringReplaceable: "{{stringKey}}",
      numberReplaceable: "{{numberKey}}",
      objectReplaceable: "{{objectKey}}",
    });

    // afterReplace = {
    //    booleanReplaceable: true,
    //    stringReplaceable: "string",
    //    numberReplaceable: 10,
    //    objectReplaceable: {
    //      inner: "inner"
    //    }
    // }

### Just to make it clearer, it does not replace the placeholder Key {#just-to-make-it-clearer-it-does-not-replace-the-placeholder-key dir="auto" tabindex="-1"}

[](#just-to-make-it-clearer-it-does-not-replace-the-placeholder-key){#user-content-just-to-make-it-clearer-it-does-not-replace-the-placeholder-key aria-label="Permalink: Just to make it clearer, it does not replace the placeholder Key"}

    placeHolderReplacer.addVariableMap({
      key: "someValue",
    });
    const afterReplace = placeHolderReplacer.replace({
      "{{key}}": "value",
    });
    // afterReplace = {
    //    "{{key}}": "value"
    // }

### And, of course, it handles array substitution as well {#and-of-course-it-handles-array-substitution-as-well dir="auto" tabindex="-1"}

[](#and-of-course-it-handles-array-substitution-as-well){#user-content-and-of-course-it-handles-array-substitution-as-well aria-label="Permalink: And, of course, it handles array substitution as well"}

    placeHolderReplacer.addVariableMap({
      key: 987,
      objectReplaceable: {
        inner: "inner",
      },
    });
    const afterReplace = placeHolderReplacer.replace({
      array: ["string", "{{objectReplaceable}}", "{{key}}"],
    });

    // afterReplace = {
    //    array: ["string", { inner: "inner" }, 987]
    // }

### Want to get nested elements? Go for it {#want-to-get-nested-elements-go-for-it dir="auto" tabindex="-1"}

[](#want-to-get-nested-elements-go-for-it){#user-content-want-to-get-nested-elements-go-for-it aria-label="Permalink: Want to get nested elements? Go for it"}

    placeHolderReplacer.addVariableMap({
      key: {
        nested: "value",
      },
    });
    const afterReplace: any = placeHolderReplacer.replace({
      replaceable: "<<key.nested>>",
    });

    // afterReplace = {
    //    replaceable: "value"
    // }

### This feature allows you to have default values in case you don\'t have them mapped {#this-feature-allows-you-to-have-default-values-in-case-you-dont-have-them-mapped dir="auto" tabindex="-1"}

[](#this-feature-allows-you-to-have-default-values-in-case-you-dont-have-them-mapped){#user-content-this-feature-allows-you-to-have-default-values-in-case-you-dont-have-them-mapped aria-label="Permalink: This feature allows you to have default values in case you don't have them mapped"}

    placeHolderReplacer.addVariableMap({
      key: "value",
    });
    const afterReplace: any = placeHolderReplacer.replace({
      replaceable: "<<not-found-key:default-value>>",
    });

    // afterReplace = {
    //    replaceable: "default-value"
    // }

### Of course, you can also change what is the default value separator (defaults to \':\') {#of-course-you-can-also-change-what-is-the-default-value-separator-defaults-to dir="auto" tabindex="-1"}

[](#of-course-you-can-also-change-what-is-the-default-value-separator-defaults-to-){#user-content-of-course-you-can-also-change-what-is-the-default-value-separator-defaults-to- aria-label="Permalink: Of course, you can also change what is the default value separator (defaults to ':')"}

    const placeHolderReplacer = new JsonPlaceholderReplacer({
      defaultValueSeparator: ":=:",
    });

    placeHolderReplacer.addVariableMap({
      key: "value",
    });
    const afterReplace: any = placeHolderReplacer.replace({
      replaceable: "<<not-found-key:=:default-value>>", // Note the ':=:'
    });

    // afterReplace = {
    //    replaceable: "default-value"
    // }
