const express = require('express');
const {dbInit} = require('./config/db');

const app = express();

app.use(express.json());

const start = () => {
    try{
        dbInit();
        app.listen(3000, () => console.log('App listen on port 3000...'))
    }catch(error){
        console.error(error);
        process.exit(1)
    }
}

start();