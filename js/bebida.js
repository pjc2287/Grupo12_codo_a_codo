// se utiliza para cargar primero el documento html y despues la api
document.addEventListener('DOMContentLoaded', () => {
    getListaDeCard();
    
});


const cardBebida = (imagen, nombre, id) => {
    return `
    <section id="contenedor-imagenes">
        <a href="/html/dataReceta.html?i=${id}">
            <img class="imagen"src=${imagen}>
        </a>
        <a href="/html/dataReceta.html?i=${id}">
            <h3 class="descripcion">${nombre}</h3>
        </a>
    </section>
    `
}


async function obtenerBebidasAleatorias() {
    const url = 'http://www.thecocktaildb.com/api/json/v1/1/random.php';
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

async function getListaDeCard() {
    const listBebidas = await obtenerBebidasAleatorias();
    const contenedor = document.querySelector('.conteiner-listCard');
    const loader = document.querySelector('.lds-ring');
    /*loader.style.display = 'inline-block';
    contenedor.append(loader);*/
    console.log(listBebidas);
    if (listBebidas.length >= 12) {
        loader.style.display = 'none';
        listBebidas.forEach(elemento => {
            const contenidoHTML = cardBebida(elemento.strDrinkThumb, elemento.strDrink, elemento.idDrink);
            contenedor.innerHTML += contenidoHTML;
        });
    } 
}



