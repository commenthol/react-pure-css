import React from 'react'
import classnames from 'classnames'
import {addClass} from './helpers'

import '../css/base.css'
import '../css/buttons.css'
import './Button.css'

const buttonClass = 'pure-button'
const addClassSize = (base) => (size) => (size && `${base}-${size}`)

const _addClass = addClass(buttonClass)
const _addClassSize = addClassSize(buttonClass)

export default function Button (props) {
  const {
    primary,
    secondary,
    active,
    size,
    className,
    children,
    ...other} = props
  other.className = classnames(
    className,
    buttonClass,
    _addClass({primary, secondary, active}),
    _addClassSize(size)
  )
  return (
    <button {...other}>
      {children}
    </button>
  )
}
