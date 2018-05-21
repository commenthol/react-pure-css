import React, {Component} from 'react'
import ReactDOM from 'react-dom'

export default class Portal extends Component {
  constructor (props) {
    super(props)
    this.el = document.createElement('div')
  }

  componentDidMount () {
    getContainer(this.props.container).appendChild(this.el)
  }

  componentWillUnmount () {
    getContainer(this.props.container).removeChild(this.el)
  }

  render () {
    const {
      container, // filter out...
      children,
      ...other
    } = this.props
    return ReactDOM.createPortal(
      <div {...other}>{children}</div>,
      this.el
    )
  }
}

function getContainer (container) {
  const _container = typeof container === 'function' ? container() : container
  return ReactDOM.findDOMNode(_container) || document.body
}
