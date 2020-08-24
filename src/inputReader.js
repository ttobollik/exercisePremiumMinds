const readline = require("readline")

class InputReader {
    constructor(){
        this.input = ''
    }


    readFromCommandLine() {
        this.input = process.argv[2]
        return this.input
    }


    returnInput() {
        return this.input
    }
}


module.exports = InputReader