const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

// Variables
const PORT = 3008;
const DB_QUERY = 'mongodb://localhost:27017/cook-fresh';

const corsOptions = {
    origin: "http://localhost:3000"
};

// Api config
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cors(corsOptions));

app.use(express.json());

const start = async () => {
    try {
        require('./routes/router')(app);

        await mongoose.connect(DB_QUERY);

        app.listen(PORT, () => console.log(`Server listen on port ${PORT}...`));

    } catch (error) {
        console.error(error);
        process.exit(1);
    }
}

start();