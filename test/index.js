var skip = require('../')
  , test = require('tape')
  , reactive = require('reactive')

test('exports', function(t){
  t.equal(typeof skip, 'function', 'a function')
  t.throws(skip, Error, 'requires a reactive instance')
  t.equal(typeof skip.binding, 'function', 'binding fn')
  t.end()
})

test('strings', function(t){
  t.ok(expr('true'))
  t.ok(expr('something'))
  t.notOk(expr('false'))
  t.notOk(expr(''))
  t.end()
})

test('expressions', function(t){
  t.ok(expr("{name == 'hank'}"))
  t.ok(expr("{name}"))
  t.notOk(expr("{name == 'larry'}"))
  t.notOk(expr("{color}"))
  t.end()
})

function expr(expr) {
  var tpl = '<p data-skip="'+expr+'">{name}</p>'
  var model = { name: 'hank' }

  var r = reactive(tpl, model, {
    bindings: {
      'data-skip': skip.binding
    }
  })

  var skipped = r.el.textContent == '{name}'
  return skipped
}