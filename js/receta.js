// se utiliza para cargar primero el documento html y despues la api
document.addEventListener('DOMContentLoaded', () => {
	getInfoReceta();
	getListRecetasRandom().then(meals => {
		console.log(meals);
	});

});





// recuperamos el querystring
const querystring = window.location.search
//console.log(querystring) // '?s=Big%20Mac'

// usando el querystring, creamos un objeto del tipo URLSearchParams
const params = new URLSearchParams(querystring)

// recuperamos el valor del parámetro "s"
const query = params.get('s') // "Big Mac"


async function getInfoReceta() {
	var url = `https://www.themealdb.com/api/json/v1/1/search.php?s=Big%20Mac`
	const response = await fetch(url);     // se conecta al endpoint con la url
	const data = await response.json();    //guarda los datos que devuelve el endpoint y los trasforma en json
	//console.log(data.meals);
	data.meals.forEach(datos => {
		console.log(datos);

		//nombre de la receta
		for (let index = 0; index < document.querySelectorAll('.nomb-receta').length; index++) {
			let nombReceta = document.querySelectorAll('.nomb-receta')[index].textContent = datos.strMeal;
			//traductor(nombReceta);
		}

		// preparacion de la receta
		//let descripcion = traductor(datos.strInstructions);
		//console.log(descripcion);
		document.querySelector('.preparacion-receta').textContent = datos.strInstructions;

		//lista de los ingredientes de la receta

		const ingredients = [];
		for (const key in datos) {
			if (key.includes("strIngredient") || key.includes("strMeasure")) {
				ingredients.push(datos[key]);
			}
		}

		console.log(ingredients);

		for (let index = 0; index < 20; index++) {
			const contenedorUl = document.querySelector('.list-ingredientes');
			const elementoLi = document.createElement('li');
			elementoLi.textContent = ingredients[20 + index] + ' ' + ' ' + ingredients[index]
			contenedorUl.appendChild(elementoLi);

		}

		// imagen de la receta
		for (let index = 0; index < document.querySelectorAll('.nomb-receta').length; index++) {
			document.querySelectorAll('.img-receta')[index].setAttribute("src", datos.strMealThumb);
		}


	});
}



function getListRecetasRandom() {
	const promises = [];

	for (let i = 0; i < 10; i++) {
		promises.push(fetch("https://www.themealdb.com/api/json/v1/1/random.php"));
	}

	return Promise.all(promises)
		.then(responses => Promise.all(responses.map(response => response.json())))
		.then(data => {
			const meals = [];

			data.forEach(response => {
				const meal = response.meals[0];

				if (!meals.some(m => m.idMeal === meal.idMeal)) {
					meals.push(meal);
				}
			});

			return meals.slice(0, 10);
		});
}







/*async function traductor(texto) {
	const url = 'https://text-translator2.p.rapidapi.com/translate';
	const options = {
		method: 'POST',
		headers: {
			'content-type': 'application/x-www-form-urlencoded',
			'X-RapidAPI-Key': 'bff0c240b8mshcd9960f5c84595bp1bb76ajsn5f6823b704dc',
			'X-RapidAPI-Host': 'text-translator2.p.rapidapi.com'
		},
		body: new URLSearchParams({
			source_language: 'en',
			target_language: 'es',
			text: texto
		})
	};

	const response = await fetch(url, options);     // se conecta al endpoint
	const data = await response.json();
	//return data;
	//console.log(data.data.translatedText) 

}*/


