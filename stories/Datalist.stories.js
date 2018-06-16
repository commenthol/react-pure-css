import React, {Component} from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withReadme } from 'storybook-readme'
import readme from './doc/Datalist.md'
import {submit} from './common'

import {Datalist, Form, Button} from '../src'

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

class DatalistControlled extends Component {
  constructor (props) {
    super(props)
    this.state = { value: '' }
  }
  render () {
    return (
      <Datalist
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
  .add('Datalist', withReadme(readme, () => {
    const onSubmit = (ev, send) => {
      action('submit')(submit(ev, send))
    }
    return <Form stacked onSubmit={onSubmit}>
      <Datalist
        label='required'
        name='uncontrolled'
        required
        options={options} />

      <Datalist
        label='allowCreate required'
        name='uncontrolledAllowCreate'
        allowCreate required
        options={options} />

      <DatalistControlled
        label='controlled'
        name='controlled'
        options={options} />

      <DatalistControlled
        label='controlled allowCreate'
        name='controlledAllowCreate'
        allowCreate
        options={options} />

      <Button>Submit</Button>
    </Form>
  }))
