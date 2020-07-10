const mongoose = require("mongoose");

const connect = () => new Promise((resolve, reject) => {
    mongoose.connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    }, (error, db) => {
        if(error) return reject(error);
        return resolve(true);
    })
});

const close = () => {
    mongoose.connection.close()
    return;
}

module.exports = {
    connect,
    close
};