// Ejemplo de la funcion no pura 
const Elvis ={
    nobre: "Elvis Intriago",
    puedeMatricularse: false,
    puedeVerNotas: false 
};

function CambiaEstado(){
    Elvis.puedeMatricularse= true;
    Elvis.puedeVerNotas= true;
    return Elvis;
}
CambiaEstado();
console.log(Elvis);