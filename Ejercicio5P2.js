const api="https://pokeapi.co/api/v2/pokemon/3/";
const contenedor = document.getElementById("contenedor");

//fetch hace consulta a una url mediante de los verbos de http
async function consultarPokemon()
{
    let consulta = await fetch(api);
    let datos = await consulta.json();
    dibujarPokemon(datos);
}

function dibujarPokemon(datosPokemon)
{
    let rutaImagen = datosPokemon.sprites.other.home.front_default;
    let pokemon = ` <h1> ${datosPokemon.name} <h1/>
                    <img src="${rutaImagen}"/>
                    <h1>${datosPokemon.types[0].type.name}`;

    contenedor.innerHTML = pokemon;
}

consultarPokemon();