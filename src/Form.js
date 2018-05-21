import React from 'react'
import classnames from 'classnames'
import {addClass} from './helpers'

import '../css/base.css'
import '../css/forms.css'

const formClass = 'pure-form'
const formMessageClass = 'pure-form-message'
const _addClass = addClass(formClass)

export default function Form (props) {
  const {
    stacked,
    aligned,
    className,
    children,
    ...other
  } = props
  other.className = classnames(className, formClass, _addClass({stacked, aligned}))
  return (
    <form {...other}>
      {children}
    </form>
  )
}

export function FormMessage (props) {
  const {
    inline,
    className,
    children,
    ...other
  } = props
  other.className = classnames(className, {[formMessageClass]: !inline}, addClass(formMessageClass)({inline}))
  return (
    <span {...other}>
      {children}
    </span>
  )
}
Form.Message = FormMessage

export function FormGroup (props) {
  const {
    grouped,
    className,
    children,
    ...other
  } = props
  other.className = classnames(className, {'pure-group': grouped})
  return (
    <fieldset {...other}>
      {children}
    </fieldset>
  )
}
Form.Group = FormGroup

export function FormControls (props) {
  const {
    children
  } = props
  return (
    <div className='pure-controls'>
      {children}
    </div>
  )
}
Form.Controls = FormControls

export function FormControlGroup (props) {
  const {
    children
  } = props
  return (
    <div className='pure-control-group'>
      {children}
    </div>
  )
}
Form.ControlGroup = FormControlGroup
