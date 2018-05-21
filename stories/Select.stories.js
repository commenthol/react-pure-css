import React, {Component} from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withReadme } from 'storybook-readme'
import readme from './doc/Select.md'
import {stop} from './common'

import {Form, Select} from '../src'

const options = [
  {value: 'one', label: 'One'},
  {value: 'two', label: 'Two'},
  {value: 'three', label: 'Three'},
  {value: 'four', label: 'Four'}
]

const json = (value) => JSON.stringify(value)

class SelectControlled extends Component {
  constructor () {
    super()
    this.state = { values: ['two', 'three'] }
  }
  render () {
    return (
      <Form stacked onSubmit={stop}>
        <Select
          label='multiple controlled'
          multiple
          size={4}
          options={options}
          value={this.state.values}
          onChange={(ev, values) => {
            action('select multiple')(json(values))
            this.setState({values})
          }}
        />
      </Form>
    )
  }
}

storiesOf('pure.css', module)
  .add('Select', withReadme(readme, () => (
    <div>
      <Form stacked>
        <Select options={options}
          defaultValue={'two'}
          onChange={(ev, values) => action('select')(json(values))}
        />
      </Form>

      <h4>Single select using children</h4>

      <Form stacked>
        <Select
          label='with children'
          defaultValue={'two2'}
          onChange={(ev, values) => action('select children')(json(values))}
        >
          <option value='one1'>1</option>
          <option value='two2'>2</option>
          <option value='three3'>3</option>
        </Select>
      </Form>

      <h4>Multiple select</h4>

      <Form stacked>
        <Select options={options}
          label='multiple'
          multiple
          size={4}
          defaultValue={['one', 'four']}
          onChange={(ev, values) => action('select multiple')(json(values))}
        />
      </Form>

      <h4>Select (controlled)</h4>

      <SelectControlled />
    </div>
  )))
