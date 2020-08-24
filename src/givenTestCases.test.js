const Path = require("./path")

test('move along path - provided test case 1', () => {
    const path = new Path()
    path.moveAlongPath("E")
    expect(path.pokemonCaught).toBe(2)
})


test('move along path - provided test case 2', () => {
    const path = new Path()
    path.moveAlongPath("NESO")
    expect(path.pokemonCaught).toBe(4)
})


test('move along path - provided test case 3', () => {
    const path = new Path()
    path.moveAlongPath("NSNSNSNSNSNSNS")
    expect(path.pokemonCaught).toBe(2)
})