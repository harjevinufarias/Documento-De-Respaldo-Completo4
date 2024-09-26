//Funcios pura 
const Elvis ={
    nombre:"Elvis Intriago",
    puedeMatricularse: false,
    puedeVerNotas: false
};

const cambiaEstado= persona=>({
    ...persona,
    puedeMatricularse: true,
    puedeVerNotas: true,
});

console.log(cambiaEstado(Elvis ));
console.log (Elvis);
