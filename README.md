# react-gallery-private

## Generating thumbnails

This gallery is optimized to look good with thumbnails that are 75px tall. Assuming you have a set
of jpg files all a folder, you can easily generate thumbnails for all of them using ImageMagick:

```
cd /path/to/gallery/
for f in *.jpg; do
    convert $f -thumbnail x75 "${f%.*}-thumb.jpg";
done
```

This will generate thumbnails that have a height of 75px and a proportional width.