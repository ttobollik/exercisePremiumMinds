const InvalidPathException = require("./exeptions")

class Validator {

    constructor(){
        this.result = true
    }

    validatePath(path) {
        for (var i = 0; i < path.length; i++) {
            const next = path.charAt(i)
            switch(next) {
                case 'N':
                    break
                case 'S':
                    break
                case 'E':
                    break
                case 'O':
                    break
                default:
                    throw new InvalidPathException(direction + " is an invalid path")
            }
        }
        return true 
    }
}

module.exports = Validator