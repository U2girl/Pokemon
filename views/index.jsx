const React= require("react")

const myIndex=({p})=>{
 return (
    <div>
 <h1>Pokemon index</h1>
 
 <h1>My Pokemons!</h1>

{ p.map((pokemon,index)=>(
 <ul>
<li key={index}>
<a href={`/pokemon/${pokemon.name}/${index}`}>
{pokemon.name}
</a>
</li>
</ul>  
))}
   <button><a href="/createpokemon">Create Pokemon</a></button>

</div>

 
 )};
module.exports=myIndex
