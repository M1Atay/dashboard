console.log("JS loaded");

const allPokemon = document.querySelector(".all-pokemon");
const pokemonData = document.querySelector(".pokemon-data");
const chart = document.querySelector(".chart");

let pokemonChart;

fetch("/dashboardakin/json/poke.json")
    .then(response => response.json())
    .then(json => showAllPokemon(json))

function showAllPokemon(json) {
    for (let i = 0; i < json.length; i++) {
        const pokemon = json[i];
        allPokemon.appendChild(createCard(pokemon))
    }
}

function fetchPokemonData(pokemon) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
        .then(response => response.json())
        .then(json => {
            console.log(json)
            showPokemonData(json, pokemon);
        })
}

function showPokemonData(json, pokemon) {
    if (pokemonChart) {
      pokemonChart.destroy();
    }
    pokemonChart = showPokemonChart(json, pokemon);
}

function showPokemonChart(json, pokemon) {
      return new Chart(chart, {
        type: 'bar',
        data: {
          datasets: 
          [{
            backgroundColor: 'Red',
            label: 'HP',
            data: json.stats[0],
            borderWidth: 1
          }, 
          {
            backgroundColor: 'Orange',
            label: 'Attack',
            data: json.stats[1],
            borderWidth: 1
          }, 
          {
            backgroundColor: 'Yellow',
            label: 'Defense',
            data: json.stats[2],
            borderWidth: 1
          }, 
          {
            backgroundColor: 'Blue',
            label: 'Special Attack',
            data: json.stats[3],
            borderWidth: 1
          }, 
          {
            backgroundColor: 'Green',
            label: 'Special Defense',
            data: json.stats[4],
            borderWidth: 1
          }, 
          {
            backgroundColor: 'Purple',
            label: 'Speed',
            data: json.stats[5],
            borderWidth: 1
          }]
        },
        options: {
          response: true,
          maintainAspectRatio: true,  
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
    });
}

function createCard(pokemon) {
    const col = document.createElement("div");

    col.classList.add("col-md-3");
    
    const card = document.createElement("div");

    card.classList.add("card");
    card.classList.add("bg-transparent")

    card.addEventListener("mouseover", function() {
        card.style.cursor = "pointer";
        card.classList.add("bg-success");
    })

    card.addEventListener("click", function() {
        pokemonData.innerHTML = 
        `<img src="${pokemon.img}" style="width: 20%; image-rendering: pixelated; position: fixed; top: 10%; left: 65%">`;
        fetchPokemonData(pokemon);
    })

    const img = document.createElement("img");

    img.classList.add("card-img-top");
    img.src = pokemon.img;

    const cardBody = document.createElement("div");

    cardBody.classList.add("card-body");

    const h4 = document.createElement("h4");

    h4.classList.add("card-title");
    h4.classList.add("text-white");
    h4.classList.add("text-center");

    h4.textContent = pokemon.name;

    h4.textContent = h4.textContent.charAt(0).toUpperCase() + h4.textContent.slice(1);

    const p = document.createElement("p");

    p.classList.add("card-text");

    col.appendChild(card)
    card.appendChild(img)
    card.appendChild(cardBody)
    cardBody.appendChild(h4)
    cardBody.appendChild(p)

    return col
}