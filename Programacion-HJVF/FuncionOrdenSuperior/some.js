//some: Devuelve verdadero si al menos uno de los elementos del arry cumple con la condicion 

//De termine si existe un elemento negativo en el vector
const numeros =[1,2,3,4,-5,6,7,8];
const existeNegativo= numeros.some(elemento => elemento <0);

console.log ("¿El vector tien elementos negativos?", existeNegativo);

//Determine si existe un 1 en el vector
const temp=[0,0,0,0,1,0,0,0];
const existeUn1= temp.some(elemen => elemen == 1);

console.log ("¿El vector tien elementos con el numero 1?", existeUn1);
