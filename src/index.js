const Path = require("./path")
const InputReader = require("./inputReader")


//creating new inputReader and path
inputReader = new InputReader()

let ashPath = new Path()

//receiving user input, moving along path and providing output (number of caught pokemon)
inputReader.readFromProvidedSource().then((input) => {
    ashPath.moveAlongPath(input)
    console.log(ashPath.pokemonCaught)
})