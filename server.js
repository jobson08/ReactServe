const express = require("express");
const morgan = require('morgan');
const mongoose =require('mongoose');
const bodyParser = require('body-parser');

const postes = require('./routes/api/postes');

const app = express();

//Middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());

//DB config
const db = require('./config/keys').mongoURI;

mongoose
  .connect(db, {useNewUrlParser: true})
  .then(() => console.log('MongoDB conectado...'))
  .catch(err => console.log(err)); 

//Routes
app.use('/api/postes', postes);

//Sentings
const port = process.env.PORT || 5000;

//starta o sevidor
app.listen(port, ( ()=> console.log(`Sevidor na porta ${port}`)));




