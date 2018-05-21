# @commenthol/react-pure-css

> pure.css with react components

https://commenthol.github.io/react-pure-css/

## install

    npm i -S @commenthol/react-pure-css

## usage

Check the `*.stories.js` files under `./storybook` for the time being.

## customisation

Use a copy of `@commenthol/react-pure-css/css/variables.css` for custom vars.
Then add it to your project like this:

```js
// copy import '@commenthol/react-pure-css/css/variables.css'
import './variables.css'
import '@commenthol/react-pure-css/css/base.css'

import {Form, Input, ...} from '@commenthol/react-pure-css'
```

## license

All `.css` files in `./css` are taken from [purecss](https://npmjs.org/package/purecss) and are under the Yahoo! Inc. BSD license. See the [pure LICENSE][pure license] file for license text and copyright information.

All other files are licensed under MIT. See [LICENSE](./LICENSE).

## references

- [pure.css][]

[pure.css]: https://purecss.io
[pure license]: https://github.com/pure-css/pure/blob/master/LICENSE.md
