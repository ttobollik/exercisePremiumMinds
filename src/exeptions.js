class InvalidPathException extends Error {
    constructor(message) {
        super(message); 
        this.name = "InvalidPathException"; 
      }
}

module.exports = InvalidPathException