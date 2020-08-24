const Path = require("./path")


test('path constructor', () => {
    const path = new Path()
    expect(path.position.x).toBe(0)
    expect(path.position.y).toBe(0)
    expect(path.pokemonCaught).toBe(1)
    expect(path.visited['0'][0]).toBe(0)
  })


test('move', () => {
  const path = new Path()
  path.move('N')
  expect(path.position.x).toBe(0)
  expect(path.position.y).toBe(1)
  path.move('S')
  expect(path.position.x).toBe(0)
  expect(path.position.y).toBe(0)
  path.move('O')
  path.move('S')
  expect(path.position.x).toBe(-1)
  expect(path.position.y).toBe(-1)
  path.move('E')
  expect(path.position.x).toBe(0)
  expect(path.position.y).toBe(-1)
  expect(() => {
      path.move('M')
  }).toThrow()
}) 
