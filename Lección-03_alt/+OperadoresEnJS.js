//Operadores de asignación.

//Operador de asignación simple.
let a = 1, b = 2;
console.log(a);

//Operadores de asignación compuestos.
a += 5;
console.log(a);

a -= b;
console.log(a);

a *= b;
console.log(a);

a /= b + 2;
console.log(a);

a **= b;
console.log(a);

a %= 3;
console.log(a);

//Operadores de comparación

let c1 = 3, c2 = 2, c3 = "3";

//Compara sin importar el tipo.
let z = c1 == c3;
console.log(z);

//Compara también los tipos.
z = c1 === c3;
console.log(z);

z = c1 != c2;
console.log(z);

z = c1 !== c3;
console.log(z);

//Operadores relacionales.
z = c1 < c2;
console.log(z);

z = c1 <= c2;
console.log(z);

z = c1 > c2;
console.log(z);

z = c1 >= c2;
console.log(z);