import React, { Component } from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withReadme } from 'storybook-readme'
import readme from './doc/Checkbox.md'
import {stop} from './common'

import {Form, Checkbox} from '../src'

class CheckboxControlled extends Component {
  constructor () {
    super()
    this.state = {}
  }
  onChange = (ev) => {
    const {name, value} = ev.target
    action('onChange')(name, value, this.state[name])
    this.setState(() => ({[name]: !this.state[name]}))
  }
  render () {
    return (
      <Form onSubmit={stop}>
        <Checkbox
          name='subscribe'
          value='newsletter'
          checked={this.state.subscribe}
          onChange={this.onChange}>
          Subscribe
        </Checkbox>
        <Checkbox
          name='test'
          value='it'
          checked={this.state.test}
          onChange={this.onChange}>
          Test it
        </Checkbox>
      </Form>
    )
  }
}

storiesOf('pure.css', module)
  .add('Checkbox', withReadme(readme, () => (
    <div>
      <Form onSubmit={stop}>
        <Checkbox>Default checkbox</Checkbox>
        <Checkbox defaultChecked>Checked checkbox</Checkbox>
        <Checkbox disabled>Disabled default checkbox</Checkbox>
        <Checkbox disabled defaultChecked>Disabled checked checkbox</Checkbox>
      </Form>

      <h4>Checkbox (controlled)</h4>

      <CheckboxControlled />
    </div>
  )))
