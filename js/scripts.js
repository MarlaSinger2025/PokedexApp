let pokemonList = [{name:"Nidoqueen" , height:1.3 , type:["ground", "poison"]},
                  {name:"Bulbasaur" , height:0.7 , type:["grass", "poison"]},
                  {name:"Jigglypuff" , height:0.5 , type:["fairy", "normal"]}];

for (let i = 0; i <pokemonList.length; i++)
    {
        //checks if the height of one of the pokemon in the pokemonList is higher than 1
    if (pokemonList[i].height > 1) 
        {
        //if so, it will write the following string in the browser
    document.write("<p>" + pokemonList[i].name + " (height:" + pokemonList[i].height + ") - Wow, thats BIG!</p>");
} else {
        //if not, it will write this string in the browser
    document.write("<p>" + pokemonList[i].name + " (height:" + pokemonList[i].height + ") </p>");
}
    }