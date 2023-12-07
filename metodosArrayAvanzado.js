

let numeros = [ 1, 2, 6, 3]

numeros.includes( 6 )
numeros.indexOf( 6 )
numeros.pop( )
numeros.push( "pepito" )
  
const sumar = ( a, b )=>{

}

sumar(()=>{}, ()=>{})
numeros.push( ()=>{} )

// CALLBACK === funcion --> una funcion que se pasa como argumento a otra funcion 




let arrayCuentas = [
    {
      nroCuenta: 5486273622,
      tipoDeCuenta: "Cuenta Corriente",
      saldoEnPesos: 5,
      titularCuenta: "pepito",
    },
    {
      nroCuenta: 1183971869,
      tipoDeCuenta: "Caja de Ahorro",
      saldoEnPesos: 3,
      titularCuenta: "maria",
    },
    {
      nroCuenta: 9582019689,
      tipoDeCuenta: "Caja de Ahorro",
      saldoEnPesos: 7,
      titularCuenta: "juancito",
    },
    {
      nroCuenta: 1761924656,
      tipoDeCuenta: "Cuenta Corriente",
      saldoEnPesos: 1,
      titularCuenta: "carmen",
    },
    {
      nroCuenta: 7401971607,
      tipoDeCuenta: "Cuenta Unica",
      saldoEnPesos: 12,
      titularCuenta: "Jack",
    },
];

// const encontrar = (array , nombre)=>{

//     for (let i = 0; i < array.length; i++) {
//         if( array[i].titularCuenta === nombre ){
//             return array[i]
//         }
        
//     }

// }
// let clienteEncontrado = encontrar(arrayCuentas, "maria")
// console.log(clienteEncontrado )

// FIND ---> me pide una condicion y me devuelve el elemento encontrado
let cliente = arrayCuentas.find( elemento => elemento.titularCuenta === "jorge" )
console.log(cliente)


const filtrador = (arr)=>{
    
    let nuevoArr = []
    for (let i = 0; i < arr.length; i++) {
        if(arr[i].saldoEnPesos < 5 ){
            nuevoArr.push( arr[i] )
        }
        
    }
    
    return nuevoArr 
    
}
// FILTER ---> Siempre devuelve un nuevo arreglo y lo que pide es 
// una condicion 
let arregloFiltrado = arrayCuentas.filter( (elemento, indice ) => elemento.saldoEnPesos < 5 ) //[]
console.log(arregloFiltrado)

// MAP --->  sirve para devolver un nuevo arreglo siempre siempre siempre 
// de la misma longitud que el original 
// nos va pedir que es lo que queremos agregar a nuestro nuevo array

let numeros2 = [6, 2, 5] // [ 18, 15, 6 ]

let nuevoArr = numeros2.map( (numero) => { return numero * 3 } ) // [0, 1, 2 ]
console.log(nuevoArr)

let arrayNuevo = arrayCuentas.map( (cuenta)=> {
    return {saldoEnPesos: cuenta.saldoEnPesos,titularCuenta: cuenta.titularCuenta } 
} ) // [{}]

console.log( arrayNuevo)

// FOREACH --> LO UNICO QUE HACE ES RECORRER EL ARRAY Y PUEDE EJECUTAR INSTRUCCIONES 
// PERO NO DEVUELVE NADA

arrayCuentas.forEach( (cuenta, idx )=> cuenta.id = idx + 1  )

console.log(arrayCuentas)

numeros2.sort( (a, b) => b - a  )
console.log( numeros2 )
arrayCuentas.sort( (a, b)=> b.saldoEnPesos - a.saldoEnPesos )
console.log(arrayCuentas)