# utils
[![NPM Version][npm-image]][npm-url]
[![NPM Downloads][downloads-image]][downloads-url]
[![Node.js Version][node-version-image]][node-version-url]

English | [简体中文](./README-zh.md)

## Description
This is a utility class

## Installation
This is a [Node.js](https://nodejs.org/en/) module available through the
[npm registry](https://www.npmjs.com/).

Before installing, [download and install Node.js](https://nodejs.org/en/download/).
Node.js 0.10 or higher is required.

Installation is done using the
[`npm install` command](https://docs.npmjs.com/getting-started/installing-npm-packages-locally):

```bash
$ npm install @aplex/utils
```

global:
```bash
$ npm install -g @apleex/utils
```

## Usage
```
var Utils = require('@appleex-utils') ;

Utils.helper.<method>;
Utils.fn.<method>;
Utils.format.<method> ;
Utils.get.<method> ;
Utils.is.<method> ;
...
```

## Construction
```
├── lib/                     
│   ├── helper.js               # Common method collection
│   ├── fn.js                   # Common method collection
│   ├── format.js               # Common method collection
│   ├── get.js                  # Common method collection
│   ├── is.js                   # Common method collection
│   └── ...
├── index.js                    # Entry template file
└── Eslint.md                   # Code rule description
└── README.md                   # project instruction(en)
└── README-zh.md                # project instruction(zh)
└── package.json                # Project package configuration
└── .npmignore                  # npm ignore file configuration
└── .gitignore                  # git ignore file configuration
└── .eslintrc.js                # eslint file configuration
```

## License

[MIT](https://github.com/Appleec/aplex-utils/blob/master/LICENSE)

[npm-image]: https://img.shields.io/npm/v/@aplex/utils.svg
[npm-url]: https://npmjs.org/package/@aplex/utils
[node-version-image]: https://img.shields.io/node/v/@aplex/utils.svg
[node-version-url]: https://nodejs.org/en/download/
[downloads-image]: https://img.shields.io/npm/dm/@aplex/utils.svg
[downloads-url]: https://npmjs.org/package/@aplex/utils
