// Flat: El metodo flat() crea una nueva matriz con todos los elementos de sub-array concatenados recursivamente hasta la profundidad espesificada.

// Convierta la siguiente matriz en un array de enteros 
const matriz=[[1,2,3],[4,5,6],[7,8,9]];//vector[1,2,3]

const vectoresEnteros=matriz.flat();
console.log("Vector de enteros", vectoresEnteros);
console.log("Matriz Original", matriz);

//Convierta una matriz en un vector
const matrizv2=[10,20,30,[40,50,60]];
const vectorMarizv2=matrizv2.flat();
console.log("de matriz a vector", vectorMarizv2);

//convierta la matriz en vector
const matrizv3=[11,12,13,14,[15,16,17,[18,19,20]]];
const vectorMarizv3=matrizv3.flat(2);
console.log("Matriz dentro de otra matriz a vector", vectorMarizv3);

//