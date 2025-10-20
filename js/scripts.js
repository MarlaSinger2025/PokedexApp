let pokemonRepository = (function() { //IIFE
    let pokemonList = [];
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=50';

  function add(item) {
        const requiredKeys = ['name'] //defining required keys. Adding "detailsUrl" as key later
        if (
    // only if content is an object and contains requierd key(s) it can be added to the List
      typeof item === 'object' && requiredKeys.every(key => key in item) //using arrow function
        ) {
          pokemonList.push(item); // adds the item at the end of the array
      } else {
        alert("The data you are trying to add is false or incomplete" );
      }
    } 

  function getAll() {
    return pokemonList;
  }
   
    function addListItem(pokemon){
      let listPokemon = document.querySelector('.pokemon-list');
      let listItem = document.createElement('li');
      let button = document.createElement('button');
      button.innerText = pokemon.name;
      button.classList.add('pokemon-button');
      listItem.appendChild(button);
      listPokemon.appendChild(listItem);
      // Everytime one of the pokemons gets clicked it will call the function
      button.addEventListener('click', function(event){showDetails(pokemon);
      });
    }
    // Logs every pokemon that gets clicked in the function
   // function showDetails(pokemon){
     // console.log(pokemon); }

  // Fetches data from the pokemonAPI, adds each pokemon to the pokemonList
  function loadList(){
    return fetch(apiUrl).then(function (response){
      return response.json();
    }).then(function (json) {
      json.results.forEach(function (listItem){
        let pokemon = {
          name: listItem.name,
          detailsUrl: listItem.url
        };
        add(pokemon);
        console.log(pokemon);
      });
    }).catch(function (e){
      console.error(e);
    })
  }

  function loadDetails(item){
    let url = item.detailsUrl;
    return fetch(url).then(function (response){
      return response.json();
    }).then(function (details){
      // Now the details get added to the items
      item.imageUrl = details.sprites.front_default;
      item.height = details.height;
      item.types = details.types;
    }).catch(function (e){
      console.error(e);
    });
  }

  function showDetails(item){
    pokemonRepository.loadDetails(item).then(function() {
      console.log(item);
    });
  }

return {

    getAll : getAll,
    addListItem: addListItem,
    loadList : loadList,
    loadDetails : loadDetails,
    showDetails : showDetails,
  };
})();

//accessing pokemonList with the getAll() function because its hidden inside the pokemonRepository
pokemonRepository.loadList().then(function() {
  pokemonRepository.getAll().forEach(function(pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});

//pokemonRepository.add({name: "Rattata", height: 0.3, type: "normal"}); 
//console.log(pokemonRepository.getAll()); //prints the whole array in the console 
//not sure if i need those lines anymore?