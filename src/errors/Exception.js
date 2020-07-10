

class InternalServerError {
    status = 500;
    message = "";
    constructor(message){
        this.message = message;
    }
}

class BadRequestError {
    status = 400;
    message = "";
    constructor(message){
        this.message = message;
    }
}

module.exports = {
    InternalServerError,
    BadRequestError
}