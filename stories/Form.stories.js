import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withReadme } from 'storybook-readme'
import readme from './doc/Form.md'
import {submit} from './common'

import {Form, Button, Select, Input, Textarea, Checkbox, RadioButton} from '../src'

const onSubmit = (ev, send) => action('submit')(submit(ev, send))

storiesOf('pure.css', module)
  .add('Form (compact)', withReadme(readme, () => (
    <Form onSubmit={onSubmit} action='/' method='POST'>
      <Form.Group>
        <legend>A compact inline form</legend>

        <Input type='email' name='email' placeholder='Email' />&nbsp;
        <Input type='password' name='password' placeholder='Password' />&nbsp;

        <Checkbox name='remember' id='remember'>Remember me</Checkbox>

        <RadioButton name='radiogroup' value='green' required>
          green</RadioButton>
        <RadioButton name='radiogroup' value='blue'>
          blue</RadioButton>

        <Button type='submit' primary>Sign in</Button>
      </Form.Group>
    </Form>
  )))
  .add('Form (stacked)', withReadme(readme, () => (
    <Form stacked onSubmit={onSubmit}>
      <Form.Group>
        <legend>A Stacked Form</legend>

        <Input label='Email' name='email' type='email' placeholder='Email' />
        <Form.Message>This is a required field.</Form.Message>

        <Input label='Password' name='password' type='password' placeholder='Password' />

        <Select label='State' name='state'>
          <option>AL</option>
          <option>CA</option>
          <option>IL</option>
        </Select>

        <Checkbox name='remember'>Remember me</Checkbox>

        <Button type='submit' primary>Sign in</Button>
      </Form.Group>
    </Form>
  )))
  .add('Form (aligned)', withReadme(readme, () => (
    <Form aligned onSubmit={onSubmit}>
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
          <Checkbox name='terms'>I have read the terms and conditions</Checkbox>
          <Button type='submit' primary>Submit</Button>
        </Form.Controls>
      </Form.Group>
    </Form>
  )))
  .add('Form (grouped)', withReadme(readme, () => (
    <Form onSubmit={onSubmit}>
      <Form.Group>
        <Form.Group grouped>
          <Input name='username' type='text' u='1-2' placeholder='Username' />
          <Input name='password' type='text' u='1-2' placeholder='Password' />
          <Input name='email' type='email' u='1-2' placeholder='Email' />
        </Form.Group>

        <Form.Group grouped>
          <Input name='title' type='text' u='1-2' placeholder='A title' />
          <Textarea name='text' u='1-2' placeholder='Textareas work too' />
        </Form.Group>

        <Button type='submit' u='1-2' primary>Sign in</Button>
      </Form.Group>
    </Form>
  )))
