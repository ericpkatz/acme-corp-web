const express = require('express');
const app = express();
const path = require('path');
const ejs = require('ejs');

app.set('view engine', 'html');

app.engine('html', ejs.renderFile);

app.get('/', (req, res, next)=> {
  res.render('index', { BASE_URL: process.env.BASE_URL || 'http://localhost:3003'});
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=> console.log(`listening on por ${PORT}`));
