const mongoose = require('mongoose');
const bluebird = require('bluebird');

const databaseuri = 'mongodb://localhost/WorkFlowDB';
const db = mongoose.connection;

mongoose.Promise = bluebird;

// if available, connects to Heroku; otherwise, connects to local DB
if (process.env.MONGODB_URI) {
	console.log('Connected to ', process.env.MONGODB_URI)
	mongoose.connect(process.env.MONGODB_URI);
} else {
	console.log('Connected to ', databaseuri)
	mongoose.connect(databaseuri);
}

db.on('error', function(error) {
	console.log('Mongoose error: ' , error);
});

db.once('open', function() {
	console.log('Mongoose connection successful.');
});


module.exports = db;