// se utiliza para cargar primero el documento html y despues la api
document.addEventListener('DOMContentLoaded', () => {
    getListaDeCard();
    
});


const cardReceta = (imagen, nombre, id) => {
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


async function obtenerRecetasAleatorias() {
    const url = 'http://www.themealdb.com/api/json/v1/1/random.php';
    const response = await fetch(url);
    console.log(response);
    const data = await response.json();
    console.log(data);
    const meals = data.meals;
    console.log(meals);
    const resultados = [];

    for (let i = 0; i < 12; i++) {
        const respuesta = await fetch(url);
        const datos = await respuesta.json();
        const meal = datos.meals[0];
        resultados.push(meal);
    }

    return resultados;
}


async function getListaDeCard() {
    const listRecetas = await obtenerRecetasAleatorias();
    console.log(listRecetas);
    const contenedor = document.getElementById('main');
    //console.log(listBebidas);
    listRecetas.forEach(elemento => {
        const contenidoHTML = cardReceta(elemento.strMealThumb, elemento.strMeal, elemento.idMeal);
        contenedor.innerHTML += contenidoHTML;
    });
}