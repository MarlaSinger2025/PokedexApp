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

   function showModal(title, text, img) {
    let pokedexContainer = document.querySelector('#pokedex-container');
    pokedexContainer.innerHTML = '';
    
    let pokedex = document.createElement('div');
    pokedex.classList.add('pokedex');
    
    let closeButtonElement = document.createElement('button');
    closeButtonElement.classList.add('pokedex-close');
    closeButtonElement.innerText = 'X';
  closeButtonElement.addEventListener('click', hideModal);

    let titleElement = document.createElement('h1');
    titleElement.innerText = title;
    
    let textElement = document.createElement('p');
    textElement.innerText = text;

   let imageElement = document.createElement('img');
    imageElement.src = img;

  //  let typeElement = document.createElement('p');
  //  typeElement.innerText = text;
  

    pokedex.appendChild(closeButtonElement);
    pokedex.appendChild(titleElement);
    pokedex.appendChild(textElement);
    pokedex.appendChild(imageElement);
    // pokedex.appendChild(typeElement);
    pokedexContainer.appendChild(pokedex);
    
    pokedexContainer.classList.add('is-visible');
    
    pokedexContainer.addEventListener('click', (e) => {
      let target = e.target;
      if (target === pokedexContainer ) {
        hideModal();
      }
    });
  }
  
  function hideModal(){
    let pokedexContainer = document.querySelector('#pokedex-container');
    pokedexContainer.classList.remove('is-visible');
  }
  
  window.addEventListener('keydown', (e) => {
    let pokedexContainer = document.querySelector('#pokedex-container');
    if (e.key === 'Escape' && pokedexContainer.classList.contains('is-visible')){
      hideModal();
    }
  });
  
  function showDetails(pokemon){
    document.querySelector('.pokemon-list').addEventListener('click', () => {
      loadDetails(pokemon).then(function(){
        showModal(pokemon.name, pokemon.height, pokemon.imageUrl); //,pokemon.types just shows as 'object', why?
      })
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