//Ejercicio de recursividad
//Recurvividad: funcines que se llaman a si mismo 
const conteoRegresivo=(valor, fin)=> {
    fin ( valor );
    return valor > 0 ? conteoRegresivo( valor -1, fin) : valor;
}
conteoRegresivo(10, valor=> console.log(valor))

console.log("Con bucle for ");
for(let i=10; i>0; i--)
{
    console.log(i);
}