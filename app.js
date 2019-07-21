const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const status = require('./routes/status');
const peopleRoutes = require('./routes/people');
const uiRoutes = require('./routes/ui');
require('./drivers/mongo-connection');
const app = express();
app.use(bodyParser.json());

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(express.static(path.join(__dirname, 'public')));

//MiddleWare
//Convert Body String into a body Json

app.use((req, res, next) => {
  console.log(`Petición de tipo ${req.method}`);
  next();
});

app.use('/', uiRoutes);
app.use('/api', status);
app.use('/api/people', peopleRoutes);

module.exports = app;
