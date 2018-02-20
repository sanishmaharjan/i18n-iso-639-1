# I18N ISO 639-1
[![NPM Version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Download Count][download-url]][npm-url]

[travis-image]: https://api.travis-ci.org/sanishmaharjan/i18n-iso-639-1.svg?branch=master
[travis-url]: https://travis-ci.org/sanishmaharjan/i18n-iso-639-1
[npm-image]: https://img.shields.io/npm/v/i18n-iso-639-1.svg?style=flat-square
[npm-url]: https://npmjs.org/package/i18n-iso-639-1
[download-url]: https://img.shields.io/npm/dt/i18n-iso-639-1.svg?style=flat-square


JavaScript utilities for [ISO-639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) language codes

## Installation

```
npm install i18n-iso-639-1
```

## Usage

```
const i18nIsoCodes = require('i18n-iso-639-1');

console.log(i18nIsoCodes.getName('zh')) // 'Chinese'
console.log(i18nIsoCodes.getNativeName('zh')) // '中文'

console.log(i18nIsoCodes.getAllNames()) // ['Afar','Abkhaz', ... ,'Zulu']
console.log(i18nIsoCodes.getAllNativeNames()) //['Afaraf','аҧсуа бызшәа', ... ,'isiZulu' ]

console.log(i18nIsoCodes.getCode('Chinese')) // 'zh'
console.log(i18nIsoCodes.getCode('中文')) // 'zh'

console.log(i18nIsoCodes.getAllCodes()) //['aa','ab',...,'zu']

console.log(i18nIsoCodes.validate('en')) // true
console.log(i18nIsoCodes.validate('xx')) // false

console.log(i18nIsoCodes.getLanguages(['en', 'zh']))
// [{code:'en',name:'English',nativeName:'English'},{code:'zh',name:'Chinese',nativeName:'中文'}]
```