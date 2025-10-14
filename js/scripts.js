let pokemonList = [{name:"Nidoqueen" , height:1.3 , type:["ground", "poison"]},
                  {name:"Bulbasaur" , height:0.7 , type:["grass", "poison"]},
                  {name:"Jigglypuff" , height:0.5 , type:["fairy", "normal"]}];


pokemonList.forEach(function(pokemon) {
    document.write("<p>" + pokemon.name + " has a height of " + pokemon.height + " an is a " + pokemon.type + " type </p>");
});