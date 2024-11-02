const express = require('express')
const hbs = require('hbs')
require('dotenv').config()

const app = express()
const port = process.env.PORT


app.set('view engine', 'hbs')
hbs.registerPartials(__dirname +'/views/partials')


app.use(express.static('public'))

app.get('/', (req,res) => {
  res.render('index',{
    nombre:'Merzi Caniz'
  
  })
})

app.get('/sobremi', (req, res) => {
  res.render('sobremi', {
    
  });
});

app.get('/HABILIDADES', (req, res) => {
  res.render('HABILIDADES', {
    
  });
});

app.get('/CURRICULUM', (req, res) => {
  res.render('CURRICULUM', {
    
  });
});

app.get('/PORTAFOLIO', (req, res) => {
  res.render('PORTAFOLIO', {
  
  });
});

app.get('/CONTACTO', (req, res) => {
  res.render('CONTACTO', {

  });
});

app.listen(port,() =>{
  console.log(`Example app listening at http://localhost:${port}`);
})