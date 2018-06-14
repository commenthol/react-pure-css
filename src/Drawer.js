import React, {Component} from 'react'
import classnames from 'classnames'

import './Drawer.css'

// BEM styling
const cn = 'drawer'
const cnContent = `${cn}__content`
const cnContentShow = `${cnContent}--show`
const cnContentPosition = `${cnContent}--position`
const cnBackdrop = `${cn}__backdrop`

export default class Drawer extends Component {
  render () {
    const {
      show,
      position = 'left',
      onClose,
      children
    } = this.props

    const className = classnames(cnContent, `${cnContentPosition}-${position}`, {[cnContentShow]: show})

    return (
      <div className={cn}>
        {show && <div className={cnBackdrop} onClick={(ev) => { onClose && onClose(ev) }} />}
        <div className={className} >
          {children}
        </div>
      </div>
    )
  }
}
