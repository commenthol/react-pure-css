# Dialog

## Properties

Name      | Type     | Description
--------- | -------- | -----------
show      | bool     | show Dialog
onClose   | function | onClose handler 
className | string   | css class name of the element

## Usage

```js
import {Dialog} from '@commenthol/react-pure-css'

render () {
  const {show} = this.state
  return (
    <div>
      <Button onClick={() => this.setState({show: true}))}>
        Show Dialog
      </Button>
      <Dialog show={show}
        onClose={() => this.setState({show: false}}>
        <h1>
          Hello...
        </h1>
      </Dialog>
    </div>
  )
}
```
