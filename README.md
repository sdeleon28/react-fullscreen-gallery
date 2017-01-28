# react-fullscreen-gallery

Beautiful, easy-to-use gallery for React.

This gallery was originally designed to look good as a fullscreen component, but you can also confine it within a box of your choice.

## Getting started

Install with:

```
npm install react-fullscreen-gallery
```

Then set up your component like this:

```js
import React from 'react';
import ReactDOM from 'react-dom';
import Gallery from 'react-fullscreen-gallery';

// Include jScrollPane styles (either like this or with a link in your HTML)
require('/path/to/node_modules/jscrollpane/style/jquery.jscrollpane.css');

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

That's basically the only way to use the gallery (as of now). This gallery is simple by design. If you want something that you can configure more via props, you should probably check out [react-image-gallery](https://github.com/xiaolin/react-image-gallery) or [react-photo-gallery](https://github.com/neptunian/react-photo-gallery).

If you'd like to change the styles, you'll have to brute-force some CSS in :-)

## Try the example

Run:

```bash
git clone https://github.com/sdeleon28/react-fullscreen-gallery.git
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

## Roadmap

* Thumbnails and title look small in mobile devices. Make them bigger.
* Since the gallery doesn't load images up-front, transition between images is not exactly smooth. Make nicer transitions.
* Support youtube videos.
