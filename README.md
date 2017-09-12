# react-point [![Travis][build-badge]][build] [![npm package][npm-badge]][npm]

[build-badge]: https://img.shields.io/travis/ReactTraining/react-point/master.svg?style=flat-square
[build]: https://travis-ci.org/ReactTraining/react-point

[npm-badge]: https://img.shields.io/npm/v/react-point.svg?style=flat-square
[npm]: https://www.npmjs.org/package/react-point

[`react-point`](https://www.npmjs.com/package/react-point) gives you fast touch events for your React applications.

A `<PointTarget>` normalizes click and click-like touch events (not swipes or drags) into a "point" event. This helps you avoid the 300ms delay for click events on touch interfaces like iOS.

## Installation

Using [yarn](https://yarnpkg.com/):

    $ yarn add react-point

Then, use as you would anything else:

```js
// using ES6 modules
import PointTarget from 'react-point'

// using CommonJS modules
var PointTarget = require('react-point')
```

The UMD build is also available on [unpkg](https://unpkg.com):

```html
<script src="https://unpkg.com/react-point/umd/react-point.min.js"></script>
```

You can find the library on `window.ReactPoint`.

## Usage

Just render a `<PointTarget>` component and give it an `onPoint` function to call whenever the user clicks or taps the element.

```js
import React from 'react'
import PointTarget from 'react-point'

class App extends React.Component {
  handlePoint = () => {
    alert('I was clicked or tapped!')
  }

  render() {
    return (
      <PointTarget onPoint={this.handlePoint}/>
    )
  }
}
```

By default, a `<PointTarget>` renders a `<button>` for accessibility. However, you can use the [`children` prop](https://facebook.github.io/react/docs/jsx-in-depth.html#children-in-jsx) to make it render something else. For example, to render a `<div>`:

```js
import React from 'react'
import PointTarget from 'react-point'

class App extends React.Component {
  handlePoint = () => {
    alert('I was clicked or tapped!')
  }

  render() {
    return (
      <PointTarget onPoint={this.handlePoint}>
        <div>Click or tap here</div>
      </PointTarget>
    )
  }
}
```

*Note:* The `onClick`, `onTouchStart`, `onTouchMove`, `onTouchEnd`, and `onTouchCancel` props will be overwritten because `<PointTarget>` needs them to do its thing).

Enjoy!

## About

react-point is developed and maintained by [React Training](https://reacttraining.com). If you're interested in learning more about what React can do for your company, please [get in touch](mailto:hello@reacttraining.com)!
"hat's it :) Enjoy!
