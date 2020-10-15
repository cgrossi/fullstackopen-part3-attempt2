require('dotenv').config();
const express = require('express');
const app = express();

const Person = require('./models/person');

const cors = require('cors');
const morgan = require('morgan');

app.use(express.static('build'));

app.use(cors());
app.use(express.json());

morgan.token('data', (req, res) => {
  if(req.method === "POST") return JSON.stringify(req.body)
})

// Use morgan as request logger
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

// Get the full list of contacts in phonebook
app.get('/api/persons', (req, res) => {
  Person.find({}).then(persons => {
    res.json(persons);
  })
})

// Get a single person's number
app.get('/api/persons/:id', (req, res, next) => {
  Person.findById(req.params.id)
    .then(result => {
      res.json(result)
    })
    .catch(e => next(e))
})

// Add a person to the phonebook
app.post('/api/persons', (req, res, next) => {
  let body = req.body;
  
  const person = new Person({
    name: body.name,
    number: body.number
  })

  person.save()
    .then(returnedPerson => {
      res.json(returnedPerson);
    })
    .catch(e => next(e))
})

// Delete a person from the phonebook
app.delete('/api/persons/:id', (req, res, next) => {
  Person.findByIdAndRemove(req.params.id)
    .then(result => {
      res.status(204).end();
    })
    .catch(e => next(e))
})

// Update existing contacts number
app.put('/api/persons/:id', (req, res, next) => {
  const body = req.body
  const person = {
    name: body.name,
    number: body.number
  }

  Person.findByIdAndUpdate(req.params.id, person, {new: true})
    .then(updatedPerson => {
      res.json(updatedPerson);
    })
    .catch(e => next(e))
})

app.get('/info', (req, res) => {
  Person.find({}).then(result => {
    let date = new Date().toString();
    const numEntries = result.length
    res.send(`<p>Phonebook has info for ${numEntries} people.</p><p>${date}</p>`);
  })
})

const errorHandler = (error, req, res, next) => {
  console.log(error.message)

  if(error.name === "CastError") {
    return res.status(400).send({ error: 'Malformatted id'})
  } else if (error.name === "ValidationError") {
    return res.status(400).json({
      error: error.message
    })
  }

  next(error)
}

app.use(errorHandler)

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`The server is running on port ${PORT}`)
})