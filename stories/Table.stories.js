import React from 'react'
import { storiesOf } from '@storybook/react'
import { withReadme } from 'storybook-readme'
import readme from './doc/Table.md'

import { Table } from '../src'

const tableHead = (
  <thead>
    <tr>
      <th>#</th>
      <th>Make</th>
      <th>Model</th>
      <th>Year</th>
    </tr>
  </thead>
)
const tableBody = (
  <tbody>
    <tr>
      <td>1</td>
      <td>Honda</td>
      <td>Accord</td>
      <td>2009</td>
    </tr>

    <tr>
      <td>2</td>
      <td>Toyota</td>
      <td>Camry</td>
      <td>2012</td>
    </tr>

    <tr>
      <td>3</td>
      <td>Hyundai</td>
      <td>Elantra</td>
      <td>2010</td>
    </tr>
  </tbody>
)

storiesOf('pure.css', module)
  .add('Table', withReadme(readme, () => (
    <div className='body'>
      <Table>
        {tableHead}
        {tableBody}
      </Table>

      <h4>Table bordered</h4>

      <Table bordered>
        {tableHead}
        {tableBody}
      </Table>

      <h4>Table horizontal</h4>

      <Table horizontal>
        {tableHead}
        {tableBody}
      </Table>

      <h4>Table striped</h4>

      <Table striped>
        {tableHead}
        {tableBody}
      </Table>
    </div>
  )))
