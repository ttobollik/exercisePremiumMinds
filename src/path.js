/*
    class providing the functionality to move around a two-dimensional grid and storing visited cells
    visited cells are stored in an object (visited) with the x-values as keys and the corresponding y values in an array
*/

const Position = require("./position")

class Path {
    constructor(){
        this.position = new Position()
        this.pokemonCaught = 1
        this.visited = {'0':[0]}
    }
}