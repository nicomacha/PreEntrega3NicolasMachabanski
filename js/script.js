alert("Hola! Estas ingresando a la pagina de LUMA INDUMENTARIA");

let nombreUsuario = prompt("Ingrese su nombre");
console.log(nombreUsuario);
let nameUser = "";

while (nombreUsuario == nameUser) {
  alert("Por favor complete el campo requerido");
  nombreUsuario = prompt("Ingrese su nombre");
}

let apellidoUsuario = prompt("Ingrese su apellido");
console.log(apellidoUsuario);

while (apellidoUsuario == nameUser) {
  alert("Por favor complete el campo requerido");
  apellidoUsuario = prompt("Ingrese su apellido");
}

alert("Bienvenido/a " + nombreUsuario + " " + apellidoUsuario);

let edadUsuario = prompt("Ingrese su edad");
console.log(edadUsuario);

while (edadUsuario == nameUser) {
  alert("Por favor complete el campo requerido");
  edadUsuario = prompt("Ingrese su edad");
}

if (edadUsuario >= 18) {
  alert("Estas siendo redireccionado a la pagina pagina principal");
} else {
  alert("Busca a mama/papa para poder seguir comprando");
}

let respuestaPadre = "si" || "Si";
let i = 0;
if (edadUsuario < 18) {
  while (i < 3) {
    let preguntaPadre = prompt("Buscaste a mama/papa?");
    if (preguntaPadre === respuestaPadre) {
      alert("Estas siendo redireccionado a la pagina");
      break;
    }
  }
}

let opcion = prompt(
  "Elegi una opcion: \n 1- Seccion remeras \n 2- Seccion buzos \n 3- Seccion Jeans "
);
switch (opcion) {
  case "1":
    console.log("Estas ingresando a la  seccion Remeras");
    break;
  case "2":
    console.log("Estas ingresando a la  seccion Buzos");
    break;
  case "3":
    console.log("Estas ingresando a la seccion jeans");
    break;
}
