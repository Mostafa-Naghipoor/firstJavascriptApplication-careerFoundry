
let pokemonRepository =(function(){
    let pokemonList = [
        { name: 'Vanillite', 
        height: 0.4, 
        type: "ice" },

        { name: 'Klink', 
        height: 0.3, 
        type: "steel" },

        { name: 'Deino', 
        height: 0.8, 
        type: ["dark","dragon"] }
    ]

    function getAll() {
        return pokemonList;
    };

    function add(pokemon) { 
      if (typeof pokemon === 'object' && 'name' in pokemon){
        pokemonList.push(pokemon);
      }
    };

    function addListItem(pokemon) { 
      var pokemonList = document.querySelector("ul");
      var listItem = document.createElement('li');
      var button = document.createElement('button');
      button.innerText= pokemon.name;
      button.classList.add("btn"); 
      listItem.appendChild(button);
      pokemonList.appendChild(listItem);

    };


      return {
        add: add,
        getAll: getAll,
        addListItem: addListItem,
      }

})()

pokemonRepository.add({name:'Ponyta', height: 
1, type:"fire"});


pokemonRepository.getAll().forEach(function(pokemon){
  pokemonRepository.addListItem(pokemon);

})
