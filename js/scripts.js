let pokemonRepository = (function() { //IIFE
    let pokemonList = [{name:"Nidoqueen" , height:1.3 , type:["ground", "poison"]},
                       {name:"Bulbasaur" , height:0.7 , type:["grass", "poison"]},
                       {name:"Jigglypuff" , height:0.5 , type:["fairy", "normal"]}];

return {

    // returns all objects
    getAll: function() {
        return pokemonList;
    },

    // adds an item at the end of the array
        add: function(item) {
            pokemonList.push(item);
        }
    };
})();

console.log(pokemonRepository.getAll()); //prints the whole array in the console WITHOUT the added item?
pokemonRepository.add({name: "Rattata", height: 0.3, type: "normal"}); // specifying which item is gonna be added
console.log(pokemonRepository.getAll()); //prints the whole array in the console WITH the added item

//accessing pokemonList with the getAll() function because its hidden inside the pokemonRepository
pokemonRepository.getAll().forEach(function(pokemon) {
    document.write("<p>" + pokemon.name + " has a height of " + pokemon.height + " and is a " + pokemon.type + " type </p>");
});