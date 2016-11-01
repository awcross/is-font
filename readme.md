# is-font [![Build Status](https://travis-ci.org/awcross/is-font.svg?branch=master)](https://travis-ci.org/awcross/is-font) [![Coverage Status](https://coveralls.io/repos/github/awcross/is-font/badge.svg?branch=master)](https://coveralls.io/github/awcross/is-font?branch=master)

> Detect if a file is a font


## Install

```
$ npm install --save is-font
```

## Usage

```js
const isFont = require('is-font');

isFont('awesomeFont.woff2');
//=> {ext: woff2, mime: application/font-woff}

isFont('fakeFont.ttf');
//=> false
```

## API

### isFont(filepath)

Returns an object if true. False otherwise.

#### filepath

Type: `string`

Path to the file.


## Related

- [is-font-cli](https://github.com/awcross/is-font-cli) - CLI for this module

## License

MIT © [Alex Cross](http://alexcross.io)
