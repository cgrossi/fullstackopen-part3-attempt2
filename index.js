const express = require('express');
const app = express();

const persons = [
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

app.get('/api/persons', (req, res) => {
  res.json(persons);
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