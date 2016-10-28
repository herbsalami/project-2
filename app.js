require('dotenv').config();

const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const path = require('path');
const homeRoute = require('./routes/index');
const cookieParser = require('cookie-parser');
const mixcloudRoute = require('./routes/mixcloud');
const callbackRoute = require('./routes/callback');

const app = express();
const port = process.argv[2] || process.env.PORT || 3000;

app.use(cookieParser());
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use('/', homeRoute);
app.use('/callback', callbackRoute);
app.use('/mixcloud', mixcloudRoute);
app.get('/main', (req, res) => {
  res.render('main');
});
app.listen(port, console.warn('The server is listening on ', port));
