import React from 'react'
import classnames from 'classnames'

export default function ButtonGroup (props) {
  const {
    className,
    children,
    ...other
  } = props
  other.className = classnames(className, 'pure-button-group')
  return (
    <div role='group' {...other}>
      {children}
    </div>
  )
}
