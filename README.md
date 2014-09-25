# array-missing [![unstable](http://badges.github.io/stability-badges/dist/unstable.svg)](http://github.com/badges/stability-badges)

Call a function for every element from a given array that's missing from another array

## Usage

[![NPM](https://nodei.co/npm/array-missing.png)](https://nodei.co/npm/array-missing/)

### `missing(expected, actual, missed)`

Checks every element in the `expected` array to see if it's present somewhere in
the `actual` array.

If an element isn't found, `missed(el, index)` will be called, where `el` is the
element that's missing and `index` is its index within `expected`.

For example:

``` javascript
var missing = require('array-missing')

missing([1, 2, 4, 8], [6, 1, 2, 5], function(el, i) {
  console.log('element:', el)
  console.log('index:', i)
})

// element: 4
// index: 2
// element: 8
// index: 3
```

## License

MIT. See [LICENSE.md](http://github.com/hughsk/array-missing/blob/master/LICENSE.md) for details.
