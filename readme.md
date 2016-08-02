# is-font [![Build Status](https://travis-ci.org/awcross/is-font.svg?branch=master)](https://travis-ci.org/awcross/is-font)

> Detect if a file is a font


## Install

```
$ npm install --save is-font
```


## Usage

```js
const isFont = require('is-font');

isFont('awesome.woff2');
//=> {ext: woff2, mime: application/font-woff}

```


## API

### isFont(filepath)

Returns an object if true or false if file is not a font.

#### filepath

Type: `string`

Path to the file.


## License

MIT © [Alex Cross](http://alexcross.io)
