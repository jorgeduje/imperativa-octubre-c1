
// CICLO -- LOOP -- BUCLE

// for - while - do while

// for -->  inicializacion ; condicion  ; modificador 

const probandoFor = (  )=>{
    
    console.log("incializacion")
    
   for( let i = 1; i <= 5 ; i++){
        // bloque de codigo
        console.log(i * 2)
        console.log("hola como estas?")
        console.log(true)
      
   }

   console.log("termine")

}

probandoFor()

// let num = 10 

// num = num + 12
// num += 16

// num++

// crear una funcion que sume todos los numeros que hay desde el 1 hasta el 10

// 1 + 2 + 3 + 4 ..... + 9 + 10 = ?

// SOLO SUMEMOS LOS NUMEROS IMPARES

const sumatoria = ( numInicial ,numFinal )=>{

    let count = 0 

    for( let i = numInicial; i <= numFinal; i++ ){

        // count += i
        if( i % 2 !== 0 ){
            count = count + i
        }

    }

    return count

}

let resultado = sumatoria( 14, 16 ) 
console.log(resultado)


let n = 54

// quiero saber si un numero es par
// console.log( n % 2 === 0 )

// quiero si el numero es impar
// console.log( n % 2 !== 0 ) 



// dado un numero, mostrar por consola la tabla de multiplicar de dicho numero

// 7 

// 7 * 1 = 7
// 7 * 2 = 14
// 7 * 3 = 21
// 7 * 10 = 70

const tablaDeMultiplicar = ( numero )=>{

    // for(let i = 1; i <= 10; i++){
    //     console.log( `${numero} * ${i} = ${ numero * i } ` )
    // }
    
    // let i = 20
    // while( i <= 10){
    //     console.log( numero + " * " + i + " = " + numero * i  )
    //     i++
    // }

    let i = 20

    do{
        console.log( numero + " * " + i + " = " + numero * i  )
        i++
    } 
    while( i <= 10)

}

tablaDeMultiplicar(3)