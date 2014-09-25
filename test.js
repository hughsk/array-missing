var test = require('tape')
var miss = require('./')

test('one missing element', function(t) {
  miss(
      [2, 3, 6, 5, 4]
    , [1, 2, 4, 5, 6]
    , function(el, i) {
      t.equal(el, 3, 'element === 3')
      t.equal(i, 1, 'index === 1')
    })

  t.end()
})

test('multiple missing elements', function(t) {
  var missing = []
  var el = 0
  var id = 1

  miss(
      [1, 2, 3, 4, 5]
    , [0, 1, 2, 4, 6]
    , function(el, i) {
      missing.push([el, i])
    })

  t.equal(missing.length, 2, 'correct number of missing elements')

  t.equal(missing[0][el], 3, 'missing[0] element === 3')
  t.equal(missing[1][el], 5, 'missing[1] element === 5')

  t.equal(missing[0][id], 2, 'missing[0] index === 2')
  t.equal(missing[1][id], 4, 'missing[1] index === 4')
  t.end()
})
