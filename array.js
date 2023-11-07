
// ARRAY -- ARREGLO -- COLECCION -- LISTA

let edad = 22
let nombre = "pepe"
let esMayor = true

// let numDeLaSuerte1 = 54
// let numDeLaSuerte2 = 51
// let numDeLaSuerte3 = 11
// let numDeLaSuerte4 = 22
// let numDeLaSuerte5 = 12
// let numDeLaSuerte6 = 43

// Elementos 
let numerosDeLaSuerte = [54, 51, 11, 22, 12, 43]

let mascotas = ["jack", "lola", "firulais"]

// POSICIONES , empezamos a contar desde 0 
console.log( mascotas[2] )
console.log( mascotas[0] )

mascotas[2] = "pepito"

console.log(mascotas)

mascotas = "algo"

console.log(mascotas)

// Elemento va a ser un caracter 

let palabra = "casa"
console.log(palabra[0])


console.log(palabra.length)
console.log(numerosDeLaSuerte.length)

let busqueda = "sTar WaRS"

let busquedaExacta = busqueda.toUpperCase()

console.log(busqueda)
console.log(busquedaExacta)

let numerosDeLaSuerte2 = [54, 51, 11, 22, 12, 43]


let x = numerosDeLaSuerte2.push( 29, 65 )
console.log( x )

console.log( numerosDeLaSuerte2 )

let cortado = numerosDeLaSuerte2.pop()

console.log( numerosDeLaSuerte2 )

console.log( cortado )

let nums = [ 4, 12, 3, 5 ]

let numsInvertidos = [ 12 ] // [5, 3, 12, 4 ]

numsInvertidos.push( nums.pop() )
numsInvertidos.push( nums.pop() )
numsInvertidos.push( nums.pop() )
numsInvertidos.push( nums.pop() )

console.log(numsInvertidos)



let entradasDeDinero  = [ 14, 32, 3, 5, 8, 1, 8, 2, 3 ]

// RECORRER 

// let acc = 0
// acc += entradasDeDinero[0]
// acc += entradasDeDinero[1]
// acc += entradasDeDinero[2]
// acc += entradasDeDinero[3]
// acc += entradasDeDinero[4]
// acc += entradasDeDinero[5]
// acc += entradasDeDinero[6]

// console.log(acc)



const obtenerTotal = ()=>{

    let acc = 0 

    for(let i = 0; i < entradasDeDinero.length; i++ ){
        acc += entradasDeDinero[i]
    }
    

    return acc
}

let resultado = obtenerTotal()
console.log(resultado)


// DADO EL SIGUIENTE ARRAY 
// DEVOLVER UNO NUEVO , PERO CON TODOS LOS TEXTOS EN MAYUSCULA

// let arr = ["pepe", "maria", "carmen", "juancito"]

// let arr2 = ["lola", "jack"]

// const convertirMAyuscula = ( arreglo )=>{

//     let nuevoArreglo = []

//     for(let i = 0; i < arreglo.length ; i++ ){
//         nuevoArreglo.push( arreglo[i].toUpperCase() )
//     }

//     return nuevoArreglo

// }

// let res = convertirMAyuscula(arr)
// console.log(res)



let arr = ["pepe", "maria", "carmen", "juancito"]

let arr2 = ["lola", "jack", "carmen", "pepito"]

const convertirMAyuscula = (  )=>{

    
    for(let i = 0; i < arr.length ; i++ ){

       console.log(arr[i] === arr2[i])

    }

   

}

 convertirMAyuscula()

/* TODO :
    A partir de un array de correos, recorrerlo para corroborar si son válidos. 
    Para ello, por el momento, debemos buscar el carácter “@” en cada elemento y 
    agregar aquellos que lo tengan al array de correos admitidos.
    En caso de no encontrar el carácter, se deberá agregar al array de correos descartados.
    Desarrollar una función que realice la verificación de cada elemento del array 
    de correos pendientes. En caso de validar, agregar al arrayCorreoAdmitidos. Caso contrario, 
    agregar al arrayCorreoDescartados (vaciar el array de correos pendientes).
    Mostrar por pantalla la cantidad y los elementos de cada array.
*/

// PARA SER VALIDO DEBE CONTENER UN @
let arrayCorreosPendientes = [
    "iroman@digitalhouse.com",
    "loki%digitalhouse.com",
    "loki@digitalhouse.com",
    "thanosdigitalhouse.com",
    "thanos@digitalhouse.com",
  ];
  
  // array de correos admitidos
  let arrayCorreosAdmitidos = [
   
  ];
  
  // array de correos descartados
  
  let arrayCorreosDescartados = [
    
  ];

  const verificadorDeCorreos = ( arr )=>{

    for( let i = 0; i < arr.length; i++ ){
       
        if(  arr[i].includes("@")  ){
            arrayCorreosAdmitidos.push( arr[i] )
        }else{
            arrayCorreosDescartados.push( arr[i] )
        }

    }

    arrayCorreosPendientes = []  

  }

verificadorDeCorreos(arrayCorreosPendientes)

console.log( arrayCorreosPendientes) // []
console.log( arrayCorreosAdmitidos ) // [3]
console.log( arrayCorreosDescartados ) // [2]