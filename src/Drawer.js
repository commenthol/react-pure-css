import React, {Component} from 'react'
import classnames from 'classnames'

import './Drawer.css'

const content = 'drawer__content'

export default class Drawer extends Component {
  render () {
    const {
      show,
      position = 'left',
      onClose,
      children
    } = this.props

    const className = classnames(content, `${content}--position-${position}`, {[`${content}--show`]: show})

    return (
      <div className='drawer'>
        {show && <div className='drawer__backdrop' onClick={(ev) => { onClose && onClose(ev) }} />}
        <div className={className} >
          {children}
        </div>
      </div>
    )
  }
}
