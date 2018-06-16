import React, {Component} from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withReadme } from 'storybook-readme'
import readme from './doc/Autocomplete.md'
import {submit} from './common'

import {Form, Button, Autocomplete} from '../src'

const options = [
  'Apple',
  'Banana',
  'Cherry',
  'Lemon',
  'Orange',
  'Pear',
  'Strawberry',
  'Raspberry',
  'Üɱläut'
]

class AutocompleteControlled extends Component {
  constructor (props) {
    super(props)
    this.state = { value: '' }
  }
  render () {
    return (
      <Autocomplete
        {...this.props}
        value={this.state.value}
        onChange={(ev, value, isValid) => {
          action('onChange')(value, isValid)
          this.setState({value})
        }} />
    )
  }
}

storiesOf('pure.css/forms', module)
  .add('Autocomplete', withReadme(readme, () => {
    const onSubmit = (ev, send) => {
      action('submit')(submit(ev, send))
    }
    return <Form stacked onSubmit={onSubmit}>
      <Autocomplete
        autoFocus
        label='required'
        name='uncontrolled'
        defaultValue='a'
        required
        options={options} />

      <Autocomplete
        label='allowCreate required'
        name='uncontrolledAllowCreate'
        allowCreate required
        options={options} />

      <AutocompleteControlled
        label='controlled'
        name='controlled'
        options={options} />

      <AutocompleteControlled
        label='controlled allowCreate'
        name='controlledAllowCreate'
        allowCreate
        options={options} />

      <Button onSubmit={onSubmit}>Submit</Button>
    </Form>
  }))
