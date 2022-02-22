//Creación de un arreglo

//Forma antigua
let oldCars = new Array("BMW", "Mercedes Benz", "Volvo");

//Forma de declarar un arreglo recomendada
const cars = ["Volvo", "Audi", "BMW"];

console.log(cars);

//Recorrer elementos de un arreglo

console.log(cars[1]);

for (i = 0; i < cars.length; i++)
{
    console.log(cars[i]);
}

//Modificar elementos de un arreglo

cars[2] = "Seat";

//Agregar elementos al arreglo
cars.push("Porsche");

console.log(cars);
console.log(cars.length);

cars[cars.length] = "Cadillac";

//No recomendable dejar huecos en el arreglo:
cars[6] = "Fiat";

//Preguntar si en un arreglo

console.log(typeof cars); //no dice si es un arreglo
console.log(Array.isArray(cars));
console.log(cars instanceof Array);