const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');

app.use(cors());
app.use(express.json());

morgan.token('data', (req, res) => {
  if(req.method === "POST") return JSON.stringify(req.body)
})
  
app.use(morgan((tokens, req, res) => {
  return [
    tokens.method(req, res),
    tokens.url(req, res),
    tokens.status(req, res),
    tokens.res(req, res, 'content-length'), '-',
    tokens['response-time'](req, res), 'ms',
    tokens.data(req, res)
  ].join(' ')
}));

let persons = [
  {
    "name": "Carmine",
    "number": "403-901-7458",
    "id": 8
  },
  {
    "name": "Jill",
    "number": "934-3677",
    "id": 9
  },
  {
    "name": "Traci",
    "number": "34634664346346",
    "id": 10
  },
  {
    "name": "Jane",
    "number": "4039876543",
    "id": 11
  }
]

const generateId = () => Math.floor(Math.random() * 100000);

app.get('/api/persons', (req, res) => {
  res.json(persons);
})

// Get a single person's number
app.get('/api/persons/:id', (req, res) => {
  const id = Number(req.params.id);
  const person = persons.find(person => person.id === id);
  if(person) {
    res.json(person);
  } else {
    res.status(404).end();
  }
})

// Add a person to the phonebook
app.post('/api/persons', (req, res) => {
  let body = req.body;

  if(!body.name || !body.number) {
    return res.status(400).json({
      error: `You must include a ${!body.name ? 'name' : 'number'} for a valid entry`
    });
  }

  if(persons.some(person => person.name.toLowerCase() === body.name.toLowerCase())) {
    return res.status(400).json({
      error: 'That person already exists in the phonebook!'
    })
  }

  let person = {
    name: body.name,
    number: body.number,
    id: generateId()
  }

  persons = persons.concat(person);
  res.json(person);
})

// Delete a person from the phonebook
app.delete('/api/persons/:id', (req, res) => {
  const id = Number(req.params.id);
  const person = persons.find(person => person.id === id);
  if(person) {
    persons = persons.filter(person => person.id !== id);
    res.status(204).end();
  } else {
    res.status(404).end();
  }
})

app.get('/info', (req, res) => {
  let date = new Date().toString();
  console.log(date.toString())
  res.send(`<p>Phonebook has info for ${persons.length} people.</p><p>${date}</p>`);
})

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`The server is running on port ${PORT}`)
})