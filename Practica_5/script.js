let pokemonId = 1;

async function cargarPokemon(id) { 
    const respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    
        const data = await respuesta.json();

        document.getElementById("nombrePokemon")
        .textContent = data.name;

        document.getElementById("imagenPokemon")
        .src = data.sprites.front_default;
    } 
    cargarPokemon(pokemonId);

    document.getElementById("btnCambiar")
    .addEventListener("click", () => {
        pokemonId ++;

        if (pokemonId > 1025 ){
            pokemonId = 1;

        }
        cargarPokemon (pokemonId); 

    });