import React, {Component} from 'react'
import classnames from 'classnames'
import {randomId, addUnit} from './helpers'

import '../css/base.css'
import '../css/forms.css'

export default class Textarea extends Component {
  constructor (props) {
    super(props)
    this._id = props.id || randomId('input')
  }
  render () {
    const {
      u,
      rounded,
      label,
      className,
      ...other
    } = this.props

    Object.assign(other, {
      id: this._id,
      className: classnames(className, addUnit({u}))
    })

    return [
      label && <label key='0' htmlFor={this._id}>{label}</label>,
      <textarea key='1' {...other} />
    ]
  }
}
