console.log("Hola mundo");
// Tipos de dato

//numericos
console.log(12);

console.log(12.21);

//Caracteres cadenas
//Cadena string
console.log("Hola mundo");
//caracter char
console.log("H");

//Booleanos
console.log(true);
console.log(false);

//Indefinidos
console.log(undefined);

//nulos
console.log(null);

//Objetos
objeto = { id: 1, name: "Jose", age: 30, things: null };

console.log(objeto);

//Arreglos
myArrayNumeric = [1, 2, 3, 4, 5, 6, 7, 8];
myArrayStrings = ["Hola", "Adios", "Buen día", "Buena noche"];
myArrayNumericAndStrings = [myArrayNumeric, myArrayStrings];
console.log(myArrayNumericAndStrings);
myArrayObjects = [objeto, objeto];
console.log(myArrayObjects);

//Variables
//const, var, let

var nombre = 'Froy';

var edad = 23;

const pi = 3.1416;

let perro = 'Huesos';

var ciudad; 

console.log(ciudad);

//Operadores 

//Operador de asignacion = 
let x = 1;

//Operador de asignacion de adicion +=, sustraccion -=, multiplicacion *=, portencia **= y residuo %= 

let y = 12;
let z = 22;

y += z;
z -= y;
z *= y;
y /= z;
z %= y;

console.log(y);
console.log(z);

//Operadores de comparacion
//Igual
console.log(2==2);
//true
console.log(2=='2');
//Diferente
console.log(2!=2);
//Operador extrictamente igual (===)
console.log(2===2);
//True
console.log(2==='2');
//Operador extrictamente diferente (!==)
console.log(2!==2);
//Operadores de desigualdades (<, >, ,<=, >=)
console.log(44>2);
//Operadores aritmeticos +, -, *, /, %, **
//Operadores de incremento y decremento ++ y --
var num = 1;
console.log(num); //num = 1
console.log(num++);//num = 1
console.log(num);//num = 2

var num2 = 2; 
console.log(num2);
console.log(++num2);
console.log(num2);

//Operadores logicos Vertablas de verdad
//And &&
console.log( 11 == 11 && 9 > 2); //Return true
//Or ||
console.log( 1 == 2 || 11 == 11); //return true

//Operador condicional Ternario
// condicion ? val : val2 

//Desestructuraciom
var person = { name: 'Pepe', lastName: 'Ramirez' }
var { name, lastName} = person;
console.log(name);
console.log(lastName);
