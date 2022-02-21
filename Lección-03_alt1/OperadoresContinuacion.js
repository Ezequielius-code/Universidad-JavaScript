//Operador AND
let number = 5;
let minValue = 0, maxValue = 10;

if (number >= minValue && number <= maxValue)
{
    console.log("El valor se encuentra dentro del rango.");
}
else
{
    console.log("El valor está fuera de rango.");
}

//Operador OR
 let vacation = false, holiday = false;

 if (vacation || holiday)
 {
     console.log("Tienes el día libre.");
 }
 else 
 {
     console.log("Tienes que trabajar.");
 }

 //Operador ternario.
 let result = (3 > 2)? "Verdadero" : "Falso";
 console.log(result);

 let numberToEvaluate = 9;
 result = numberToEvaluate % 2 == 0? "Número par" : "Número impar";
 console.log(result);

 //Conversión string a número.
 let myNumber = "10";
 console.log(myNumber);
 console.log(typeof myNumber);

 let age = Number(myNumber);
 console.log(age);
 console.log(typeof age)
 let canVote = age >= 16? "Puede votar." : "No puede votar.";
 console.log(canVote);

 //Función isNaN
 let testNumber = "18zxc";
 let myRealNumber = Number(testNumber);
 console.log(myRealNumber);

 if (isNaN(myRealNumber))
 {
     console.log("No ha ingresado un número válido.");
 }
 else
 {
    canVote = myRealNumber >= 16? "Puede votar." : "No puede votar.";
    console.log(canVote);
 }

 //Precedencia de operadores.
 let x = 5;
 let y = 10;
 let z = ++x + y--;
 console.log(x);
 console.log(y);
 console.log(z);
 
 result = 4 + 5 * 6 / 3;
 console.log(result);

 result = (4 + 5) * 6 / 3;
 console.log(result);