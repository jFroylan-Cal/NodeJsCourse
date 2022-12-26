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
console.log(2 == 2);
//true
console.log(2 == '2');
//Diferente
console.log(2 != 2);
//Operador extrictamente igual (===)
console.log(2 === 2);
//True
console.log(2 === '2');
//Operador extrictamente diferente (!==)
console.log(2 !== 2);
//Operadores de desigualdades (<, >, ,<=, >=)
console.log(44 > 2);
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
console.log(11 == 11 && 9 > 2); //Return true
//Or ||
console.log(1 == 2 || 11 == 11); //return true

//Operador condicional Ternario
// condicion ? val : val2 

//Desestructuraciom
var person = { name: 'Pepe', lastName: 'Ramirez' }
var { name, lastName } = person;
console.log(name);
console.log(lastName);


//Programa que calcule la cantidada de segundos que hay en un día
const time = 60;
const hrsDay = 24;
function calculateSecondsInHours(time, hrsDay) {
    let min = hrsDay * time;
    let seg = min * time;
    return seg; 
}
console.log(calculateSecondsInHours(time, hrsDay));

//Calcular el area de un rectangulo
const heigh = 5;
const weight = 2;

function calculateArea(heigh, weight) {
    let area = heigh * weight;
    return area;
}
console.log(calculateArea(heigh, weight));

//Calcular temperatura de centigrados a fahrenheit

const temp = 20 
function fahrenheit(temp) {
    let fh = temp * (1.8) + 32;
    return fh; 
}
console.log(fahrenheit(temp));

//For in
var persona = {
    nombre: 'Jose',
    apellido: 'Marquez',
    edad: 33
}
//Clave nombre del atributo 
//Imprime el atributo y su valor 
for (const clave in persona) {
   console.log(clave, persona[clave]);
}

//For of
//No permite iterar objetos (Persona) 
var arrays = [1,'Dos',3,4,5,6,7,'Ocho','Cosa'];
var cadena = 'Esta es una cadena de texto';

for(let valor of arrays){
    console.log(valor);
}

var cadena = 'Esta es una cadena de texto';
for(let valor of cadena){
    console.log(valor);
}

//Ejercicios de Ciclos
//Imprimir las tablas de multiplicar del 2 al 12
//For 
 console.log('Tabla del 2 al 12');
 for (let i = 1; i <= 12; i++) {
    let base = 2
    let result = i * base;
    console.log('Tabla de '+ base +' X '+ i + ' = ' + result);
 }
//while
var i = 1
while (i<=12) {
    let base = 2;
    let result = i * base;
    console.log('Tabla de '+ base +' X '+ i + ' = ' + result);
    i++;
}
//Funciones
function saludar() {
    let saludo = 'Hola gente, te saludo desde una funcion';
}

