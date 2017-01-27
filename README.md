# react-gallery

Beautiful, easy to use gallery for React.

## Getting started

Install with:

```
npm install <TO_BE_DEFINED>
```

Then set up your component like this:

```js
import React from 'react';
import ReactDOM from 'react-dom';
import Gallery from 'react-gallery';

const app = document.getElementById('app');

const images = [
  {
    imageUrl: require('../img/01.jpg'),
    thumbnailUrl: require('../img/01-thumb.jpg'),
    title: 'Image 01',
    alt: 'Image 01',
  },
  {
    imageUrl: require('../img/02.jpg'),
    thumbnailUrl: require('../img/02-thumb.jpg'),
    title: 'Image 02',
    alt: 'Image 02',
  },
];

ReactDOM.render(<Gallery images={images} />, app);
```

## Try the example

Run:

```bash
git clone https://github.com/sdeleon28/react-gallery.git
npm install
npm run dev
```

Then open [http://localhost:8080/gallery.html](http://localhost:8080/gallery.html) in your browser.

## Generating thumbnails

This gallery is optimized to look good with thumbnails that are 75px tall. Assuming you have a set of jpg files in a folder, you can easily generate thumbnails for all of them using [ImageMagick](http://www.imagemagick.org/script/index.php):

```bash
cd /path/to/pictures/
for f in *.jpg; do
    convert $f -thumbnail x75 "${f%.*}-thumb.jpg";
done
```

This will generate thumbnails that have a height of 75px and a proportional width.

## Contributing

The usual stuff. PRs are welcome!
