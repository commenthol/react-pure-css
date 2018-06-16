import React, {Component} from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withReadme } from 'storybook-readme'
import readme from './doc/Drawer.md'
import {stop} from './common'

import {Drawer, Form, Input, Select, Button} from '../src'

storiesOf('pure.css/ui', module)
  .add('Drawer', withReadme(readme, () => {
    class DrawerContainer extends Component {
      constructor () {
        super()
        this.state = {
          show: false,
          position: 'left',
          number: 1
        }
      }
      render () {
        const {show, position, number} = this.state
        return (
          <Form stacked onSubmit={stop}>
            <Form.Group>
              <Select label='position' value={position}
                options={['left', 'right', 'top', 'bottom']}
                onChange={(ev, values) => {
                  action('onChange')(ev, values)
                  this.setState({position: values[0]})
                }} />
              <br />
              <Input label='number' type='number' value={number} onChange={(ev) => {
                const number = toNumber(ev.target.value, 0, 100)
                this.setState({number})
              }} />
            </Form.Group>
            <Button onClick={() => this.setState({show: true})}>
              Show Drawer
            </Button>
            <Drawer show={show} position={position}
              onClose={() => this.setState({show: false})}>
              <div style={{padding: '1em'}}>
                {Array(number).fill('').map(() => <h2>Hello</h2>)}
              </div>
            </Drawer>
          </Form>
        )
      }
    }

    return (
      <DrawerContainer />
    )
  }))

function toNumber (num, min, max) {
  num = Number(num)
  num = isNaN(num)
    ? 0
    : num
  return Math.max(Math.min(num, max), min)
}
