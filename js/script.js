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
console.log("Bienvenido/a " + nombreUsuario + " " + apellidoUsuario);

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
    carrito.forEach((compra, index) => {
      fin +=
        `Tu pedido número ${index + 1}: ` +
        compra.nombre +
        " " +
        "color " +
        compra.color +
        " " +
        "y el talle " +
        compra.talle +
        "\n";
    });
    console.log(fin);
  }
}
console.log(carrito);
