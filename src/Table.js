import React from 'react'
import classnames from 'classnames'
import {addClass} from './helpers'

import '../css/base.css'
import '../css/tables.css'

const tableClass = 'pure-table'

export default function Table (props) {
  const {
    bordered,
    horizontal,
    striped,
    className,
    children,
    ...other
  } = props
  other.className = classnames(className, tableClass, addClass(tableClass)({bordered, horizontal, striped}))
  return (
    <table {...other}>
      {children}
    </table>
  )
}
