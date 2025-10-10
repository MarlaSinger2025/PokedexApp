let pokemonList = [{name:"Nidoqueen" , height:1.3 , type:["ground", "poison"]},
                  {name:"Bulbasaur" , height:0.7 , type:["grass", "poison"]},
                  {name:"Jigglypuff" , height:0.5 , type:["fairy", "normal"]}];

for (let i = 0; i <pokemonList.length; i++)
    {
    if (pokemonList[i].height > 1) 
        {
    document.write("<p>" + pokemonList[i].name + " (height:" + pokemonList[i].height + ") - Wow, thats BIG!</p>");
} else {
    document.write("<p>" + pokemonList[i].name + " (height:" + pokemonList[i].height + ") </p>");
}
    }