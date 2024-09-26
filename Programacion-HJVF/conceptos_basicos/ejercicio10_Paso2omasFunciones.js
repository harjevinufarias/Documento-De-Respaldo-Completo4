//ejermplo de paso de 2  o mas funciones 

//const invocarSi = (condicion, funcion1, funcion2)=> condicion ? funcion1() : funcion2();
const invocarSi= (condicion, funcion1, funcion2)=>{
    if(condicion)
        return funcion1();
    else
       return funcion2(); 
}
const mostrarBienvenida=()=> console.log(" Bienvenidos a la Pucese Esmeraldas! ");
const mostrarNoAutorizado=()=> console.log(" Usuario no autorizado ");

invocarSi(true, mostrarBienvenida, mostrarNoAutorizado);
invocarSi(false, mostrarBienvenida, mostrarNoAutorizado);