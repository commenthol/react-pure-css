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
    const {selectedOptions, options} = ev.target
    const values = []
    if (selectedOptions) {
      for (let i = 0; i < selectedOptions.length; i++) { // Edge15 can't handle for of loop
        values.push(selectedOptions[i].value)
      }
    } else {
      for (let i = 0; i < options.length; i++) { // IE11 fallback
        if (options[i].selected) values.push(options[i].value)
      }
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
      label && <label key={0} htmlFor={this._id}>{label}</label>,
      <select key={1} {...other}>
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
