//Sentencia if-else
let condition = true;

if (condition)
{
    console.log("La condición es verdadera.");
}
else
{
    console.log("La condición es falsa.");
}

let number = Math.floor((Math.random() * 10) + 1);
console.log(number);

if (number == 1)
{
    console.log("Número: " + number);
}
else if (number == 2)
{
    console.log("Número: " + number);
}
else if (number == 3)
{
    console.log("Número: " + number);
}
else if (number == 4)
{
    console.log("Número: " + number);
}
else
{
    console.log("Número desconocido.");
}

//Cálculo de la estación del año.
let month = Math.floor((Math.random() * (12 - 1 + 1)) + 1);
let season;

if (month >= 1 && month < 4)
{
    season = "Verano";
}
else if (month >= 4 && month < 7)
{
    season = "Otoño";
}
else if (month >= 7 && month < 10)
{
    season = "Invierno";
}
else
{
    season = "Primavera";
}
console.log("La estación del año es: " + season + ".");

//Cálculo hora del día.
let hour = Math.floor((Math.random() * (30 - 0 + 1)) + 1);
let message;

if (hour >= 0 && hour <= 5)
{
    message = "zzz... Estoy durmiendo.";
}
else if (hour >= 6 && hour <= 11)
{
    message = "Buenos días!!!";
}
else if (hour >= 12 && hour <= 18)
{
    message = "Buenas tardes!!!";
}
else if (hour >= 19 && hour <= 24)
{
    message = "Buenas noches!!!";
}
else
{
    message = "Wow!!! Tu día tiene 48 horas.";
}
console.log(message);

//Estructura switch.
let secondNumber = Math.floor((Math.random() * (5 - 1 + 1)) + 1);
let secondMessage;

switch (secondNumber)
{
    case 1:
        secondMessage = "Uno";
    break;
    case 2:
        secondMessage = "Dos";
    break;
    case 3:
        secondMessage = "Tres";
    break;
    default:
        secondMessage = "Número fuera de rango.";
    break;
}
console.log(secondMessage);

//Cálculo de la estación del año (con switch).
switch (month)
{
    case 1: case 2: case 3:
        season = "Verano.";
    break;
    case 4: case 5: case 6:
        season = "Otoño.";
    break;
    case 7: case 8: case 9:
        season = "Invierno.";
    break;
    default:
        season = "Primavera.";
    break;
}
console.log("La estación del año es: " + season);

/*Tener en cuenta que la estructura switch realiza
comparaciones estrictas. Es decir, compara el valor y,
además, el tipo de las variables.*/