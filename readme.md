# reactive-skip

Plugin for [reactive](https://github.com/component/reactive) to conditionally skip processing of a node and its descendants. Adds a `data-skip` binding.

> Jump to: [Example](#example) - [Install](#install) - [License](#license)

[![Build Status](https://travis-ci.org/vweevers/reactive-skip.svg)](https://travis-ci.org/vweevers/reactive-skip)

## Example

```html
<section data-skip="{ name == 'hank'}">
  <h1 on-click="ignored">hey now</h1>
  <p>no {interpolation} here</p>
</section>
<section data-skip="false">
  <h1>{name} is happy</h1>
</section>
```

```js
var reactive = require('reactive')
  , skip = require('reactive-skip')

reactive(template, {name: 'hank'}, {
  bindings: {
    'data-skip': skip.binding
  }
})
```

Alternatively, do:

```js
var view = reactive(template, {name: 'hank'})
view.use(skip)
```

But note, in this case the template is processed entirely before the plugin is loaded.

## Install

    npm i reactive-skip

Then use [browserify](http://browserify.org/) to bundle for the browser.

## License

[MIT](http://opensource.org/licenses/MIT) © [Vincent Weevers](http://vincentweevers.nl)
