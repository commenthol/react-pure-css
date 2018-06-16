# Grid

## Properties

Name      | Type     | Description
--------- | -------- | ----
className | string   | css class name of the element

# Unit

Please refer to [pure.css grids↗](https://purecss.io/grids/) .

## Properties

Name      | Type     | Default | Description
--------- | -------- | ------- | ----
u         | string   | 1       | normal grid width
sm        | string   |         | for breakpoint `sm`
md        | string   |         | for breakpoint `md`
lg        | string   |         | for breakpoint `lg`
xl        | string   |         | for breakpoint `xl`
className | string   |         | css class name of the element

## Usage

### Normal Grid

```js
import {Grid} from '@commenthol/react-pure-css'
const {Unit} = Grid

render () {
  return (
    <Grid>
      <Unit u='1-3'>One</Unit>
      <Unit u='1-3'>Two</Unit>
      <Unit u='1-3'>Three</Unit>
    </Grid>
  )
}
```

### Responsive Grid

```js
import {Grid} from '@commenthol/react-pure-css'
const {Unit} = Grid

render () {
  return (
    <Grid>
      <Unit sm='1-2' md='1-3' lg='1-4'>One</Unit>
      <Unit sm='1-2' md='1-3' lg='1-4'>Two</Unit>
      <Unit sm='1-2' md='1-3' lg='1-4'>Three</Unit>
      <Unit sm='1-2' md='1' lg='1-4'>Four</Unit>
    </Grid>
  )
}
```
