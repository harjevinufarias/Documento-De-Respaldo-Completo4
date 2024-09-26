//filter: Crea un nuevo array con los elementos que cumplan la condicion 
//Liste las edades menor o igual a 15
const edades =[15,23,22,34,12,10,25,29,8];
const edadesMenor15= edades.filter(edad=> edad<=15);
console.log("edades menores o iguales que 15", edadesMenor15);
console.log("Array de edades origuinal", edades);

//Liste las temperaturas menores a 10 grados o mayores a 30 grados 
const temperaturas=[5,30,12,8,22,33,10,14,15,17,6];
const temp= temperaturas.filter(tem =>tem <10 || tem >30);
console.log("Temperaturas que sean menor de 10 y mayores a 30 grados ", temp);
