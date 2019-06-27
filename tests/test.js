const tests = require('../index.js')

test('Testing', () => {
  expect(tests.test()).toBe('It works!')
})

test('Test isFizzy', () => {
  expect(tests.isFizzy(1)).toBe(false)
  expect(tests.isFizzy(3)).toBe(true)
  expect(tests.isFizzy(4)).toBe(false)
  expect(tests.isFizzy(6)).toBe(true)
})

test('Test isBuzzy', () => {
  expect(tests.isBuzzy(1)).toBe(false)
  expect(tests.isBuzzy(5)).toBe(true)
  expect(tests.isBuzzy(6)).toBe(false)
  expect(tests.isBuzzy(15)).toBe(true)
})

test('Test fizzyBuzzy', () => {
  expect(tests.fizzyBuzzy(1)).toBe('')
  expect(tests.fizzyBuzzy(3)).toBe('fizz')
  expect(tests.fizzyBuzzy(5)).toBe(' buzz')
  expect(tests.fizzyBuzzy(15)).toBe('fizz buzz')
}) 

test('Test fizzBuzz', () => {
  expect(tests.fizzBuzz(1).count).toBe(1)

  expect(tests.fizzBuzz(1).fizz).toBe(0)
  expect(tests.fizzBuzz(1).buzz).toBe(0)
  
  expect(tests.fizzBuzz(1).fizzBuzz).toBe(0)
  expect(tests.fizzBuzz(3).fizzBuzz).toBe(0)
  expect(tests.fizzBuzz(5).fizzBuzz).toBe(0)
  expect(tests.fizzBuzz(15).fizzBuzz).toBe(0)
}) 

