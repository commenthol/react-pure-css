import React from 'react'
import classnames from 'classnames'
import {addUnit} from './helpers'

import '../css/base.css'
import '../css/grids.css'
import '../css/grids-responsive.css'

export default function Grid (props) {
  const {
    className,
    children,
    ...other
  } = props
  other.className = classnames(className, 'pure-g')
  return (
    <div {...other}>
      {children}
    </div>
  )
}

export function Unit (props) {
  const {
    u,
    sm,
    md,
    lg,
    xl,
    className,
    children,
    ...other
  } = props
  other.className = classnames(className, 'pure-u', addUnit({u: u || 1, sm, md, lg, xl}))
  return (
    <div {...other}>
      {children}
    </div>
  )
}
Grid.Unit = Unit
