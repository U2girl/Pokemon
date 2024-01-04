const React =require("react");

 const ShowPokemon=({pokemonName,pokemonNumber})=>{
    return(
     <div>
        <h1>Gotta Catch 'Em All </h1>
        <h2>{`${pokemonNumber}. ${pokemonName}`}</h2>
        <img src={`http://img.pokemondb.net/artwork/${pokemonName}.jpg` }alt="" />
        <button><a href="/pokemonroute">Back </a></button>
     </div>
        
       
    )
 }


module.exports=ShowPokemon