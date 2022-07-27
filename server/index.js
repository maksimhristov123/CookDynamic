const express = require('express');

const {PORT} = require('./config/env');
const routes = require('./routes');
const {dbInit} = require('./config/db');

const app = express();

app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.use(routes)

dbInit();

app.listen(PORT, () => console.log(`Server listen on port ${PORT}...`));