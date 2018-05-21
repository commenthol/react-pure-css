# Table

## Properties

Name      | Type     | Description
--------- | -------- | -----------
bordered  | bool     | bordered table
horizontal | bool    | horizontal bordered
striped   | bool     | with stripes
className | string   | css class name of the element

plus all attributes from [`<table>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table).

## Usage

```js
import {Table} from '@commenthol/react-pure-css'

render () {
  return (
    <Table bordered>
      <thead>
        <tr>
          <th>row 1</th>
          <th>row 2</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>val 1</td>
          <td>val 2</td>
        </tr>
      </tbody>
    </Table>
  )
}
```
