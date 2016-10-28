# is-font [![Build Status](https://travis-ci.org/awcross/is-font.svg?branch=master)](https://travis-ci.org/awcross/is-font)

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

- [is-font-cli](https://github.com/awcross/is-font-cli) - Detect if a file is a font

## License

MIT © [Alex Cross](http://alexcross.io)
