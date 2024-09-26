//array de objetos y map

const menuOpciones=[
    {nombre:"Enero", valor :1},
    {nombre:"Febrero", valor :2},  
    {nombre:"Marzo", valor :3},
    {nombre:"Abril", valor :4},
    {nombre:"Mayo", valor :5},
    {nombre:"Junio", valor :6},
    {nombre:"Julio", valor :7},
    {nombre:"Agosto", valor :8},
    {nombre:"Septiembre", valor :9},
    {nombre:"Octubre", valor :10},
    {nombre:"Noviembre", valor :11},
    {nombre:"Diciembre", valor :12},
];
//Utilice la funcion map para uqe el siguiente array devuelva el 
//mes en foema abrebiada, por ejemplo{mes:"ago",valor:8}
const listaMese = menuOpciones.map(item=>{
    return{
        mes: item.nombre.substring(0,3),
        valor: item.valor 
    }
});
console.log("Lista del mes", listaMese);

//Pra los mese impares se pide que se agregue contidad de dias de ese mes:
//{mes:"Enero", valor:1, dias:31}
//Deve de volver solo los mese impares 
const listaMeseImpares = menuOpciones
  .filter(mes=>mes.valor%2==1)
  .map(item=>{
     return{
         mes: item.nombre,
         valor: item.valor,
         dias: (item.valor==9||item.valor==11)? 30: 31
         }
    });
console.log("Lista del mes impares", listaMeseImpares);

//Convierta el menu de obciones enuna entrada para un cuadro combinado(select en html)
//resultado: <opcion value=1>Enero</option>
//resultado: <opcion value=2>Febrero</option>
const resultado= menuOpciones.map(item=>{
    return `<option value=${item.valor}>${item.nombre}</option> `
});

console.log("Trans formacion en HTML", resultado. join(" ").replace("," , " "));