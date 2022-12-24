
[中文](./README.zh.md)
## Introduction

The icon warehouse of mx-design has the following features:

## Feature 1: icon-font icon to Icon component script

Script path:
```
./srcript/generateIcons.js
```
It also contains a use case. If you download icons from icon-font, this repository contains a script that can read the symbol-mode js file you pulled from icon-font, and then extract the <path> tag content of all elements in it. Then they are packaged as Icon files that react can use directly.

## Feature 2: Support direct use of plop templates to generate a single Icon component

```
npm run plop
```
The template configuration file is in
```
./plopfile.js
```
The template files are in
```
plop-templates/icon.hbs
```
