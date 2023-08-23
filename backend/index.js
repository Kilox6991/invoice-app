const express = require('express')
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

require('./src/startup/db')()
require('./src/startup/routes')(app)

const PORT = 3000;

app.listen(PORT, () => console.log(`Server ON ${PORT}`));