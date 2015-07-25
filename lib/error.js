var validator = require('validator');
module.exports = function (title, excerpt, body) {
  arr = []

  if(validator.isNull(title) === true) {
    arr.push('Please Enter a Title')
  }

  if(validator.isNull(excerpt) === true) {
    arr.push('Please Fill Out the Excerpt Field')
  }

  if(validator.isNull(body)=== true) {
    arr.push('Please Fill Out the Body')
  }

  return arr
}
