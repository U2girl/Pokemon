const mongoose= require('mongoose');
 const Schema= new mongoose.Schema({

    name:{
        type:String,
        required:true
    }
 })
 const pokemonSchema=mongoose.model("pokemons",Schema);
 module.exports=pokemonSchema
