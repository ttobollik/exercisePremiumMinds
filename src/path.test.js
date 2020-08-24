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
}) 

test('visit', () => {
  const path = new Path()
  path.move('')
  path.visit()
  expect(path.pokemonCaught).toBe(1)
  path.move('S')
  path.visit()
  expect(path.pokemonCaught).toBe(2)
  path.move('E')
  path.visit()
  expect(path.pokemonCaught).toBe(3)
}) 


test('move along path - long path', () => {
  const path = new Path()
  path.moveAlongPath("NNNNNNNOOOOSSSEEEEEESSSOOOONNN")
  expect(path.pokemonCaught).toBe(28)
})


test('move along path - empty path', () => {
  const path = new Path()
  path.moveAlongPath("")
  expect(path.pokemonCaught).toBe(1)
})


test('move along path - custom path one direction', () => {
  const path = new Path()
  path.moveAlongPath("NNNNNNN")
  expect(path.pokemonCaught).toBe(8)
})


test('move along path - custom path binary', () => {
  const path = new Path()
  path.moveAlongPath("EOEOEOEOEOEOEOEOE")
  expect(path.pokemonCaught).toBe(2)
})

test('move along path - custom path crossings', () => {
  const path = new Path()
  path.moveAlongPath("SONOSENES")
  expect(path.pokemonCaught).toBe(6)
})

test('move along path - custom path nonsense', () => {
  const path = new Path()
  path.moveAlongPath("NONSENSE")
  expect(path.pokemonCaught).toBe(6)
})

