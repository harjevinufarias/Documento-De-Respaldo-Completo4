// Map: El map () crea un nuevo array con los resultados de la llamada a la funcion indicada aplicados a cada uno de sus elementos.

//Devuelva cada elemento del array multiplicado por 10
const numeros=[1,2,3,4,5,6,7,8,9];
const numerox10=numeros.map(num=>num*10);
console.log("El array multiplicado por 10 ", numerox10);

// Devuelva cada elemento par multiplicados por 5
const edades=[10,24,5,7,9,11,12];
const edadesPar= edades.map(edad=>edad %2==0 ? edad *5: edad);
const edadesPar2= edades.map(edad=> {
    if(edad % 2==0)
        return edad*5;
    else
    return edad;
});
console.log("Los elmentos par multiplicados por 5 son los siguientes: ", edadesPar);
console.log("Los elmentos par multiplicados por 5 son los siguientes intento 2: ", edadesPar2);

//Para los elementos del array se pide: cuando encuentre un 10, reemplazarlo por 1
const pesos=[10,1,2,10,20,33,7,10,2,10];
const pesos10a1= pesos.map(peso=>peso ==10 ? 1:peso);


//Se tien un array de enteros del 1 al 9. Se pide devolver un arry del 1 al 9 pero de esta forma ["uno","dos","tres",..."nueve"]
const enteros =[1,2,22,3,4,5,6,7,8,9,10];
const enterosLetra= enteros.map(entero=> {
    if(entero==1)
        return "uno";
    else if(entero==2)
        return "dos";
    else if(entero==3)
        return "tres";
    else if(entero==4)
        return "cuatro";
    else if(entero==5)
        return "cinco";
    else if(entero==6)
        return "seis";
    else if(entero==7)
        return "siete";
    else if(entero==8)
        return "ocho";
    else if(entero==9)
        return "nueve";
    else 
        return entero;
});
console.log("Los siguientes numeros del 1 al nueve van a se escritos en letra  ", enterosLetra);
