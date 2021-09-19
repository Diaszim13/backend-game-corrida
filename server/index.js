const express = require('express');
const db = require('./db/config')
const bodyParser = require('body-parser');
const app = express();


app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  })
  app.use(bodyParser.json());
  require('./controllers/user.controller')(app);
  require('./controllers/categorias.controller')(app);
  require('./controllers/perguntas.controller')(app);
  // require('./controllers/')
  try {
      db.authenticate();
    console.log('Conectou');
    }
  catch(err) {
     console.log('deu ero')
  }
const PORT = 8000;

app.listen(PORT, (req,res) => {console.log('foi')});

