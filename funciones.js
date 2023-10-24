
// ANCHOR ---> funciones

// 1 --> declaradas ---> Tienen Nombre

// CREAR LA FUNCION
f1()

f1()

f1()

function f1 (){
    // BLOQUE DE CODIGO
    console.log("me estoy ejecutando")

}

// ejecutar la funcion



// PARAMETROS 
// ARGUMENTOS
let resultado = sumar(4, 7)
console.log(resultado )

function sumar (num1, num2){

    let suma =  num1 + num2
    // return suma

    // return num1 + num2

}


// console.log( sumar() ) // --> MALA PRACTICAAAAA



// console.log( sumar(16, 4) )
// console.log( sumar(11, 5) )
// console.log( sumar(2, 8) )
// console.log( sumar(1, 10) )

{/* <h3>{resultado}</h3> */}



// SCOPE


let sonido = "miau"


function ladrar (){
    // BLOQUE DE CODIGO ---> SCOPE LOCAL
   
    let sonido = "wauuu"
    return sonido 
   
}

let resultadoSonido = ladrar() 
console.log(resultadoSonido)

function ladrar2 (){

    return sonido
}

let resultadoSonido2 = ladrar2("15")
console.log(resultadoSonido2)


// ANONIMAS


// 2 --> expresadas comunes
const sumar2 = function(n1, n2){
    return n1 + n2
}

let resMil = sumar2(12, 54)
console.log(resMil)



// 3 --> expresadas de tipo flecha ( arrow function )

const restar = (n1, n2) =>  (n1 + n2) - 10


let resultadoResta = restar(100, 50)
console.log(resultadoResta)

let resultado2 = restar(200, 50)
console.log(resultado2)




 // CREAR UNA FUNCION reutilizable donde un usuario pueda pasar el dinero que tiene 
// y que la funcion le diga cuantos dolares podria tener 
// para eso necesitamos saber cuantos son sus pesos y a cuanto esta el dolar

// let cantidadDePesos = 200
// let valorDolar = 50


const convertirDolares = ( pesos , valor )=>{

  return pesos / valor

}

let totalDolares = convertirDolares(200, 50)
let totalDolares2 = convertirDolares(100, 502)

//  <h3>La cantidad de dolares que obtendrias serian {totalDolares} </h3> 

// alert("esta funcionando")
