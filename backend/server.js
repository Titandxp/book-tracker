const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.json());

const BOOKS = [
  'To Kill a Mockingbird',
  '1984',
  'The Great Gatsby',
  'Moby Dick',
  'War and Peace',
  'Pride and Prejudice',
  'The Catcher in the Rye',
  'Brave New World',
  'Jane Eyre',
  'The Lord of the Rings'
];

app.get('/books', (req, res) => {
  res.json(BOOKS);
});

app.post('/submit', (req, res) => {
  console.log('Submitted books:', req.body.selectedBooks);
  res.status(200).send('Books received');
});

app.listen(3001, () => console.log('Server running at http://localhost:3001'));
