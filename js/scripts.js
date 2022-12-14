let pokemonRepository = (function () {
	let pokemonList = [];
	let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150'




	function getAll() {
		return pokemonList;
	}

	function add(pokemon) {
		if (typeof pokemon === 'object') {
			pokemonList.push(pokemon);
		}
	}
	function addListItem(pokemon) {
		let pokemonList = document.querySelector(".pokemon-list");
		let listpokemon = document.createElement("li");
		let button = document.createElement('button');
		button.innerText = pokemon.name;
		button.classList.add("btn");
		listpokemon.appendChild(button);
		pokemonList.appendChild(listpokemon);
		button.addEventListener("click", function (event) {
			showDetails(pokemon);
		});
	}
	function loadList() {
		return fetch(apiUrl).then(function (response) {
			return response.json();
		}).then(function (json) {
			json.results.forEach(function (item) {
				let pokemon = {
					name: item.name,
					detailsUrl: item.url
				}
				add(pokemon);
				console.log(pokemon);
			});
		}).catch(function (e) {
			console.error(e);
		})
	}
	function loadDetails(item) {
		let url = item.detailsUrl;
		return fetch(url).then(function (response) {
			return response.json();
		}).then(function (details) {
			item.imageUrl = details.sprites.front_default;
			item.height = details.height;
			item.types = details.types;
		}).catch(function (e) {
			console.error(e);
		});
	}
	function showDetails(item) {
		pokemonRepository.loadDetails(item).then(function () {
			console.log(item);
		});
	}


	return {
		addListItem: addListItem,
		getAll: getAll,
		loadList: loadList

	};

})();

pokemonRepository.loadList().then(function () {
	pokemonRepository.getAll().forEach(function (pokemon) {
		pokemonRepository.addListItem(pokemon);
	});
});
