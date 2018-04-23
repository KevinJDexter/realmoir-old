const express = require('express');
const bodyParser = require('body-parser');

const PORT = 8000;
const app = express();

const Character = require('./modules/characters');
const Library = require('./modules/library');
const myLibrary = new Library();


app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({extended:true}))

app.listen(PORT, function() {
  console.log('running...');
})

app.get('/characters', (req, res) => {
  res.send(myLibrary.characters);
})

app.post('/post_char', (req, res) => {
  console.log(req.body);
  let charInfo = req.body;
  let newChar = new Character (charInfo.name, charInfo.birth, charInfo.death, charInfo.age, charInfo.home);
  myLibrary.saveElement(newChar);
  res.sendStatus(200);
})
