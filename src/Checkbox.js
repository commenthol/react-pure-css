import React, {Component} from 'react'
import classnames from 'classnames'
import Input from './Input'
import {addClass, randomId} from './helpers'

import '../css/base.css'
import '../css/forms.css'
import './Checkbox.css'

const checkboxClass = 'pure-checkbox'

export default class Checkbox extends Component {
  constructor (props) {
    super(props)
    this._id = props.id || randomId('checkbox')
  }

  render () {
    const {
      id,
      type, // filter out as type is 'checkbox'
      className,
      children,
      ...other
    } = this.props
    this._id = id || this._id
    const _className = classnames(className, checkboxClass, addClass(checkboxClass)({disabled: other.disabled}))
    return (
      <label htmlFor={this._id} className={_className}>
        <Input id={this._id} type='checkbox' {...other} />
        {children
          ? <span> {children} </span>
          : null
        }
      </label>
    )
  }
}
