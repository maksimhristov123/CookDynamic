const mongoose = require('mongoose');

exports.dbInit = () => {
    mongoose.connection.on('open', () => console.log('DB is connected...'));

    return mongoose.connect('mongodb://localhost:27017/cookDynamic')
}