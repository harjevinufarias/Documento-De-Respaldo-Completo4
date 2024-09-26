//transformacion de datos con map
const provincias =["Esmeraldas","Manabí","Pichincha","Guayas","Tungurahua "];

const arrayObjetos =provincias.map(prov=>{
    return{
        "Provincias": prov
    }
});
console.log ("Array de cadenas", provincias);
console.log ("Array de objetos", arrayObjetos);