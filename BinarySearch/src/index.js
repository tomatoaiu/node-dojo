import binary from '../src/binary'

binary.run([
  {
    array: [1, 4, 4, 5, 5, 5, 6, 7, 10, 12, 100, 500, 1000],
    target: 500
  },
  {
    array: [1, 4, 4, 5, 5, 5, 6, 7, 10, 12, 100, 500, 1000],
    target: 500
  },
  {
    array: [],
    target: 1
  }
])