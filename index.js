const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const port = 4000;

app.get('/', (req, res) => {
	res.send('Welcome to our node projects. I am very excited! Are you exited');
});

const users = [
	{ id: 0, name: 'shabana', email: 'shabana@gmail.com' },
	{ id: 1, name: 'shabnoor', email: 'shabana@gmail.com' },
	{ id: 2, name: 'opu bisshas', email: 'shabana@gmail.com' },
	{ id: 3, name: 'nasrin', email: 'shabana@gmail.com' },
	{ id: 4, name: 'purnima', email: 'shabana@gmail.com' }
];

app.get('/users', (req, res) => {
	// usequery parameter
	const search = req.query.search;
	if (search) {
		const searchResult = users.filter((user) => user.name.toLowerCase().includes(search));
		res.send(searchResult);
	} else {
		res.send(users);
	}
	// console.log(req.query.search);
});

app.post('/users', (req, res) => {
	const newUser = req.body;
	newUser.id = users.length;
	users.push(newUser);
	console.log('hitting the post', req.body);
	// res.send('inside post');
	res.json(newUser);
});

app.get('/users/:id', (req, res) => {
	// dynamic api
	const id = req.params.id;
	const user = users[id];
	res.send(user);
	console.log(req.params.id);
});

app.get('/fruits/mango/fazli', (req, res) => {
	res.send('fazli is tok....');
});

app.listen(port, () => {
	console.log('listening to port', port);
});
