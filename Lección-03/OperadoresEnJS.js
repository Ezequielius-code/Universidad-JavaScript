//Operadores aritméticos.
let a = 3, b =2;
let z = a + b;
console.log("Resultado de la suma: " + z);

z = a - b;
console.log("Resultado de la resta: " + z);

z = a * b;
console.log("Resultado de la multiplicación: " + z);

z = a / b;
console.log("Resultado de la división: " + z);

z = a % b;
console.log("Resto de la división de " + a + " entre " + b + ": " + z);

z = a ** b;
console.log("Resultado de " + a + " elevado a la " + b + ": " + z);

//Operadores de incremento y decremento.

//Pre-incremento (operador antes de la veriable).
z = ++a;
console.log(a);
console.log(z);

//Post-incremento (operador después de la veriable).
z = b++;
console.log(b);
console.log(z);

//Pre-decremento (operador antes de la variable).
z = --a;
console.log(a);
console.log(z);

//Post-decremento (operador después de la veriable).
z = b--;
console.log(b);
console.log(z);

//Precedencia de operadores.
let c = 3, d = 2, e = 1, f = 4;

z = c * d + e;
console.log(z);

z = c + d * e;
console.log(z);

z = c * d + e / f;
console.log(z);

z = c + d * e / f;
console.log(z);

z = (c + d) * e / f;
console.log(z);