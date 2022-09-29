
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
      }

      function add(pokemon) { 
        if (typeof pokemon === 'object' && 'name' in pokemon){
        pokemonList.push(pokemon);
      }
    }

      return {
        add: add,
        getAll: getAll
      }

})()

pokemonRepository.add({name:'Ponyta', height: 
1, type:"fire"});


pokemonRepository.getAll().forEach(function(pokemon){

    if(pokemon.height >= 1) {
        document.write(pokemon.name + " (height: " + pokemon.height + " m) - Wow, that is big!" + "<br>")
    }
    else if (pokemon.height >= 0.8 && pokemon.height < 1){
        document.write(pokemon.name + " (height: " + pokemon.height + " m) - That is a medium pokemon!" + "<br>")
    }
    else {
        document.write(pokemon.name + " (height: " + pokemon.height + " m)- That is a small pokemon!" + "<br>")
    }  
})
