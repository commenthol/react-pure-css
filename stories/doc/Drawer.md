# Drawer

## Properties

Name      | Type     | Default | Description
--------- | -------- | ------- | -----------
show      | bool     |         | show Drawer
position  | string   | left    | drawer position (left, right, top, bottom)
onClose   | function |         | onClose handler
className | string   |         | css class name of the element

## Usage

```js
import {Drawer} from '@commenthol/react-pure-css'

render () {
  const {show} = this.state
  return (
    <div>
      <Button onClick={() => this.setState({show: true}))}>
        Show Drawer
      </Button>
      <Drawer show={show} position='right'
        onClose={() => this.setState({show: false}}>
        <h1>
          Hello...
        </h1>
      </Drawer>
    </div>
  )
}
```
