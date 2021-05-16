# Alpine Plugin Template

One short line about the plugin.

[![GitHub tag (latest by date)](https://img.shields.io/github/v/tag/{repository})](https://github.com/{repository}/tree/0.0.0)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/{npm-package})](https://bundlephobia.com/result?p={npm-package})
[![Downloads from Jsdelivr NPM](https://img.shields.io/jsdelivr/npm/hm/{npm-package})](https://www.jsdelivr.com/package/npm/{npm-package})
[![npm](https://img.shields.io/npm/dm/{npm-package})](https://npmjs.com/package/{npm-package})
[![Changelog](https://img.shields.io/badge/change-log-log)](/CHANGELOG.md)

## About

A short bit of information about the plugin and what it does.


Be sure to do a site wide search/replace for the following:

```
{author-name} - Example: Rafik El Hadi Houari
AlpinePlugin - The name of your plugin in PascalCase
{current-year} - Example: 2021
{package-description} - The summary
{npm-package} - The name of your npm package. Example: `plugin-name`
{repository} -  The full github repository path. Example: `username/plugin-name`
```

## Installation

### CDN

Include the following `<script>` tag in the `<head>` of your document:

``` html
<script src="https://cdn.jsdelivr.net/gh/{repository}@v0.0.0/dist/index.js"></script>
```

> **Important**: This must be added **before** loading Alpine.js when using CDN links.

## Versioning

This projects follow the [Semantic Versioning](https://semver.org/) guidelines.

## License

Copyright (c) {current-year} {author-name} and contributors

Licensed under the MIT license, see [LICENSE.md](LICENSE.md) for details.
