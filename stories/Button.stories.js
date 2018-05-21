import React from 'react'
import { storiesOf } from '@storybook/react'
import { withReadme } from 'storybook-readme'
import readmeButton from './doc/Button.md'
import readmeButtonGroup from './doc/ButtonGroup.md'

import {Button, ButtonGroup} from '../src'

storiesOf('pure.css', module)
  .add('Button', withReadme(readmeButton, () => (
    <div>
      <p>
        <Button>A Pure Button</Button>
      </p>
      <p>
        <Button disabled>A Disabled Button</Button>
      </p>
      <p>
        <Button active>An Active Button</Button>
      </p>
      <p>
        <Button primary>A Primary Button</Button>
      </p>
      <p>
        <Button secondary>A Secondary Button</Button>
      </p>
      <p>
        <Button size='xs'>Extra Small Button</Button>&nbsp;
        <Button size='s'>Small Button</Button>&nbsp;
        <Button size=''>Regular Button</Button>&nbsp;
        <Button size='l'>Large Button</Button>&nbsp;
        <Button size='xl'>Extra Large Button</Button>
      </p>
      <p>
        <Button type='submit'>
          ⚙ Settings
        </Button>
      </p>
    </div>
  )))
  .add('ButtonGroup', withReadme(readmeButtonGroup, () => (
    <p>
      <ButtonGroup>
        <Button>Pure</Button>
        <Button primary>Primary</Button>
        <Button secondary>Secondary</Button>
      </ButtonGroup>
    </p>
  )))
