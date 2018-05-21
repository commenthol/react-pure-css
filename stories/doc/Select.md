# Select

## Properties

Name      | Type     | Description
--------  | -------- | -----------
options   | array    | `[{label, value}, ...]` or `[[label, value], ...]` or `[value, ...]`
defaultValue | string,array | selected default values (uncontrolled)
value     | string,array | selected values (controlled)
onChange  | function | onChange handler `(ev<Event>, values<Array>) => {}`
className | string   | css class name of the element

plus all attributes from [`<select>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select)

## Usage

```js
import {Select} from '@commenthol/react-pure-css'

const options = [
  {value: 'one', label: 'One'},
  {value: 'two', label: 'Two'},
  {value: 'three', label: 'Three'},
  {value: 'four', label: 'Four'}
]

render () {
  return (
    <Select options={options}
      defaultValue={'two'}
      onChange={(ev, values) => {}}
    />
  )
}
```

### With `<option>` as children

No `options` prop.

```js
render () {
  return (
    <Select
      defaultValue={'two2'}
      onChange={(ev, values) => {}}
    >
      <option value='one1'>1</option>
      <option value='two2'>2</option>
      <option value='three3'>3</option>
    </Select>
  )
}
```

### Multiple select (controlled)

```js
class SelectControlled extends Component {
  constructor () {
    super()
    this.state = { values: ['two', 'three'] }
  }
  render () {
    return (
      <Select
        multiple
        size={4}
        options={options}
        value={this.state.values}
        onChange={(ev, values) => {
          this.setState({values})
        }}
      />
    )
  }
}
```
