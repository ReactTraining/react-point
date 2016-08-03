# react-point [![Travis][build-badge]][build] [![npm package][npm-badge]][npm]

[build-badge]: https://img.shields.io/travis/ReactTraining/react-point/master.svg?style=flat-square
[build]: https://travis-ci.org/ReactTraining/react-point

[npm-badge]: https://img.shields.io/npm/v/react-point.svg?style=flat-square
[npm]: https://www.npmjs.org/package/react-point

[`react-point`](https://www.npmjs.com/package/react-point) is a small, focused click/tap component for React.

A `<PointTarget>` component listens for clicks and click-like touches (not swipes or drags) and notifies you in its `onPoint` callback.

## Installation

Using [npm](https://www.npmjs.com/):

    $ npm install --save react-point

Then with a module bundler like [webpack](https://webpack.github.io/), use as you would anything else:

```js
// using an ES6 transpiler, like babel
import { PointTarget } from 'react-point'

// not using an ES6 transpiler
var PointTarget = require('react-point').PointTarget
```

The UMD build is also available on [npmcdn](https://npmcdn.com):

```html
<script src="https://npmcdn.com/react-point/umd/react-point.min.js"></script>
```

You can find the library on `window.ReactPoint`.

## Usage

Just render a `<PointTarget>` component and give it an `onPoint` function to call whenever the user clicks or taps it.

```js
import React from 'react'
import { PointTarget } from 'react-point'

class App extends React.Component {
  handlePoint() {
    alert('I was clicked or tapped!')
  }

  render() {
    return (
      <PointTarget onPoint={this.handlePoint}/>
    )
  }
}
```

By default, a `<PointTarget>` renders a `<div>`. Use the `<PointTarget component>` prop to make it render something else. All props are passed directly through to your component (besides `onClick`, `onTouchStart`, `onTouchMove`, `onTouchEnd`, and `onTouchCancel`, which `<PointTarget>` needs to overwrite in order to do its thing).

For example, to render a `<button>`:

```js
import React from 'react'
import { PointTarget } from 'react-point'

class App extends React.Component {
  handlePoint() {
    alert('I was clicked or tapped!')
  }

  render() {
    return (
      <PointTarget component="button" onPoint={this.handlePoint}/>
    )
  }
}
```

You can also pass in custom component classes. That's it :)

Enjoy!
