import React, {Component} from 'react'
import classnames from 'classnames'
import Input from './Input'
import {addClass, randomId} from './helpers'

import '../css/base.css'
import '../css/forms.css'
import './RadioButton.css'

const radioClass = 'pure-radio'

export default class RadioButton extends Component {
  constructor (props) {
    super(props)
    this._id = props.id || randomId('radio')
  }

  render () {
    const {
      id,
      type, // filter out as type is 'radio'
      checkedValue,
      className,
      children,
      ...other
    } = this.props
    this._id = id || this._id
    const _className = classnames(className, radioClass, addClass(radioClass)({disabled: other.disabled}))
    if (checkedValue) {
      // controlled component using checkedValue
      other.checked = (checkedValue === other.value)
    }
    return (
      <label htmlFor={this._id} className={_className}>
        <Input id={this._id} type='radio' {...other} />
        {children
          ? <span> {children} </span>
          : null
        }
      </label>
    )
  }
}
