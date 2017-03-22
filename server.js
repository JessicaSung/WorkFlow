// DEPENDENCIES
// ===============================================
const bodyParser = require('body-parser');
const express = require('express');
const logger = require('morgan');

// local config modules
const db = require('./config/connection.js');

// routing modules
const api = require('./routes/api.js');

// Express port declaration
const PORT = process.env.PORT || 3000;
const app = express();


// MIDDLEWARE
// ===============================================
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));


// ROUTES
// ===============================================
app.use('/api', api);


// Connection to PORT
// ===============================================
app.listen(PORT, () => {
	console.log('Listening on port: ', PORT);
});