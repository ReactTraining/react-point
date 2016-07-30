# react-point

[`react-point`](https://www.npmjs.com/package/react-point) is a very small and focused click/tap detector component for React.

A `<Point>` component listens for clicks and click-like touches (not swipes or drags) and notifies you in its `onPoint` callback.

## Installation

Using [npm](https://www.npmjs.com/):

    $ npm install --save react-point

Then with a module bundler like [webpack](https://webpack.github.io/), use as you would anything else:

```js
// using an ES6 transpiler, like babel
import Point from 'react-point'

// not using an ES6 transpiler
var Point = require('react-point')
```

The UMD build is also available on [npmcdn](https://npmcdn.com):

```html
<script src="https://npmcdn.com/react-point/umd/react-point.min.js"></script>
```

You can find the library on `window.ReactPoint`.

## Usage

Just render a `<Point>` component and give it an `onPoint` function to call whenever the user clicks or taps it.

```js
import React from 'react'
import Point from 'react-point'

class App extends React.Component {
  handlePoint() {
    alert('I was clicked or tapped!')
  }

  render() {
    return (
      <Point onPoint={this.handlePoint}/>
    )
  }
}
```

That's it :)
