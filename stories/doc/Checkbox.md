# Checkbox

## Properties

Name      | Type     | Description
--------- | -------- | -----------
checked   | bool     | controlled component needs `onChange`
onChange  | function | onChange handler
defaultChecked | bool | uncontrolled component
name      | string   | name of checkbox
value     | string   | assigned value of checkbox
disabled  | bool     | disabled
className | string   | css class name of the element

plus all attributes from [`<input type="checkbox">`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox).

## Usage

```js
import {Form, Checkbox} from 'react-pure-css'

render () {
  return (
    <Form>
      <Checkbox>Default checkbox</Checkbox>
      <Checkbox defaultChecked>Checked checkbox</Checkbox>
      <Checkbox disabled>Disabled default checkbox</Checkbox>
      <Checkbox disabled defaultChecked>Disabled checked checkbox</Checkbox>
    </Form>
  )
}
```

### Controlled

```js
class CheckboxControlled extends Component {
  constructor () {
    super()
    this.state = {}
  }
  onChange = (ev) => {
    const {name, value} = ev.target
    this.setState(() => ({[name]: !this.state[name], name, value}))
  }
  render () {
    return (
      <Form>
        <Checkbox
          name='subscribe'
          value='newsletter'
          checked={this.state.subscribe}
          onChange={this.onChange}>
          Subscribe
        </Checkbox>
      </Form>
    )
  }
}
```
