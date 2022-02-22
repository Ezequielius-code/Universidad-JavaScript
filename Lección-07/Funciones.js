//Declaración de la función
function myFunction(a, b)
{
    console.log(arguments.length);
    console.log("Suma: " + (a + b));
}

//Llamada a la función
myFunction(5, 2);

//Palabra return en funciones
function addition(a, b)
{
    return a + b;
}

let result = addition(18, 23);
console.log(result);

//Funciones de tipo expresión (anónimas)
let addNumbers = function (a, b){return a + b};
result = addNumbers(5, 6);
console.log(result);

//Funciones de tipo self-invoking (también es una función anónima)
//No se puede reutilizar.
(function(a, b)
{
    console.log("Ejecutando función..." + a + b);
}
)(" Hola", " Mundo!!!");

//Funciones como objetos
console.log(typeof myFunction);

var myFunctionText = myFunction.toString();
console.log(myFunctionText);

//Funciones flecha
const additionWithArrowFunction = (a, b) => a + b;
result = additionWithArrowFunction(6, 99);
console.log(result);

//Parámetros y argumentos en funciones
let subtraction = function (a, b)
{
    console.log(arguments[0]);
    console.log(arguments[1]);
    return a - b
};
result = subtraction(5, 25);
console.log(result);

//Suma de todos los argumentos
result = addEverything(5, 4, 13, 10, 9);
console.log(result);

function addEverything()
{
    let addition = 0;
    for (let i = 0; i < arguments.length; i++)
    {
        addition += arguments[i]
    }
    return addition;
}

//Paso por valor en funciones

//Tipos primitivos (no tiene propiedades ni métodos)
let x = 10;

//No se puede cambiar el valor de un tipo primitivo.
function changeValue(a)
{
    a = 20;
}

changeValue(x);
console.log(x);

//Paso por referencia en funciones
const person = {name: "John", surname: "Adams"};

function changeObjectValue(p1)
{
    p1.name = "Jimmy";
    p1.surname = "Smith";
}

console.log(person);
changeObjectValue(person);
console.log(person);