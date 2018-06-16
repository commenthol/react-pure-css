# Form

## Properties

Name      | Type     | Description
--------- | -------- | -----------
aligned   | bool     | aligned form
stacked   | bool     | stacked form
className | string   | css class name of the element
onSubmit  | function | `onSubmit(ev, send<object>)` wraps `onSubmit` and provides `send` object with `name`:`value` pairs of all form elements

plus all attributes from [`<form>`↗](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form)

## Usage

```js
import {Form, Checkbox, Input} from '@commenthol/react-pure-css'

render () {
  return (
    <Form onSubmit={this.onSubmit}>
      <Form.Group>
        <legend>A compact inline form</legend>
        <Input type='email' placeholder='Email' />&nbsp;
        <Input type='password' placeholder='Password' />&nbsp;
        <Checkbox id='remember'>Remember me</Checkbox>
        <Button type='submit' primary>Sign in</Button>
      </Form.Group>
    </Form>
  )
}
```

# Form.Message / FormMessage

Message to show additional information on form field (e.g. `<input>`)

## Properties

Name      | Type     | Description
--------- | -------- | -----------
inline    | bool     | message gets inlined
className | string   | css class name of the element

# Form.Group / FormGroup

Groups form fields using `<fieldset>`

## Properties

Name      | Type     | Description
--------- | -------- | ----
grouped   | bool     | group input fields/ textareas together
aligned   | bool     | aligned form group, required in `<Form aligned>`
className | string   | css class name of the element

# Form.ControlGroup / FormControlGroup

Group single form field (e.g. label, input and form message)

## Usage

```js
import {Form, Input} from '@commenthol/react-pure-css

render () {
  <Form.ControlGroup>
    <label htmlFor='name'>Username</label>
    <Input id='name' type='text' placeholder='Username' required />
    <Form.Message inline>This is a required field.</Form.Message>
  </Form.ControlGroup>
}
```

# Form.Controls / FormControls

Group form controls

## Usage

```js
render () {
  <Form.Controls>
    <Checkbox name='terms'>I have read the terms and conditions</Checkbox>
    <Button type='submit' primary>Submit</Button>
  </Form.Controls>
}
```
