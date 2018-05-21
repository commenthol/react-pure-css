import React from 'react'

import './Dialog.css'

export default function Dialog (props) {
  const {
    show,
    onClose,
    children
  } = props

  return show
    ? <div className='dialog'>
      <div className='dialog__backdrop' onClick={(ev) => { onClose && onClose(ev) }} />
      <div className='dialog__content' >
        {children}
      </div>
    </div>
    : null
}
