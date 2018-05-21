import React, {Component} from 'react'
import { storiesOf } from '@storybook/react'
import { withReadme } from 'storybook-readme'
import readme from './doc/Dialog.md'

import {Dialog, Button} from '../src'

storiesOf('pure.css', module)
  .add('Dialog', withReadme(readme, () => {
    class DialogContainer extends Component {
      constructor () {
        super()
        this.state = { show: false }
      }
      render () {
        const {show} = this.state
        return (
          <div className='body'>
            <Button onClick={() => this.setState({show: true})}>
              Show Dialog
            </Button>
            <Dialog show={show}
              onClose={() => this.setState({show: false})}>
              <h1 style={{padding: '0em 1em'}}>
                Hello...
              </h1>
            </Dialog>
          </div>
        )
      }
    }

    return (
      <DialogContainer />
    )
  }))
