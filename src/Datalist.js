import React, {Component} from 'react'
import {randomId} from './helpers'

import Input from './Input'

export default class Datalist extends Component {
  constructor (props) {
    super(props)
    Object.assign(this, {
      _onChange: this._onChange.bind(this),
      _onBlur: this._onBlur.bind(this),
      _id: randomId('list'),
      state: {
        options: this._update(props.options)
      },
      _isValid: false
    })
  }

  componentWillReceiveProps (next) {
    if (next.options !== this.props.options) {
      this.state.options = this._update(next.options)
    }
  }

  _update (options) {
    return options.map((option, i) =>
      <option key={i} value={option} />
    )
  }

  _onChange (ev) {
    const {onChange, allowCreate, options} = this.props
    const {value} = ev.target
    this._isValid = allowCreate || !value || !!~options.indexOf(value)
    if (this._isValid) {
      ev.target.setCustomValidity('')
    } else {
      ev.target.setCustomValidity('Select a value from the list')
    }
    onChange && onChange(ev, value, this._isValid)
  }

  _onBlur (ev) {
    const {onBlur} = this.props
    if (!this._isValid) {
      ev.target.value = ''
      this._onChange(ev)
    }
    onBlur && onBlur(ev)
  }

  render () {
    const {
      allowCreate,
      options: _options_, // filter out
      className,
      onBlur,
      ...other
    } = this.props
    const {
      options
    } = this.state

    Object.assign(other, {
      list: this._id,
      onChange: this._onChange,
      onBlur: allowCreate ? onBlur : this._onBlur
    })

    return [
      <Input key={0} {...other} />,
      <datalist key={1} id={this._id}>
        {options}
      </datalist>
    ]
  }
}
