
//ANCHOR ALGORITMO DE ORDENAMIENTO ---> BUBBLE SORT
// ASCENDENTE

// let numeros = [5, 2, 6, 1, 3] // [ 2, 5, 1, 3, 6] // [2, 1, 3, 5, 6  ] // [1, 2, 3, 5, 6] 


// const bubbleSort = arr => {

//     for(){

//         for(let j = 0; j < arr.length - 1; j++ ){
//             if(elemento > siguiente){
//                 ordenamiento 
//                 en la posicion del elemento pone lo que habia en la posicion siguiente
//                 en la posicion del siguiente pone lo que habia en la posicion del elemento
//             }
//         }

//     }

// }

let numeros = [5, 2, 6, 1, 3] // [ 2, 5, 1, 3, 6] // [2, 1, 3, 5, 6  ] // [1, 2, 3, 5, 6] 

const bubbleSort = arr => {

    let caja = undefined

    for( let i = 0; i < arr.length; i++ ){

        for(let j = 0; j < arr.length - 1; j++ ){

            if( arr[j] > arr[j + 1]){ // {} > {}

                caja = arr[j] // 5
                arr[j] = arr[j + 1] // 2
                arr[j + 1] = caja // 5

            }
        }

    }

}

bubbleSort(numeros)

console.log( numeros )

let palabras = ["casa", "avion", "Zoo", "mariposa", "2abeja", "$pepe", "ñpepe" ] 
// let palabras = ["casa", "ñpepe", "zoo",  "Ñpepe" ] 

bubbleSort(palabras)

console.log( palabras )

let arrayCuentas = [
    {
        nroCuenta: 1183971869,
        tipoDeCuenta: "Caja de Ahorro",
        saldoEnPesos: 2,
        titularCuenta: "maria",
    },
    {
      nroCuenta: 5486273622,
      tipoDeCuenta: "Cuenta Corriente",
      titularCuenta: "pepito",
      saldoEnPesos: 4,
    },
    {
      nroCuenta: 9582019689,
      tipoDeCuenta: "Caja de Ahorro",
      saldoEnPesos: 3,
      titularCuenta: "juancito",
    },
    {
      nroCuenta: 1761924656,
      tipoDeCuenta: "Cuenta Corriente",
      saldoEnPesos: 6,
      titularCuenta: "carmen",
    },
    {
      nroCuenta: 7401971607,
      tipoDeCuenta: "Cuenta Unica",
      saldoEnPesos: 1,
      titularCuenta: "Jack",
    },
];

bubbleSort(arrayCuentas)

const bubbleSortDeObjetos = (arr) => {

    let caja = undefined

    for( let i = 0; i < arr.length; i++ ){

        for(let j = 0; j < arr.length - 1; j++ ){

            if( arr[j].saldoEnPesos > arr[j + 1].saldoEnPesos ){ 

                caja = arr[j] // 5
                arr[j] = arr[j + 1] // 2
                arr[j + 1] = caja // 5

            }
        }

    }

}

bubbleSortDeObjetos(arrayCuentas)
console.log(arrayCuentas)

// 1 tiene que ver con todo lo previo al parcial 
// 2 Tiene que ver con bubble sort
// 3 tiene que ver con matrices 
 // a con un solo for
 // b seguramente es con doble for 