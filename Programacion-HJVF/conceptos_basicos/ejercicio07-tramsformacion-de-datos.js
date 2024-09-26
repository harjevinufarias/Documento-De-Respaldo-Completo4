//transformacion de datos 
const provincias =["Esmeraldas", "Guayas", "Pichincha", "Manabi"];
const cadenaProvincias=provincias.join(", ");

console.log("Array de provincias intacto: ", provincias);
console.log("Copias del array trnasformando en una cadena de caracteres:", cadenaProvincias);

//Array.filter
const nombres=["Juan", "Ana", "Maria","Andres", "Harold", "Rodrigo", "Carlos","Jose"];

//Filtra los nombre que empienzen con la letra A
const listafiltrada=nombres.filter(item=> item[0]=="A");
console.log(nombres);
console.log(listafiltrada);