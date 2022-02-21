//Tipo de dato string:
var nombre = "Ezequiel";
console.log(typeof nombre + " " + nombre);

//Las variables son dinámicas, es decir:
nombre = 10;
console.log(typeof nombre + " " + nombre);

//Tipo de dato numérico:
var numero = 1000;
console.log(numero);

//Tipo de dato object:
var objeto = {
    nombre: "Juan",
    apellido: "Pérez",
    telefono: 1562849876
}
console.log(objeto);

//Tipo de dato boolean:
var bandera = true;
console.log(typeof bandera + " " + bandera);

//Tipo de dato función:
function miFuncion(){};
console.log(miFuncion);
console.log(typeof miFuncion);

//Tipo de dato símbolo:
var simbolo = Symbol("Mi símbolo");
console.log(simbolo);
console.log(typeof simbolo);

//Tipo de dato clase (son funciones):
class Persona{
    //Los atributos se especifican a través de un constructor
    constructor(nombre1, apellido){
        this.nombre1 = nombre1;
        this.apellido = apellido;
    }
}
console.log(Persona);
console.log(typeof Persona);

//Tipo de dato undefined:
var x;
console.log(x);
console.log(typeof x);

//Tipo de dato null (ausencia de valor):
var y = null;
console.log(y);
console.log(typeof y);

//Tipo de dato array (object):
var autos = ["BWW", "Audi", "Volvo"];
console.log(autos);
console.log(typeof autos);

//Sintaxis básica para declaración de variables.

/*var = define variables globales.
const = define constantes.
let = define las variables dentro de un scope.*/

//Buenas prácticas para declarar variables:

/*Si el nombre de la variable es compuesto, usar camel case.
Ejemplo:*/
let nombreCompleto;

//Reglas para definir nombres de variables.

/*
1°) El nombre de una variable no debe comenzar con número.
2°)No se deben definir variables con una keyword como nombre.
*/