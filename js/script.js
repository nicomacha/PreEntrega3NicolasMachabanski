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
<<<<<<< HEAD
console.log("Bienvenido/a " + nombreUsuario + " " + apellidoUsuario);
=======
>>>>>>> 4c39726afb0feff19a3285e260dfba4aeb551e2d

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

<<<<<<< HEAD
function tuPedido(objetoProducto) {
  let nombre = objetoProducto.nombre ?? " ";
  let color = objetoProducto.color ?? " ";
  let talle = objetoProducto.talle ?? " ";
  let pedido =
    "Tu pedido es: " +
    nombre +
    " " +
    "color" +
    " " +
    color +
    " " +
    "y talle " +
    " " +
    talle;

  return pedido;
}
let producto;
let estaComprando = true;
const carrito = [];

while (estaComprando) {
  alert("Estas en seccion ropa");
  nombreProducto = prompt("Elige tu articulo: \n Remera \n Buzo \n Jean");
  colorProducto = prompt("Ingresa el color del articulo seleccionado");
  talleProducto = prompt("Ingresa el talle del articulo seleccionado");

  producto = {
    nombre: nombreProducto,
    color: colorProducto,
    talle: talleProducto,
  };
  carrito.push(producto);

  estaComprando = confirm("Quieres seguir comprando?");
  if (estaComprando === false) {
    let fin = "";

    for (i = 0; i < carrito.length; i++) {
      let compra = carrito[i];
      fin +=
        `Tu pedido numero ${i + 1} : ` +
        compra.nombre +
        " " +
        "color " +
        compra.color +
        " " +
        "y el talle " +
        compra.talle +
        "\n";
    }
    console.log(fin);
  }
}
console.log(carrito);
=======
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
>>>>>>> 4c39726afb0feff19a3285e260dfba4aeb551e2d
