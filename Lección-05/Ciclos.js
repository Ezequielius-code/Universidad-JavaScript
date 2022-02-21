//Ciclo While
let count = 0;

while (count < 3)
{
    ++count;
    console.log(count);
}

//Ciclo Do While
count = 10;

do
{
    console.log(count);
    count--;
}while (count > 4);

//Ciclo for
for (let i = 10; i >= 0; i--)
{
    if (i == 0)
    {
        console.log("Boom!!!");
    }
    else
    {
        console.log(i);
    }
}

//Uso de la palabra reservada Break
for (let number = 0; number <= 10; number++)
{
    if (number % 2 == 0)
    {
        console.log(number);
    }
    if (number == 5)
    {
        break;
    }
}

//Uso de la palabra reservada Continue
for (let count = 0; count <= 10; count++)
{
    if (count % 2 != 0)
    {
        continue; //ir a la siguiente iteración
    }
    console.log(count);
}

//Uso de etiquetas (NO RECOMENDABLE!!!)
inicio: 
for (i = 0; i < 10; i++)
{
    console.log("Número: " + i);
    if (i > 5)
    {
        continue inicio;
    }
}