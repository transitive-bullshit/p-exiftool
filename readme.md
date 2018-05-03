# p-exiftool

> Wrapper around [exiftool](https://www.sno.phy.queensu.ca/~phil/exiftool/) for reading metadata from many different file types.

[![NPM](https://img.shields.io/npm/v/p-exiftool.svg)](https://www.npmjs.com/package/p-exiftool) [![Build Status](https://travis-ci.org/transitive-bullshit/p-exiftool.svg?branch=master)](https://travis-ci.org/transitive-bullshit/p-exiftool) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

- supports many different [file types](https://sno.phy.queensu.ca/~phil/exiftool/#supported)
- supports common media types like `png`, `jpg`, `gif`, `mp4`, etc.
- extracts metadata such as resolution, author, duration, etc.
- supports gif frame count and duration
- converts metadata keys to camel-case for consistency


## Install

This module requires `node >= 8`.

### Mac OS X

```bash
brew install exiftool

npm install --save p-exiftool
```

### Ubuntu

```bash
sudo apt-get update
sudo apt-get install libimage-exiftool-perl

npm install --save p-exiftool
```

See more details on [installing exiftool](https://sno.phy.queensu.ca/~phil/exiftool/install.html).


## Usage

```js
const exiftool = require('p-exiftool')

const metadata = await exiftool('./media/bubbles.gif')
console.log(metadata)
```

```
{
  "fileName": "bubbles.gif",
  "fileSize": 2419689,
  "fileType": "GIF",
  "fileTypeExtension": "GIF",
  "mimeType": "image/gif",
  "gifVersion": "89a",
  "imageWidth": 360,
  "imageHeight": 360,
  "hasColorMap": 128,
  "colorResolutionDepth": 8,
  "bitsPerPixel": 8,
  "backgroundColor": 0,
  "animationIterations": 0,
  "frameCount": 28,
  "duration": 1.45,
  "imageSize": "360x360"
}
```


## API

### exiftool(...args)

Returns: `Promise<Object>` or `Promise<Array<Object>>`

You may pass multiple files to exiftool, in which case, a Promise for an array of results will be returned. If you only pass a single file, a single object will be returned.

#### args

Type: `String`
**Required**

Path to one or more image files.

Note that you may also pass extra command-line flags to `exiftool` here as well. The default flags are `-j -n`.


## Related

- [exiftool](https://www.sno.phy.queensu.ca/~phil/exiftool/) - Underlying binary exiftool itself.
- [node-exiftool](https://github.com/nathanpeck/exiftool) - Alternate exiftool wrapper.
- [simple-exiftool](https://github.com/ubaltaci/simple-exiftool) - Alternate exiftool wrapper.


## License

MIT © [Travis Fischer](https://github.com/transitive-bullshit)
