# react-number-selector

> A number selector React component

## Install

```bash
npm install --save react-number-selector
```

## Intro

<p align="center">
  <img width="146" src="media/demo.png">
</p>

## Usage

```jsx
import React, { Component } from 'react'

import NumberSelector from 'react-number-selector'
import 'react-number-selector/dist/index.css'

class Example extends Component {
  render() {
    return <NumberSelector />
  }
}
```

### NumberSelector accepts these props:
 * values: array of widths to display (default: [1, 2, 3, 4, 5, 7, 9])
 * selectedValue: the default selected element from values
 * width: component width (default: 100)
 * background: component's background colour (default: "#000000");
 * colour: the texts' colour (default: "#00ff00")
 * inputColour: the input field's text colour (default: same as "colour")
 * hoverBorder: an element's border when hovering over it (default: no border)
 * hoverBackground: an element's background when hovering over it (default: undefined)
 * font: the text's font-family (default: "sans-serif")
 * fontSize: the text's font size (CSS value; default: initial)
 * opacity: the component's opacity (not the hovering opacity; CSS value, default: 1)
 * onClick: a function that is called with a single argument, the value from values, when user clicks a hovered row
 * onChange: a function that is called with the hovered over row when user hovers over a row (enters it)
 * onInputChange: function that is called with a custom input value; if not provided, no input field will be shown

### Develop

Watch and build bundle:
```
yarn start
```

In separate terminal run dev server:
```
cd example
yarn start
```

Run storybook:
```
yarn storybook
```
or 
```
npm run storybook
```

## License

MIT © [okloecker](https://github.com/okloecker)
