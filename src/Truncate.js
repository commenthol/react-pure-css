import React from 'react'
import classnames from 'classnames'

import './Truncate.css'

export default function Truncate (props) {
  const {
    className,
    children,
    ...other
  } = props

  other.className = classnames(className, 'truncate')
  return (
    <div {...other}>
      {children}
    </div>
  )
}
