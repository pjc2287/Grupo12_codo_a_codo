const mealContainer = document.getElementById('contenedor-imagenes');

// URL de la API de TheMealDB para obtener comidas aleatorias
const url = 'https://www.themealdb.com/api/json/v1/1/random.php';

// Función para mostrar la información de una comida en el HTML
function mostrarComida(comida) {
  const mealSection = document.getElementsById('contenedor-imagenes');
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
const numComidas = 12; // Número de comidas a mostrar

for (let i = 0; i < numComidas; i++) {
  fetch(url)
    .then(response => response.json())
    .then(data => {
      const comida = data.meals[0];
      mostrarComida(comida);
    })
    .catch(error => {
      console.error('Error:', error);
    });
}
