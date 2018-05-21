# Button

## Properties

Name      | Type     | Description
--------  | -------- | -----------
primary   | bool     | button in primary color
secondary | bool     | button in secondary color
disabled  | bool     | disabled button
size      | string   | `xs`, `s`, `l`, `xl` with different font-size
active    | bool     | active (pressed) button
onClick   | function | onClick handler
className | string   | css class name of the element
type      | string   | button type

plus all attributes from [`<button>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button)

## Usage

```js
import {Button} from 'react-pure-css'

render () {
  return (
    <Button>A Pure Button</Button>
    <Button disabled>A Disabled Button</Button>
    <Button active>An Active Button</Button>
    <Button primary>A Primary Button</Button>
    <Button secondary>A Secondary Button</Button>
  )
}
```

### Buttons with different sizes

```js
render () {
  return (
    <Button size='xs'>Extra Small Button</Button>
    <Button size='s'>Small Button</Button>
    <Button>Regular Button</Button>
    <Button size='l'>Large Button</Button>
    <Button size='xl'>Extra Large Button</Button>
  )
}
```
