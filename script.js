const body = document.body;
const main = document.createElement('main');
body.appendChild(main);

//Creation de la search Box
const searchBox = document.createElement('div');
const searchBoxInput = document.createElement('input');
searchBoxInput.setAttribute('type', 'text');
searchBoxInput.setAttribute('placeholder', 'Pokemon Name');
searchBoxInput.classList.add('pokemonName');
const searchBoxBtn = document.createElement('button');
searchBoxBtn.innerText = '🔍';
searchBoxBtn.setAttribute('id', 'search');
main.appendChild(searchBox);
searchBox.appendChild(searchBoxInput);
searchBox.appendChild(searchBoxBtn);

//Creation du conteneur de pokemons
const content = document.createElement('div');
content.setAttribute('id', 'content');
main.appendChild(content);

function getPokemon(id) {
  fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      let types = data.types
        .map(
          (type) => `<p class="type ${type.type.name}">${type.type.name}</p>`
        )
        .join('');

      const name = data.name;
      const nameUpperCase = name[0].toUpperCase() + name.slice(1);

      content.innerHTML += `<div class="pokemonBox">
                    <img src=${data.sprites.other['official-artwork'].front_default} alt=${data.name} />
                    <div class="pokemonInfo">
                    <h1>${nameUpperCase}</h1>
                    <p>Weight: ${data.weight}</p>
                    <p>Height: ${data.height}</p>
                    ${types}
                    </div>`;
    })
    .catch((err) => console.log('imposible de contacter le serveur', err));
}

function getAllPokemons() {
  for (let id = 1; id < 20; id++) {
    getPokemon(id);
  }
}

getAllPokemons();
