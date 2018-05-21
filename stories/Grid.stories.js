import React from 'react'
import { storiesOf } from '@storybook/react'
import { withReadme } from 'storybook-readme'
import readme from './doc/Grid.md'

import './Grid.stories.css'
import {Grid} from '../src'
const {Unit} = Grid

storiesOf('pure.css', module)
  .add('Grid', withReadme(readme, () => (
    <div>
      <h4>Normal Grid</h4>

      <Grid className='grid__normal'>
        <Unit u='1-3'>One</Unit>
        <Unit u='1-3'>Two</Unit>
        <Unit u='1-3'>Three</Unit>
      </Grid>

      <h4>Responsive Grid</h4>

      <Grid className='grid__responsive'>
        <Unit sm='1-2' md='1-3' lg='1-4'>One</Unit>
        <Unit sm='1-2' md='1-3' lg='1-4'>Two</Unit>
        <Unit sm='1-2' md='1-3' lg='1-4'>Three</Unit>
        <Unit sm='1-2' md='1' lg='1-4'>Four</Unit>
      </Grid>
    </div>
  )))
  .add('Grid (5ths-based)', () => (
    <div>
      <h3>5ths-Based Units</h3>
      <Grid className='grids__unit'>
        <Unit className='grids__unit_width'>1-5</Unit>
        <Unit className='grids__unit_details'>
          <Grid>
            <Unit className='grids__unit_bar' u='1-5' />
          </Grid>
        </Unit>
      </Grid>
      <Grid className='grids__unit'>
        <Unit className='grids__unit_width'>2-5</Unit>
        <Unit className='grids__unit_details'>
          <Grid>
            <Unit className='grids__unit_bar' u='2-5' />
          </Grid>
        </Unit>
      </Grid>
      <Grid className='grids__unit'>
        <Unit className='grids__unit_width'>3-5</Unit>
        <Unit className='grids__unit_details'>
          <Grid>
            <Unit className='grids__unit_bar' u='3-5' />
          </Grid>
        </Unit>
      </Grid>
      <Grid className='grids__unit'>
        <Unit className='grids__unit_width'>4-5</Unit>
        <Unit className='grids__unit_details'>
          <Grid>
            <Unit className='grids__unit_bar' u='4-5' />
          </Grid>
        </Unit>
      </Grid>
      <Grid className='grids__unit'>
        <Unit className='grids__unit_width'>5-5</Unit>
        <Unit className='grids__unit_details'>
          <Grid>
            <Unit className='grids__unit_bar' u='5-5' />
          </Grid>
        </Unit>
      </Grid>
      <Grid className='grids__unit'>
        <Unit className='grids__unit_width'>1-1</Unit>
        <Unit className='grids__unit_details'>
          <Grid>
            <Unit className='grids__unit_bar' u='1-1' />
          </Grid>
        </Unit>
      </Grid>
    </div>
  ))
  .add('Grid (24ths-based)', () => (
    <div>
      <h3>24ths-Based Units</h3>
      <Grid className='grids__unit'>
        <Unit className='grids__unit_width'>1-24</Unit>
        <Unit className='grids__unit_details'>
          <Grid>
            <Unit className='grids__unit_bar' u='1-24' />
          </Grid>
        </Unit>
      </Grid>
      <Grid className='grids__unit'>
        <Unit className='grids__unit_width'>3-8</Unit>
        <Unit className='grids__unit_details'>
          <Grid>
            <Unit className='grids__unit_bar' u='3-8' />
          </Grid>
        </Unit>
      </Grid>
      <Grid className='grids__unit'>
        <Unit className='grids__unit_width'>9-24</Unit>
        <Unit className='grids__unit_details'>
          <Grid>
            <Unit className='grids__unit_bar' u='9-24' />
          </Grid>
        </Unit>
      </Grid>
      <Grid className='grids__unit'>
        <Unit className='grids__unit_width'>22-24</Unit>
        <Unit className='grids__unit_details'>
          <Grid>
            <Unit className='grids__unit_bar' u='22-24' />
          </Grid>
        </Unit>
      </Grid>
      <Grid className='grids__unit'>
        <Unit className='grids__unit_width'>24-24</Unit>
        <Unit className='grids__unit_details'>
          <Grid>
            <Unit className='grids__unit_bar' u='24-24' />
          </Grid>
        </Unit>
      </Grid>
      <Grid className='grids__unit'>
        <Unit className='grids__unit_width'>1-1</Unit>
        <Unit className='grids__unit_details'>
          <Grid>
            <Unit className='grids__unit_bar' u='1-1' />
          </Grid>
        </Unit>
      </Grid>
    </div>
  ))
