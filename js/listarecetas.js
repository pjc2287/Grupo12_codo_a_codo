const mealContainer = document.getElementById('contenedor-imagenes');

// URL de la API de TheMealDB para obtener comidas aleatorias
const url = 'https://www.themealdb.com/api/json/v1/1/random.php';

// Función para mostrar la información de una comida en el HTML
function mostrarComida(comida) {
  
  mealSection.classList.add('meal');

  const mealImg = document.getElementsById('imagen');
  mealImg.src = comida.strMealThumb;

  const mealName = document.getElementsById('descripcion');
  mealName.textContent = comida.strMeal;

  mealDiv.appendChild(mealImg);
  mealDiv.appendChild(mealName);

  mealContainer.appendChild(mealDiv);
}

// Hacer múltiples solicitudes a la API para obtener varias comidas aleatorias
// Número de comidas a mostrar
function listaRandom () {
  for (let i = 0; i < 12; i++) {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log (data)
        const comida = data.meals[0];
        mostrarComida(comida);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }
}

listaRandom ()
console.log (listaRandom())