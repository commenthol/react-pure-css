import React from 'react'
import { storiesOf } from '@storybook/react'

import {Form, Button, Input} from '../src'

const stop = (ev) => {
  ev.preventDefault()
  ev.stopPropagation()
}

storiesOf('pure.css', module)
  .add('Input', () => (
    <div>
      <Form stacked onSubmit={stop}>
        <Form.Group>
          <Input label={"type='email'"} value='disabled@email' type='email' placeholder='Disabled' disabled />
          <Form.Message>disabled</Form.Message>

          <Input label={"type='password'"} type='password' placeholder='Required' required />
          <Form.Message>required</Form.Message>

          <Input label={"type='text'"} type='text' placeholder='Readonly' readOnly />
          <Form.Message>readonly</Form.Message>
        </Form.Group>
        <Button primary onSubmit={stop}>Sign in</Button>
      </Form>

      <h4>rounded input</h4>

      <Form onSubmit={stop}>
        <Input type='text' rounded />
        <Button>Search</Button>
      </Form>
    </div>
  ))