# Autocomplete

Renders a input field with similar behavior as [`<datalist>`↗ ](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/datalist)

Requires javascript in browser! (For the paranoid and those which like to perform serverside rendering). Use [`<Datalist>`](/?selectedKind=pure.css%2Fforms&selectedStory=Datalist) for such cases. The API is identically.

## Properties

Name      | Type     | Description
--------- | -------- | -----------
label     | string, node | label for input
options   | array    | Array of options<br> `['string1', 'string2', ...]`
allowCreate | bool   | allow creating new values
autoComplete | [string='off'] | set to `autoComplete='off'` as IE11, Edge, FF render ugly after input.
onChange  | function | onChange handler `(ev, value, isValid) => {}`
className | string   | css class name of the element

plus all attributes from [`<input>`↗](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input)

If `allowCreate` is not set, an option value should be selected. In case the value is not found in the list the `onBlur` event will clear the value.

## Usage

```js
import {Autocomplete} from '@commenthol/react-pure-css'

const options = [
  'Apple',
  'Banana',
  'Cherry'
]

render () {
  return (
    <Form>
      <Autocomplete
        label='uncontrolled required'
        name='uncontrolled'
        required
        options={options} />

      <Autocomplete
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
