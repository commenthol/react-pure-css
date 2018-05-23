# Datalist

Renders a input field based on [`<datalist>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/datalist)

If `allowCreate` is not set, an option value should be selected. In case the value is not found in the list the `onBlur` event will clear the value.

This component won't work so far in
- Safari
- Opera Mini
- UC Browser

Maybe you like to take a look at [react-select](https://www.npmjs.com/package/react-select).

## Properties

Name      | Type     | Description
--------- | -------- | -----------
label     | string, node | label for input
options   | array    | Array of options<br> `['string1', 'string2', ...]`
allowCreate | bool   | allow creating new values
onChange  | function | onChange handler `(ev, value, isValid) => {}`
autocomplete | string | It is recommended to set `autocomplete='off'` as IE11 and Edge render ugly after input.
className | string   | css class name of the element

plus all attributes from [`<input>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input)

## Usage

```js
import {Datalist} from '@commenthol/react-pure-css'

const options = [
  'Apple',
  'Banana',
  'Cherry'
]

render () {
  return (
    <Form>
      <Datalist
        label='uncontrolled required'
        name='uncontrolled' required options={options} />

      <Datalist
        label='controlled allowCreate'
        name='controlledAllowCreate'
        allowCreate
        options={options}
        value={this.state.value}
        onChange={(ev, value, isValid) => {
          this.setState({value})
        }} />

      <Button>Submit</Button>
    </Form>
  )
}
```
