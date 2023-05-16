  document.addEventListener('DOMContentLoaded', () => {
  getListaDeCard();
  
});

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

async function obtenerComidasAleatorias() {
  const url = 'https://www.themealdb.com/api/json/v1/1/random.php';
  const response = await fetch(url);
  console.log(response);
  const data = await response.json();
  console.log(data);
  const meal = data.meal;
  console.log(meal);
  const resultados = [];

  for (let i = 0; i < 20; i++) {
      const respuesta = await fetch(url);
      const datos = await respuesta.json();
      const meal = datos.meals[0];
      resultados.push(meal);
  }

  return resultados;
}

async function getListaDeCard() {
  const listComida = await obtenerComidasAleatorias();
  console.log(listComida);
  const contenedor = document.getElementById('general');
  //console.log(listBebidas);
  listComida.forEach(elemento => {
      const contenidoHTML = cardComida(elemento.strMealThumb, elemento.strMeal, elemento.idMeal);
      contenedor.innerHTML += contenidoHTML;
  });
}


const btnListCard = document.querySelector('.btn-listCard');
btnListCard.addEventListener('click', () => {
  getListaDeCard();
});
