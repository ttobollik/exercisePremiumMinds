const readline = require("readline")
const Validator = require("./validator")

class InputReader {
    constructor(){
        this.input = ''
    }

    async readFromProvidedSource() {
        if (process.argv.length > 2) {
            return(this.readFromCommandLine())
        } else {
            return this.readFromConsole()
        }
    }

    async readFromConsole() {
        const promise = new Promise((resolve, reject) => {
            const rl = readline.createInterface({
                input: process.stdin,
                output: process.stdout
              })
              rl.question("Please enter Ashs Path (allowed letters 'N', 'E', 'S', 'O, '') and press enter: ", (answer) => {
                this.input = answer
                const validator =  new Validator()
                if (validator.validatePath(answer)) {
                    rl.close()
                    resolve(answer)
                } else {
                    reject()
                }
            })
        })
        
        return promise
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