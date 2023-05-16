// se utiliza para cargar primero el documento html y despues la api
document.addEventListener('DOMContentLoaded', () => {
	// recuperamos el querystring
	const querystring = window.location.search
	//console.log(querystring) // '?i=12345'

	// usando el querystring, creamos un objeto del tipo URLSearchParams
	const params = new URLSearchParams(querystring)

	// recuperamos el valor del parámetro "i"
	const query = params.get('i') // "12345"
	console.log(query);

	if (query != null) {
		if (query < 20000) {
			getInfoBebida(query);
		}
		else {
			getInfoReceta(query);
		}
	}




});


async function getInfoReceta(query) {
	var url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${query}`;
	const response = await fetch(url);     // se conecta al endpoint con la url
	const data = await response.json();    //guarda los datos que devuelve el endpoint y los trasforma en json
	console.log(data);
	data.meals.forEach(datos => {

		// Parrafo de presentacion
		document.querySelector('.parrafo-seccion1').innerHTML = "The "+datos.strMeal+" is a traditional dish from "+datos.strArea+", it was created by a professional chef "+datos.strArea+"; You can visit his website and see more of his recipes at <a href= "+datos.strSource+">WebSite</a>."+" You can also see the complete preparation on <a href="+datos.strYoutube+">YouTube</a>.";

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

		const contenedorUl = document.querySelector('.list-ingredientes');

		for (let index = 0; index < 20; index++) {
			if (ingredients[index] != null && ingredients[index] != "") {
				const elementoLi = document.createElement('li');
				elementoLi.textContent = ingredients[20 + index] + ' ' + ' ' + ingredients[index]
				contenedorUl.appendChild(elementoLi);
			}
		}

		// imagen de la receta
		for (let index = 0; index < document.querySelectorAll('.nomb-receta').length; index++) {
			document.querySelectorAll('.img-receta')[index].setAttribute("src", datos.strMealThumb);
		}

		// Parrafo de presentacion
		document.querySelector('.parrafo-seccion1').textContent = datos.strInstructions;

	});
}

async function getInfoBebida(query) {
	var url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${query}`;
	const response = await fetch(url);     // se conecta al endpoint con la url
	const data = await response.json();    //guarda los datos que devuelve el endpoint y los trasforma en json
	data.drinks.forEach(datos => {
		console.log(datos);

		// Parrafo de presentacion
		document.querySelector('.parrafo-seccion1').innerHTML = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia et beatae doloremque perferendis laborum, inventore ea. Recusandae, inventore repellat sit in nemo sed est alias sunt unde? Numquam, modi incidunt!. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam laborum eaque doloremque consectetur nostrum. Culpa dolorem, consectetur deleniti omnis obcaecati quisquam dolor saepe repudiandae debitis, sit suscipit veniam porro ut.";

		//nombre de la receta
		for (let index = 0; index < document.querySelectorAll('.nomb-receta').length; index++) {
			let nombReceta = document.querySelectorAll('.nomb-receta')[index].textContent = datos.strDrink;
			//traductor(nombReceta);
		}

		// preparacion de la receta
		document.querySelector('.preparacion-receta').textContent = datos.strInstructions;

		//lista de los ingredientes de la receta
		const ingredients = [];
		for (const key in datos) {
			if (key.includes("strIngredient") || key.includes("strMeasure")) {
				ingredients.push(datos[key]);
			}
		}

		console.log(ingredients);
		const contenedorUl = document.querySelector('.list-ingredientes');

		for (let index = 0; index < 15; index++) {
			if (ingredients[index] != null && ingredients[index] != "") {
				const elementoLi = document.createElement('li');
				elementoLi.textContent = ingredients[15 + index] + ' ' + ' ' + ingredients[index]
				contenedorUl.appendChild(elementoLi);
			}
		}

		// imagen de la receta
		for (let index = 0; index < document.querySelectorAll('.nomb-receta').length; index++) {
			document.querySelectorAll('.img-receta')[index].setAttribute("src", datos.strDrinkThumb);
		}

		// Parrafo de presentacion
		document.querySelector('.parrafo-seccion1').textContent = "xxxxxxxxxxxxxxxxxxxxxx";
	});
}

function desplegar() {
	var btnDesplegar = document.querySelector('.btn-button');
	var seccion2 = document.querySelector('.container-div-info');

	if (seccion2.style.height === 'auto') {
		seccion2.style.height = '387px';
		btnDesplegar.textContent = '↓';
	} else {
		seccion2.style.height = 'auto';
		btnDesplegar.textContent = '↑';
	}
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


