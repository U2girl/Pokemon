const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');



app.use(morgan('tiny'));

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
app.use(express.json());
const pokemonData= require("./models/pokemon.js");
// pokemon route
app.get('/pokemonroute', (req, res) => {
    res.render('index',{p:pokemonData});
  });
    app.get ('/pokemon/:pname/:id',(req,res)=>{
        id=req.params.id;
        pname=req.params.pname;
    res.render('show',{pokemonNumber:id,pokemonName:pname})
        
    })
    app.get('/createpokemon', (req, res) => {
        res.render('new');
      })
      app.post('/pokemon/new', (req, res) => {
        const{name}=req.body;
        const newName= { name:name,img:`http://img.pokemondb.net/artwork/${name}`};
        pokemonData.push(newName);
        res.render('new');
      });
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
