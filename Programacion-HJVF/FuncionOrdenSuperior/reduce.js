//Reduce: aplica una funcion reductora sobre todos los elementos del array ,devolviendo al fianl un unico valor 

//UTILIZE LA FUNCION REDUCE PARA SUMAR LOS ELEMENTOS DEL ARRAY
const dolares=[10,20,15,17,5,50,100];
const sumaDolares= dolares.reduce((acum,valorAct)=>{
    return acum+valorAct;
},0);
console.log("La sumatoria de los dolares es:", sumaDolares);

//Realice la multiplicacion de los elementos del siguiete array 
const pesos=[1,2,3,4,5,6];
const multiplicaPesos= pesos.reduce( (acum,valoAct)=>{
    return acum*valoAct;
},1);
console.log("La multiplicacion de los pesos son: ", multiplicaPesos);

//para el siguente vector realice la sumatoria de los numeros impares 
const vector=[1,2,3,4,5,6,7,8,9,10,11];
const numImpares= vector.reduce( (acum,valoAct)=>{
    return valoAct%2==1? acum+valoAct :acum+0;
},0);
console.log("La sumatori delos numeros impares son: ", numImpares);

const vector2=[1,2,3,4,5,6,7,8,9,10,11];
const numImpares2= vector.reduce( (acum,valoAct)=>{
    if (valoAct%2==1)
        return acum+valoAct
    else
        return acum+0
},0);
console.log("Suma de impares  ", numImpares);

//para el siguiente arry, realice la sumatoria de los elementos multiplos de 5 
//excepto el 50
const array=[1,10,5,16,20,50,31,35,47,45];
const sumasMul5= array.reduce( (acum,valoAct)=>{
    return valoAct %5==0 && valoAct!=50 ? acum+valoAct :acum+0;
},0);
console.log("La sumatori delos numeros multiplos de 5 menos el 50 ", sumasMul5);