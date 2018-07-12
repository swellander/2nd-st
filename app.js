const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const uuid = require('uuid');
const db = require('./db');
const mongoose = require('mongoose');

// connect to db
mongoose.connect('mongodb://localhost/movie-night');

// check to see if connection was successfull
mongoose.connection.on('connected', () => {
  console.log('connected to db');
});

// create movie schema for db
const movieSchema = new mongoose.Schema({
  votes: Number,
  plot: String,
  poster: String,
  rating: String,
  score: String,
  title: String,
  trailer: String
});

const Movies = mongoose.model('Movies', movieSchema);
const lebowski = Movies({
  votes: 0,
  plot: 'Jeff Bridges doin his thang again! Unstoppable, that man',
  poster: 'poster.jpg',
  rating: 'R',
  score: '9.6',
  title: 'The Big Lebowski 2!',
  trailer: 'youtube.com/trailer'
}).save(err => {
  if (err) console.log(err);
  console.log('item saved');
});

app.set('view engine', 'ejs');
app.use(express.static('public'));

const urlencodedParser = bodyParser.urlencoded({ extended: false })

app.get('/', (req, res) => {
  res.render('index', {db});
})

app.get('/api/movies', (req, res) => {
  // res.setHeader('Content-Type', 'application/json');
  // res.send(JSON.stringify(db));
})

app.post('/movies', urlencodedParser, (req, res) => {
  // const newMovie = {title: req.body.title, id: uuid()}
  // db.push(newMovie);
  // res.json(db);
});

app.delete('/movies/:id', urlencodedParser, (req, res) => {
  // const id = req.params.id;
  //remove movie from db
})

app.listen(3000, () => {console.log('Server started on port 3000')});


