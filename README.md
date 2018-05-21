# react-pure-css

> pure.css with react components

## install

    npm i -S react-pure-css

## usage

Check the `*.stories.js` files under `./storybook` for the time being.

## customisation

Use a copy of `react-pure-css/css/variables.css` for custom vars.
Then add it to your project like this:

```js
// copy import 'react-pure-css/css/variables.css'
import './variables.css'
import 'react-pure-css/css/base.css'

import {Form, Input, ...} from 'react-pure-css'
```

## license

All `.css` files in `./css` are taken from [purecss](https://npmjs.org/package/purecss) and are under the Yahoo! Inc. BSD license. See the [pure LICENSE][pure license] file for license text and copyright information.

All other files are licensed under MIT. See [LICENSE](./LICENSE).

## references

- [pure.css][]

[pure.css]: https://purecss.io
[pure license]: https://github.com/pure-css/pure/blob/master/LICENSE.md
