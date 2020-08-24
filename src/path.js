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
    
    move(direction) {
        switch(direction) {
            case 'N':
                this.position.y += 1
                break
            case 'S':
                this.position.y -= 1
                break
            case 'E':
                this.position.x += 1
                break
            case 'O':
                this.position.x -= 1
                break
            case '':
                break
            default:
                throw new InvalidPathException(direction + " is an invalid path")
        }
    }

    visit() {
        const x = this.position.x
        const y = this.position.y
        const posX = this.visited[String(x)] //undefined if key doesn't exist in object
        if (posX) { //if posX is defined, a key with this x value already exists
            if (posX.indexOf(y) === -1) { //if the y value has not been visited the cell is univisted
                this.pokemonCaught += 1
                posX.push(y)
            }
        } else { //if posX is undefined, the cell cannot have been visited yet so it needs to be added to the visited object
            this.pokemonCaught += 1
            this.visited[String(this.position.x)] = [this.position.y]
        }
    }

    moveAlongPath(path) {
        for (var i = 0; i < path.length; i++) {
            const next = path.charAt(i)
            this.move(next);
            this.visit()
          }
        return 1
    }


}

module.exports = Path