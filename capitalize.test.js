import capitalize from './capitalize'

test('"test" should become "Test"', () => {
  expect(capitalize('test')).toBe('Test')
})

test('"Car" should become "Car"', () => {
  expect(capitalize('Car')).toBe('Car')
})

test('"TRAIN" should become "Train"', () => {
  expect(capitalize('TRAIN')).toBe('Train')
})

test('"123qwe213" should become "123Qwe213"', () => {
  expect(capitalize('123qwe213')).toBe('123Qwe213')
})

test('"123123" should become "123123" and return "No letters in string"', () => {
  expect(capitalize('123123')).toBe('No letters in string')
})
