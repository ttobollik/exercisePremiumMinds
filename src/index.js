const Path = require("./path")
const InputReader = require("./inputReader")

inputReader = new InputReader()

let ashPath = new Path()

ashPath.moveAlongPath(inputReader.readFromCommandLine())
console.log(ashPath.pokemonCaught)

