import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withReadme } from 'storybook-readme'
import readme from './doc/Menu.md'

import './Menu.stories.css'
import { Menu } from '../src'

const MenuListTest = (
  <Menu.List>
    <Menu.Heading href='#'>Heading href</Menu.Heading>
    <Menu.Item active href='#'>Active</Menu.Item>
    <Menu.Item onClick={action('onClick')}>onClick</Menu.Item>
    <Menu.Item href='#'>Normal</Menu.Item>
    <Menu.Item divided href='#'>Divided</Menu.Item>
    <Menu.Heading>Heading</Menu.Heading>
    <Menu.Children label='Dropdown'>
      <Menu.Item href='#' active>✓ Selected</Menu.Item>
      <Menu.Item href='#'>🎂 Normal</Menu.Item>
      <Menu.Item href='#' disabled>Disabled</Menu.Item>
    </Menu.Children>
    <Menu.Children allowHover label='allowHover'>
      <Menu.Item href='#' active>✓ Selected</Menu.Item>
      <Menu.Item href='#' disabled>Disabled</Menu.Item>
      <Menu.Item href='#'>🎂 Normal</Menu.Item>
    </Menu.Children>
    <Menu.Item href='#' disabled>Disabled</Menu.Item>
    <Menu.Item>No Link</Menu.Item>
  </Menu.List>
)

storiesOf('pure.css/ui', module)
  .add('Menu', withReadme(readme, () => (
    <div>
      <Menu className='menu_restriced_width'>
        {MenuListTest}
      </Menu>

      <h4>Menu scrollable</h4>

      <Menu className='menu_restriced_width_height' scrollable>
        {MenuListTest}
      </Menu>
    </div>
  )))
  .add('Menu (horizontal)', withReadme(readme, () => (
    <div>
      <Menu horizontal>
        {MenuListTest}
      </Menu>

      <h4>Menu horizontal scrollable</h4>

      <Menu horizontal scrollable>
        {MenuListTest}
      </Menu>

    </div>
  )))
