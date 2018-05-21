# RadioButton

## Properties

Name      | Type     | Description
--------- | -------- | -----------
checked   | bool     | controlled component needs `onChange`
onChange  | function | onChange handler
checkedValue | string | pass value instead of `checked`; needs `value`
defaultChecked | bool | uncontrolled component
name      | string   | name of radio group
value     | string   | value of radio button
disabled  | bool     | disabled
className | string   | css class name of the element

plus all attributes from [`<input type="radio">`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/radio).

## Usage

```js
import {Form, RadioButton} from '@commenthol/react-pure-css'

render () {
  return (
    <Form>
    <RadioButton>Default radio button</RadioButton>
    <RadioButton defaultChecked>Checked radio button</RadioButton>
    <RadioButton disabled>Disabled radio button</RadioButton>
    <RadioButton disabled defaultChecked>Disabled checked radio button</RadioButton>
    </Form>
  )
}
```

### Controlled

```js
class RadioButtonControlled extends Component {
  constructor () {
    super()
    this.state = { value: 'on' }
  }
  onChange = (ev) => {
    const {value} = ev.target
    this.setState({value})
  }
  render () {
    return (
      <Form>
        <RadioButton name='radiogroup' value='on'
          checkedValue={value}
          onChange={this.onChange}>
          Default radio button</RadioButton>
        <RadioButton name='radiogroup' value='off'
          checkedValue={value}
          onChange={this.onChange}>
          Checked radio button</RadioButton>
      </Form>
    )
  }
}
```
