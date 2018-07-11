const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const db = require('./db');

app.set('view engine', 'ejs');

const urlencodedParser = bodyParser.urlencoded({ extended: false })

app.get('/', (req, res) => {
  res.render('index', {db});
})

app.post('/', urlencodedParser, (req, res) => {
  db.push({title: req.body.title});
  res.render('index', {db});
})

app.listen(3000, () => {console.log('Server started on port 3000')});