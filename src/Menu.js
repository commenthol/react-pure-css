import React, {Component} from 'react'
import classnames from 'classnames'
import {addClass} from './helpers'

import '../css/base.css'
import '../css/menus.css'
import './Menu.css'

const menuClass = 'pure-menu'
const menuLinkClass = 'pure-menu-link'
const menuHeadingClass = 'pure-menu-heading'
const menuItemClass = 'pure-menu-item'

export default function Menu (props) {
  const {
    horizontal,
    scrollable,
    className,
    children,
    ...other
  } = props
  other.className = classnames(className, addClass(menuClass)({horizontal, scrollable}))
  return (
    <div {...other}>
      {children}
    </div>
  )
}

export function MenuList (props) {
  const {
    className,
    children,
    ...other
  } = props
  other.className = classnames(className, 'pure-menu-list')
  return (
    <ul {...other}>
      {children}
    </ul>
  )
}
Menu.List = MenuList

export function MenuHeading (props) {
  const {
    className,
    href,
    onClick,
    children,
    ...other
  } = props
  Object.assign(other, {href, onClick})
  other.className = 'pure-menu-heading-link'
  const _className = classnames(className, menuHeadingClass, {[menuLinkClass]: href})
  const _children = href || onClick
    ? React.createElement('a', other, children)
    : children
  return (
    <li className={_className}>
      {_children}
    </li>
  )
}
Menu.Heading = MenuHeading

export function MenuItem (props) {
  const {
    disabled,
    active,
    divided,
    className,
    href,
    onClick,
    children,
    ...other
  } = props
  Object.assign(other, {href, onClick})
  const _disabled = disabled || !(href || onClick)
  const _className = classnames(className, menuItemClass,
    addClass(menuClass)({disabled: _disabled, selected: active, divided})
  )
  const _children = !_disabled
    ? React.createElement(MenuLink, other, children)
    : children
  return (
    <li className={_className}>
      {_children}
    </li>
  )
}
Menu.Item = MenuItem

export function MenuLink (props) {
  const {
    heading,
    className,
    children,
    ...other
  } = props
  other.className = classnames(className, menuLinkClass, {[menuHeadingClass]: heading})
  return (
    <a {...other}>
      {children}
    </a>
  )
}
Menu.Link = MenuLink

export class MenuChildren extends Component {
  constructor (props) {
    super(props)
    this.state = {
      active: props.active
    }
    this._toggle = this._toggle.bind(this)
  }

  _toggle () {
    this.setState({active: !this.state.active})
  }

  render () {
    const {
      label,
      allowHover,
      className,
      children
    } = this.props
    const {active} = this.state

    const _className = classnames(className, menuItemClass,
      'pure-menu-has-children',
      { 'pure-menu-allow-hover': allowHover,
        'pure-menu-active': active
      }
    )

    return (
      <li className={_className}>
        <MenuLink onClick={this._toggle}>{label}</MenuLink>
        {active && <div className='pure-menu-children__backdrop' onClick={this._toggle} />}
        <ul className='pure-menu-children'>
          {children}
        </ul>
      </li>
    )
  }
}
Menu.Children = MenuChildren
