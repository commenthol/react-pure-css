import React, {Component} from 'react'
import {randomId} from './helpers'

import '../css/base.css'
import '../css/forms.css'

export default class Select extends Component {
  constructor (props) {
    super(props)
    this._id = props.id || randomId('select')
    this._onChange = this._onChange.bind(this)
  }

  _onChange (ev) {
    const {onChange} = this.props
    const {selectedOptions} = ev.target
    const values = []
    for (let opt of selectedOptions) {
      values.push(opt.value)
    }
    onChange && onChange(ev, values)
  }

  render () {
    const {
      label,
      options = [],
      onChange,
      className,
      children,
      ...other
    } = this.props

    const _options = options.map(option => {
      const {label, value} = convValueLabel(option)
      const attrs = {key: value, value}
      return (
        <option {...attrs} >{label}</option>
      )
    })

    other.id = this._id
    other.onChange = this._onChange

    return [
      label && <label htmlFor={this._id}>{label}</label>,
      <select {...other}>
        {_options.length
          ? _options
          : children
        }
      </select>
    ]
  }
}

function convValueLabel (option) {
  if (Array.isArray(option)) {
    const [value, label] = option
    return {value, label}
  } else if (typeof option === 'string') {
    return {value: option, label: option}
  }
  return option
}
