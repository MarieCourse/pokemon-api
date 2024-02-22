const body = document.body;
const main = document.createElement('main');
body.appendChild(main);
const content = document.createElement('div');
content.setAttribute('id', 'content');
main.appendChild(content);

function getPokemon(id) {
  fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      content.innerHTML += `<div class="pokemonBox">
                    <img src=${data.sprites.other['official-artwork'].front_default} alt=${data.name} />
                    <div class="pokemonInfo">
                    <h1>${data.name}</h1>
                    <p>Weigth: ${data.weight}</p>
                    <p>Height: ${data.height}</p>
                    <p>Type: ${data.types[0].type.name}</p>
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
