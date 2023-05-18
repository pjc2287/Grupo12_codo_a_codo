document.addEventListener('DOMContentLoaded', () => {
  getListaDeCard();

});
//establece los datos que contiene cardComida y donde deben ser insertados//
const cardComida = (imagen, nombre, id) => {
  return `
    <section id="contenedor-imagenes">
      <a href="/html/dataReceta.html?i=${id}">
        <img class="imagen" src=${imagen}>
      </a>
      <a href="/html/dataReceta.html?i=${id}">
        <h3 class="descripcion">${nombre}</h3>
      </a>
    </section>
  `;
};
//obtiene datos de la API recetas aleatorias y los transforma en json//
async function obtenerComidasAleatorias() {
  const url = 'https://www.themealdb.com/api/json/v1/1/random.php';
  const response = await fetch(url);
  console.log(response);
  const data = await response.json();
  console.log(data);
  const meal = data.meal;
  const resultados = [];
// le solicito 12 recetas aleatorias, espero datos y los pusheo a meal//
  for (let i = 0; i < 12; i++) {
    const respuesta = await fetch(url);
    const datos = await respuesta.json();
    const meal = datos.meals[0];
    resultados.push(meal);
  }

  return resultados;
}
//con los datos obtenidos, establezco donde se deben pegar los mismos. Tambien se establece un loader mientras se cargan las recetas//
async function getListaDeCard() {
  const contenedor = document.getElementById('general');
  const loader = document.querySelector('.lds-ring');
  loader.style.display = 'inline-block';
  const listComida = await obtenerComidasAleatorias();
  console.log(listComida);
  if (listComida.length >= 12) {
    listComida.forEach(elemento => {
      const contenidoHTML = cardComida(elemento.strMealThumb, elemento.strMeal, elemento.idMeal);
      contenedor.innerHTML += contenidoHTML;
    });
    loader.style.display = 'none';
  }
}
//en caso de que el usuario haga clic en btn ver más, se vuelve a ejecutar la funcion getListaDeCard//

const btnListCard = document.querySelector('.btn-listCard');
btnListCard.addEventListener('click', () => {
  getListaDeCard();
});
