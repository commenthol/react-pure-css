import React from 'react'
import { storiesOf } from '@storybook/react'
import { withReadme } from 'storybook-readme'
import readme from './doc/Form.md'

import {Form, Button, Select, Input, Checkbox} from '../src'

storiesOf('pure.css', module)
  .add('Form (compact)', withReadme(readme, () => (
    <Form>
      <Form.Group>
        <legend>A compact inline form</legend>

        <Input type='email' placeholder='Email' />&nbsp;
        <Input type='password' placeholder='Password' />&nbsp;

        <Checkbox id='remember'>Remember me</Checkbox>

        <Button type='submit' primary>Sign in</Button>
      </Form.Group>
    </Form>
  )))
  .add('Form (stacked)', withReadme(readme, () => (
    <Form stacked>
      <Form.Group>
        <legend>A Stacked Form</legend>

        <Input label='Email' id='email' type='email' placeholder='Email' />
        <Form.Message>This is a required field.</Form.Message>

        <Input label='Password' id='password' type='password' placeholder='Password' />

        <Select label='State' id='state'>
          <option>AL</option>
          <option>CA</option>
          <option>IL</option>
        </Select>

        <Checkbox id='remember'>Remember me</Checkbox>

        <Button type='submit' primary>Sign in</Button>
      </Form.Group>
    </Form>
  )))
  .add('Form (aligned)', withReadme(readme, () => (
    <Form aligned>
      <Form.Group aligned>
        <Form.ControlGroup>
          <label htmlFor='name'>Username</label>
          <Input id='name' type='text' placeholder='Username' required />
          <Form.Message inline>This is a required field.</Form.Message>
        </Form.ControlGroup>

        <Form.ControlGroup>
          <label htmlFor='password'>Password</label>
          <Input id='password' type='password' placeholder='Password' required />
          <Form.Message inline>*</Form.Message>
        </Form.ControlGroup>

        <Form.ControlGroup>
          <label htmlFor='email'>Email Address</label>
          <Input id='email' type='email' placeholder='Email Address' />
        </Form.ControlGroup>

        <Form.ControlGroup>
          <label htmlFor='foo'>Supercalifragilistic Label</label>
          <Input id='foo' type='text' placeholder='Enter something here...' />
        </Form.ControlGroup>

        <Form.Controls>
          <Checkbox>I have read the terms and conditions</Checkbox>
          <Button type='submit' primary>Submit</Button>
        </Form.Controls>
      </Form.Group>
    </Form>
  )))
  .add('Form (grouped)', withReadme(readme, () => (
    <Form>
      <Form.Group>
        <Form.Group grouped>
          <Input type='text' className='pure-input-1-2' placeholder='Username' />
          <Input type='text' className='pure-input-1-2' placeholder='Password' />
          <Input type='email' className='pure-input-1-2' placeholder='Email' />
        </Form.Group>

        <Form.Group grouped>
          <Input type='text' className='pure-input-1-2' placeholder='A title' />
          <textarea className='pure-input-1-2' placeholder='Textareas work too' />
        </Form.Group>

        <Button type='submit' className='pure-input-1-2' primary>Sign in</Button>
      </Form.Group>
    </Form>
  )))
