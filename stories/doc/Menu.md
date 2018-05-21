# Menu

## Properties

Name      | Type     | Description
--------- | -------- | -----------
horizontal | bool    | horizontal Menu (default is vertical)
scrollable | bool    | scrollable Menu
className | string   | css class name of the element

# Menu.List

## Properties

Name      | Type     | Description
--------- | -------- | -----------
className | string   | css class name of the element

# Menu.Heading

## Properties

Name      | Type     | Description
--------- | -------- | -----------
href      | string   | link
onClick   | function | onClick handler
className | string   | css class name of the element

# Menu.Item

## Properties

Name      | Type     | Description
--------- | -------- | -----------
disabled  | bool     | disabled Menu item
active    | bool     | active Menu item
divided   | bool     | add division (top for vertical, left for horizontal Menu)
href      | string   | link
onClick   | function | onClick handler
className | string   | css class name of the element

# Menu.Link

## Properties

Name      | Type     | Description
--------- | -------- | -----------
heading   | bool     | displays as `Menu.Heading` outside of `Menu.List`
className | string   | css class name of the element

# Menu.Children

Dropdown Menu Item

## Properties

Name      | Type     | Description
--------- | -------- | -----------
label     | string   | Menu item label
active    | bool     | open dropdown
allowHover | bool    | allow display of dropdown on hover
className | string   | css class name of the element

## Usage

```js
import {Menu} from 'react-pure-css'

render () {
  return (
    <Menu horizontal>
      <Menu.List>
        <Menu.Heading href='#'>Heading href</Menu.Heading>
        <Menu.Item active href='#'>Active</Menu.Item>
        <Menu.Item onClick={action('onClick')}>onClick</Menu.Item>
        <Menu.Item divided href='#'>Divided</Menu.Item>
        <Menu.Heading>Heading</Menu.Heading>
        <Menu.Children label='Dropdown'>
          <Menu.Item href='#' active>✓ Selected</Menu.Item>
          <Menu.Item href='#'>🎂 Normal</Menu.Item>
          <Menu.Item href='#' disabled>Disabled</Menu.Item>
        </Menu.Children>
        <Menu.Item href='#' disabled>Disabled</Menu.Item>
        <Menu.Item>No Link</Menu.Item>
      </Menu.List>
    </Menu>
  )
}
```
