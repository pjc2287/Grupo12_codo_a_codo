// se utiliza para cargar primero el documento html y despues la api
document.addEventListener('DOMContentLoaded', () => {
    getListaDeCard();

});

// contiene el contenido html de una card la transforme en componente para enviarle datos por parametros y replicarla un numero de veces e insertarlas en un contenedor
const cardBebida = (imagen, nombre, id) => {
    return `
    <section id="contenedor-imagenes">
        <a href="dataReceta.html?i=${id}">
            <img class="imagen"src=${imagen}>
        </a>
        <a href="dataReceta.html?i=${id}">
            <h3 class="descripcion">${nombre}</h3>
        </a>
    </section>
    `
}

// esta funcion me retorna un Array de 12 bebidas(premisa). le pego al endpoin(random) de la API 12 veces ya que solo te trae uno solo al azar
async function obtenerBebidasAleatorias() {
    const url = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';
    const response = await fetch(url);
    console.log(response);
    const data = await response.json();
    console.log(data);
    const drinks = data.drinks;
    console.log(drinks);
    const resultados = [];

    for (let i = 0; i < 12; i++) {
        const respuesta = await fetch(url);
        const datos = await respuesta.json();
        const drink = datos.drinks[0];
        resultados.push(drink);
    }

    return resultados;
}


// en esta funcion tomo el Array de la funcion anterior y completo con los datos de cada elemento la card cardBebida 12 veces y la inserto en un contenedor
async function getListaDeCard() {
    const contenedor = document.getElementById('conteiner-listCard');
    const loader = document.querySelector('.lds-ring');
    loader.style.display = 'inline-block';
    const listBebidas = await obtenerBebidasAleatorias();
    console.log(listBebidas);
    if (listBebidas.length >= 12) {
        listBebidas.forEach(elemento => {
            const contenidoHTML = cardBebida(elemento.strDrinkThumb, elemento.strDrink, elemento.idDrink);
            contenedor.innerHTML += contenidoHTML;
        });
    }
    loader.style.display = 'none';
}

// al apretaar el boton de ver mas se cargan otras 12 cards
const btnListCard = document.querySelector('.btn-listCard');
function cargarListCard() {
    getListaDeCard();
}
