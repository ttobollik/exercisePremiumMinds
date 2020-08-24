const Position = require("./position")

test('position constructor', () => {
    const center = new Position()
    expect(center.x).toBe(0)
    expect(center.y).toBe(0)
  })