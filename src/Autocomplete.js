import React, {Component} from 'react'
import classnames from 'classnames'
import {
  addUnit,
  uaIEorEdge
} from './helpers'

import Input from './Input'
import './Autocomplete.css'

// BEM styling
const cn = 'autocomplete'
const cnOptions = `${cn}__options`
const cnOptionsShow = `${cn}__options--show`
const cnDrop = `${cn}__drop`
const cnDropShow = `${cnDrop}--show`
const cnOption = `${cn}__option`
const cnOptionSelected = `${cnOption}--selected`

export default class Autocomplete extends Component {
  constructor (props) {
    super(props)
    Object.assign(this, {
      _onChange: this._onChange.bind(this),
      _onBlur: this._onBlur.bind(this),
      _onFocus: this._onFocus.bind(this),
      _onKeyDown: this._onKeyDown.bind(this),
      _onDelete: this._onDelete.bind(this),
      _onInputClick: this._onInputClick.bind(this),
      state: {
        show: false,
        value: props.value || props.defaultValue || '', // value to display in input
        filtered: [], // filtered list of matching options
        selected: -1
      },
      _isValid: false,
      _click: 0
    })
    this._update()
  }

  componentWillReceiveProps (nextProps) {
    if (this.state.value !== nextProps.value) {
      this.state.value = nextProps.value || ''
    }
  }

  _update () {
    const onClick = (value) => () => {
      this._target.focus()
      this._valid()
      this.setState({value, show: false})
    }
    const {options} = this.props
    const {selected, value} = this.state

    let filtered = options
      .filter(option => !value || !!~(option || '').toLowerCase().indexOf((value || '').toLowerCase()))
    if (!filtered.length) {
      filtered = options
    }
    this.state.filtered = filtered

    return filtered.map((option, i) => {
      const other = {onClick: onClick(option)}
      const isSelected = i === selected
      other.className = classnames(cnOption, {[cnOptionSelected]: isSelected})
      if (isSelected) {
        other.ref = (el) => el && el.scrollIntoView && el.scrollIntoView({block: 'center', inline: 'nearest'})
      }
      return (
        <li key={i} {...other} >{option}</li>
      )
    })
  }

  _valid (value) {
    const {allowCreate, options, customValidity} = this.props
    this._isValid = allowCreate || !value || !!~options.indexOf(value)
    this._target.setCustomValidity(this._isValid ? '' : customValidity || 'Select a value from the list')
  }

  _onChange (ev, show = true) {
    this._target = ev.target
    const {onChange} = this.props
    const {value} = this._target
    this._valid(value)
    onChange && onChange(ev, value, this._isValid)
    this.setState({value, show}) // show dropdown while typing
  }

  _onKeyDown (ev) {
    let {selected, filtered, show, value} = this.state
    const {length} = filtered
    this._target = ev.target

    switch (ev.key) {
      case 'Enter':
        if (show) { // don't submit form on select
          ev.preventDefault()
          value = filtered[selected] || value
          this._valid(value)
        }
        this.setState({show: false, value})
        return
      case 'Tab': // select selected if value is empty
        if (show && !value) { // don't submit form on select
          value = filtered[selected] || value
          this._valid(value)
        }
        this.setState({ show: false, value })
        return
      case 'Escape':
        show = false
        break
      case 'ArrowUp':
        selected = Math.max(0, selected - 1)
        break
      case 'ArrowDown':
        if (show) {
          selected = Math.min(length ? length - 1 : 0, selected + 1)
        } else {
          selected = -1
          show = true
        }
        break
      default:
        return
    }
    ev.preventDefault()
    this._valid(value)
    this.setState({selected, show})
  }

  _onBlur (ev) {
    const {onBlur} = this.props
    this._target = ev.target

    onBlur && onBlur(ev)
    setTimeout(() => {
      if (!this._isValid) {
        this.state.value = this._target.value = ''
      }
      !this._show && this.setState({show: false})
      this._show = false
    }, 250) // need this timeout for click on option
  }

  _onFocus (ev) {
    const {onFocus} = this.props
    this._target = ev.target
    onFocus && onFocus(ev)
  }

  _onDelete () {
    const state = {show: true}
    if (this.state.value) {
      state.value = ''
      state.selected = -1 // reset selection
    }
    this._show = true // keep dropdown open after onBlur event
    this._target.focus()
    this.setState(state)
  }

  _onInputClick () {
    ++this._click // show dropdown on second click in input
    if (this._click > 1) this.setState({show: true})
  }

  render () {
    const {
      u,
      allowCreate,
      autoComplete = 'off',
      className,
      onBlur,
      options: _0, // filter out
      value: _1,
      defaultValue: _2,
      ...other
    } = this.props
    const {
      show,
      value = ''
    } = this.state

    Object.assign(other, {
      u,
      value,
      autoComplete,
      onChange: this._onChange,
      onClick: this._onInputClick,
      onBlur: this._onBlur,
      onFocus: this._onFocus,
      onKeyDown: this._onKeyDown,
      className: classnames(className, 'autocomplete__input'),
      style: {display: 'inline-block'}
    })

    const _cnOptions = classnames(cnOptions, {[cnOptionsShow]: show}, addUnit({u: u || 'input'}))
    const _cnDrop = classnames(cnDrop, {[cnDropShow]: show})

    if (!show) this._click = 0

    const icon = !value
      ? '\u25BE' // ▾
      : !uaIEorEdge // edge, ie already shows `x` in input
        ? '\u2715' // ✕
        : ''

    return (
      <div className='autocomplete'>
        <Input {...other} />
        <span className={_cnDrop} onClick={this._onDelete}>{icon}</span>
        <ul className={_cnOptions} >
          {this._update()}
        </ul>
      </div>
    )
  }
}
