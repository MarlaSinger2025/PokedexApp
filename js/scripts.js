let pokemonRepository = (function() { //IIFE
    let pokemonList = [{name:"Nidoqueen" , height:1.3 , type:["ground", "poison"]},
                       {name:"Bulbasaur" , height:0.7 , type:["grass", "poison"]},
                       {name:"Jigglypuff" , height:0.5 , type:["fairy", "normal"]}];

return {

    // returns all objects
    getAll: function() {
        return pokemonList;
    },

    add: function(item) {
        const requiredKeys = ['name', 'height', 'type'] //defining required keys
        if (
            typeof item === 'object' // only if content is an object it can be added to the List
        && requiredKeys.every(function(key) { //and only if it contains every key that is required
        return key in item; 
     // typeof item === 'object' && requiredKeys.every(key => key in item) //using arrow function instead
        }
        )) {
          pokemonList.push(item); // adds the item at the end of the array
      } else {
        alert("The data you are trying to add is false or incomplete: Needs to be 'name', 'height', 'type'" );
      }
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