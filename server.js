const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const connectDB= require('./mongo/connect.jsx')



app.use(morgan('tiny'));

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
app.use(express.json());
const pokemonData= require("./models/pokemon.js");
const pokemonSchema=require("./models/PokemonSchema.js");
connectDB();
// pokemon route
app.get('/pokemonroute', (req, res) => {
  pokemonSchema.find().then((data)=>{
    res.render('index',{p:data});
  }).catch((err)=>{
    console.log(err);
  })
    
  });
    app.get ('/pokemon/:pname/:id',(req,res)=>{
        id=req.params.id;
        pname=req.params.pname;
    res.render('show',{pokemonNumber:id,pokemonName:pname})
        
    })
    app.get('/createpokemon', (req, res) => {
        res.render('new');
      })
      app.post('/pokemon/new', async (req, res) => {
        if(!req.body){
          res.send("You cannot send an empty message. Please fill out your form.")
        }
        try {
          const{name}=req.body;
          const newPokemon=new pokemonSchema({name});
          const value=await newPokemon.save();
               res.redirect('index');
        } catch (error) {
          
        }
        
      });



      app.get('/pokemonDelete/:pname', async (req, res) => {
        try {
          pname=req.params.pname;
          const pokemon=await pokemonSchema.findOneAndDelete({name:pname});
          res.redirect('index');
        } catch (error) {
          console.log(error);
        }
      })
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
