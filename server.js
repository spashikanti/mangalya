const express = require('express');
const userRouterApi = require('./app/routes/userRoute');
const bodyParser = require('body-parser');

const app = express();

app.use(express.json());

// parse various different custom JSON types as JSON
app.use(bodyParser.json({ type: 'application/*+json' }))

// parse some custom thing into a Buffer
app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }))

// parse an HTML body into a string
app.use(bodyParser.text({ type: 'text/html' }))

app.use('/api/users', userRouterApi);

// app.get('/api/customers', (req, res) => {
//   const customers = [
//     {id: 1, firstName: 'John', lastName: 'Doe'},
//     {id: 2, firstName: 'Brad', lastName: 'Traversy'},
//     {id: 3, firstName: 'Mary', lastName: 'Swanson'},
//   ];

//   res.json(customers);
// });


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => `Server running on port ${PORT}`);

//http://localhost:5000/api/users/harika427@gmail.com/welcome@12345

//http://localhost:5000/api/users/sunil.pashikanti@gmail.com/welcome@12345