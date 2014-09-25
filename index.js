module.exports = missing

function noop() {}
function missing(expected, actual, missed, matched) {
  var e = expected.length
  var a = actual.length

  missed  = missed || noop
  matched = matched || noop

  out: for (var i = 0; i < e; i++) {
    var ex = expected[i]

    for (var j = 0; j < a; j++) {
      if (ex === actual[j]) {
        matched(ex, i)
        continue out
      }
    }

    missed(ex, i)
  }
}
