var utils = require('reactive/lib/utils')

module.exports = plugin

function plugin (instance) {
  if (instance == null || typeof instance.bind !== 'function')
    throw new Error('Requires Reactive instance')

  instance.bind('data-skip', plugin.binding)
}

plugin.binding = function (el, thruthy) {
  if (!thruthy || thruthy==='false') return

  // Interpolate "thruthy", because reactive checks the 
  // "skip" boolean before interpolating attributes
  if (utils.hasInterpolation(thruthy)) {
    var reactive = this.reactive
    thruthy = utils.interpolate(thruthy, function(prop, fn){
      if (fn) return fn(reactive)
      else return reactive.get(prop)
    })
    if (!thruthy || thruthy==='false') return
  }

  this.skip = true
}