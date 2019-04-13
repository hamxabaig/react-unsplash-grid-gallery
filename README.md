# react-unsplash-gallery-grid

A grid to recreate the unsplash like gallery in react. This project is a rewrite of [unsplash-gallery](https://github.com/fate-lovely/unsplash-gallery) project to port it in a configureable component.

![Screenshot](/images/example.png?raw=true "Gallery demo")

## Installation

Install from npm:

```js
npm install react-unsplash-gallery-grid
```

## Usage


```js
import UnsplashGallery from 'react-unsplash-gallery-grid';
// rest of code omitted for the sake of this example
// ...
const images = [
{height: 500, width: 300, src: 'http://example.com/img1.jpg'},
{height: 200, width: 400, src: 'http://example.com/img2.jpg'},
{height: 350, width: 600, src: 'http://example.com/img3.jpg'},
]

<UnsplashGalllery images={images} columns={3} />
// ...

```

## API

#### images

**Type**: `Array<{width, height, src}>`

**Required**: `true`

#### columns

**Type**: `number`

**Required**: `false`

**Default**: `2`

The number of columns to render images into.

## License

MIT © Made with <3 & :coffee: by [Hamza Baig](https://github.com/hamxabaig)