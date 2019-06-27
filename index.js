
function isFizzy(n) {
  return n % 3 === 0
}

function isBuzzy(n) {
  return n % 5 === 0
}

function fizzyBuzzy(n) {
  let result = ''
  if (isFizzy(n)) { result += 'fizz' }
  if (isBuzzy(n)) { result += ' buzz' }
  return result
}

function fizzBuzz(count) {
  let result = { count, fizz: 0, buzz: 0, fizzBuzz: 0 }
  for (let i = 1; i <= count; i += 1) {
    const str = fizzyBuzzy(i)
    switch(str) {
      case 'fizz': 
        result.fizz += 1
        break
      case 'buzz': 
        result.buzz += 1
        break
      case 'fizz buzz':
        result.fizzBuzz += 1
        break
    }
  }
  return result
}

module.exports.test = test
module.exports.isFizzy = isFizzy
module.exports.isBuzzy = isBuzzy
module.exports.fizzyBuzzy = fizzyBuzzy
module.exports.fizzBuzz = fizzBuzz