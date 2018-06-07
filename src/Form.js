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
    onSubmit,
    ...other
  } = props
  other.className = classnames(className, formClass, _addClass({stacked, aligned}))
  // wraps onSubmit to return send params
  other.onSubmit = (ev) => {
    const send = {}
    for (let i = 0; i < ev.target.elements.length; i++) {
      const {name, value, checked, type} = ev.target.elements[i]
      if (name && value !== undefined && value !== '') {
        let v = value
        switch (type) {
          case 'checkbox':
            v = checked ? 'on' : undefined // force same behavior as with noscript form submission
            break
          case 'radio':
            v = checked ? value : undefined
            break
        }
        if (v) send[name] = v
      }
    }
    onSubmit && onSubmit(ev, send)
  }
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
