module.exports = missing

function missing(expected, actual, missed) {
  var e = expected.length
  var a = actual.length

  out: for (var i = 0; i < e; i++) {
    for (var j = 0; j < a; j++) {
      if (expected[i] === actual[j]) {
        continue out
      }
    }

    missed(expected[i], i)
  }
}
