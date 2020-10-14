const express = require('express');
const app = express();

app.use(express.json());

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

  if(!body) {
    return res.status(400).json({error: 'No content sent'});
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

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`The server is running on port ${PORT}`)
})