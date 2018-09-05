const config = require('./config.js');
const path = require('path');
const bcrypt = require('bcrypt');
const saltRounds = config.bcrypt.saltRounds;
const {Pool} = require('pg');
const pool = new Pool(config.db);
const express = require('express');
const app = express();

app.use(express.json());
app.use(express.static(__dirname + './../../'));

app.get('*', (req, res) => {
	res.sendFile(path.resolve('index.html'));
});

app.post('/api/login', (req, res) => {
	const username = req.body.username;
	const password = req.body.password;
	const query = 'INSERT into users(username, password) VALUES($1, $2)';
	pool.query('SELECT * from users WHERE username = $1', [username], (err, res) => {
		if(res.rowCount === 0) {
			bcrypt.hash(password, saltRounds)
			.then(hash => {
				pool.query(query, [username, hash], (err, res) => {
					if(err) {
						console.log(err);
					} else {
						
					}
				});
			}, (err) => {
				console.log(err);
			});
		} else {
			console.log('user already exists');
		}
	});
});

app.listen(3000);