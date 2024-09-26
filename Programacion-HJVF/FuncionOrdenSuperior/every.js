//Comprueba todos el elemento del array y devuelve verdadero si todo cumplen
//con la condicion evaluada.

const enteros=[15,23,100,23,45,60];
//Determina si todo los elemento del array son positivos 
const sonPositivos = enteros.every(num => num >0);
console.log("¿Todos los elemmentos del array son positivos?", sonPositivos);


//Determine si todos los elementos del siguiente array son pares 
const edades=[12,18,22,30,36];
const sonPares = edades.every(edad => edad % 2==0 );
console.log("¿Todos los elemmentos del array son pares?", sonPares);


//Determine si todos los elementos del array son impares 
const temp=[9,11,27,35,77,99];
const sonIpares = temp.every( num => num % 2==1 );
console.log("¿Todos los elemmentos del array son Impares?", sonIpares);


//determine si todos los elmentos son multiplos de 10
const numeros=[10,20,30,40,50,60,70,80,90,100];
const sonMultiplo10 = numeros.every( mul => mul % 10==0 );
console.log("¿Todos los elemmentos del array son multiplos de 10?", sonMultiplo10);