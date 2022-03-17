let a = parseInt (prompt("ingrese su primer digito"))
let b = parseInt (prompt("ingrese su segundo digito"))

const sumar = (a, b) => a+b;{

let mostrar = sumar (a, b);
document.write ("tu resultado es " + mostrar)
}

const imprimirFrase = nombre => 'hola ' +nombre;

let nombre = "brandon";
console.log(imprimirFrase(nombre));

//objetos
const carro = {
color: 'rojo',
marca: 'toyota',
funciones:{
    acelera: 160,
    frena: 0,
    }
}
    console.log(carro);