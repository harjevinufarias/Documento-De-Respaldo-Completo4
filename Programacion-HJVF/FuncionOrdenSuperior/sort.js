// Sort: Ordenar los elementos del vector 

//Ordenar el vetor de etreros siguentes:
const enteros =["Juan","Alverto","Carlos","Benardo","Ana"];
enteros.sort();
console.log("Ordenado",enteros);

/*
Para comparar numeros en el lugar de string, la funcion de comparation puede simplemente retar b de a.
La siguiente funcion ordenar el array de nodo ascendente:
*/
const vector=[10,1,2,36,5,8,11,9];
vector.sort((a,b)=>a-b);
console.log("Vector de enteros ordenados", vector);

//Ordenando Objetos 
const ciudades=[
    {nombre: "Quito", temp: 18},
    {nombre: "Manta", temp: 25},
    {nombre: "Esmeraldas", temp: 28},
    {nombre: "Chone", temp: 23},
    {nombre: "Ambato", temp: 19},
    {nombre: "Atacames", temp: 29},
];
ciudades.sort((ciudad1, ciudad2)=>{
    if(ciudad1.nombre> ciudad2.nombre)
        return 1;
    if (ciudad1.nombre< ciudad2.nombre)
        return -1;
    return 0;
});
console.log("Ciudades ordenadas", ciudades);


//Caracters especiales
const apellidos=["Zambreno","Naranjo","Ñacato","Ángulo"];
apellidos.sort((cadena1, cadena2)=>{
    return cadena1.localeCompare(cadena2)
});
console.log(apellidos);
