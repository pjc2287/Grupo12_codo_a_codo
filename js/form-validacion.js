const nombre = document.getElementById("nombre");
const apellidos = document.getElementById("apellido");
const correo = document.getElementById("email");
const celular = document.getElementById("celular");
const textarea = document.getElementById("textarea");
const terminosYcondiciones = document.getElementById("termsAndConditions");
const form = document.getElementById("form");
const listInputs = document.querySelectorAll(".form-input");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let condicion = validacionForm();
  if (condicion) {
    enviarFormulario();
  }
});

function validacionForm() {
  form.lastElementChild.innerHTML = "";
  let condicion = true;
  listInputs.forEach((element) => {
    element.lastElementChild.innerHTML = "";
  });

  if (nombre.value.length < 1 || nombre.value.trim() == "") {
    mostrarMensajeError("nombre", "Nombre no valido*");
    condicion = false;
  }
  if (apellidos.value.length < 1 || apellidos.value.trim() == "") {
    mostrarMensajeError("apellido", "Apellido no valido");
    condicion = false;
  }
  if (correo.value.length < 1 || correo.value.trim() == "") {
    mostrarMensajeError("email", "Correo no valido*");
    condicion = false;
  }
  if (
    celular.value.length <= 7 ||
    celular.value.trim() == "" ||
    isNaN(celular.value)
  ) {
    mostrarMensajeError("celular", "Celular no valido*");
    condicion = false;
  }
  if (textarea.value.length < 1 || textarea.value.trim() == "") {
    mostrarMensajeError("textarea", "Mensaje vacio*");
    condicion = false;
  }
  if (!terminosYcondiciones.checked) {
    mostrarMensajeError("termsAndConditions", "Debe aceptar para continuar*");
    condicion = false;
  } else {
    mostrarMensajeError("termsAndConditions", "");
  }
  return condicion;
}

function mostrarMensajeError(claseInput, mensaje) {
  let elemento = document.querySelector(`.${claseInput}`);
  elemento.lastElementChild.innerHTML = mensaje;
}

function enviarFormulario() {
  form.reset();
  form.lastElementChild.innerHTML = "Gracias!";
}