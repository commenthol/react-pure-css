import React from 'react'
import { storiesOf } from '@storybook/react'
import { withReadme } from 'storybook-readme'
import readme from './doc/Truncate.md'

import {Truncate} from '../src'

storiesOf('pure.css', module)
  .add('Truncate', withReadme(readme, () => {
    return (
      <Truncate>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
      </Truncate>
    )
  }))
