// Final
// 1 ---> previo al parcial
// 2 ---> bubble sort
// 3 ---> matrices  a - b

// ANCHOR ---> Matrices

let matriz = [
  [1, 2, 4],
  [4, 1, 6],
  [7, 4, 2],
];

let arr = ["das", true, 123];

console.log(matriz[2][1]);

// FILAS Y COLUMNAS
let matrix = [
  [1, 2, 4], // fila 0
  [4, 1, 6], // fila 1
  [7, 4, 2], // fila 2
];

console.log(matrix[2][1]);

console.table(matrix);

// RECORRER
// recorrer una fila determinada ---> le pido la longitud a la fila

const recorrerFila = ( mat, numFila  ) => {
  
    for(let i = 0 ; i < mat[numFila].length ; i++){
       console.log( mat[numFila][i] )
    }

}


recorrerFila(matrix, 0)

// recorrer una columna determinada --> le pido la longitud a la matriz
let matrix2 = [
    [1, 2, 4], // fila 0
    [4, 1], // fila 1
    [7, 4, 7], // fila 2
];
console.log("--------------")

const recorrerCol = (mat, numCol)=>{
   
    let contador = 0

    for(let i = 0; i < mat.length ; i++){
        if( mat[i][numCol] !== undefined ){

            contador += mat[i][numCol]
        }
    }

    return contador

}
let res = recorrerCol(matrix2, 0)
console.log(res)

// CUANDO LA MATRIZ ES CUADRADA ( mismas filas que columnas y esta completa)


let matrix3 = [
    [1, 2, 4], // fila 0
    [4, 1, 3], // fila 1
    [7, 4, 7], // fila 2
];

// recorrer la diagonal principal --> un for --> longitud a la matriz
// matrix3[0][0]
// matrix3[1][1]
// matrix3[2][2]

const recorrerPrincipal = (mat)=>{
    for(let i = 0; i < mat.length; i++){
        mat[i][i]
    }
}




// recorrer la diagonal secundaria --> for --> longitud a la matriz 
let matrix4 = [
    [1, 2, 4], // fila 0
    [4, 1, 3], // fila 1
    [7, 4, 7], // fila 2
];
// matrix3[0][2]
// matrix3[1][1]
// matrix3[2][0]
console.log("-----")
const recorrerSec = mat =>{

    for(let i = 0; i < mat.length; i++){
       console.log(  mat[i][ mat.length - 1 - i ] )
     
    }

}
recorrerSec(matrix4)


// recorrer la matriz completa ---> doble ciclo for ( esto es lo medianamente dificil )


let matrix5 = [
    [1, 2, 4], // fila 0
    [4, 1, 3], // fila 1
    [7, 4, 7], // fila 2
];

// const recorrerCompleta = mat => {

//     for( let i = 0 ; i < mat.length; i++  ){ // i maneja las filas
//         console.log( "estoy en la fila " + i )

//         for(let j = 0; j < mat[i].length; j++ ){ // j maneja las columnas
//             console.log("estoy en la columna " + j)
//            console.log( mat[i][j])
//         }
        
//     }

// }

// recorrerCompleta(matrix5)

const recorrerCompleta = mat => {

    for( let i = 0 ; i < mat.length; i++  ){
        for(let j = 0; j < mat[i].length; j++ ){ 
           mat[i][j]
        }  
    }

}

recorrerCompleta(matrix5)


// 

let febrero = [
  // EMPEZAREMOS A CONTAR LOS DIAS DESDE EL DIA LUNES
  // EL MES ES FEBRERO QUE TIENE 31 DIAS
  [1135, 2500, 900, 1600, 2800, 3650, 1100], // semana 1
  [1750, 1890, 1900, 1300, 898, 1750, 2800], // semana 2
  [1700, 1150, 1690, 1900, 1770, 4500, 2560], // semana 3
  [800, 1250, 1430, 2100, 1980, 1270, 950], // semana 4
];

//TODO
// CREANDO UNA FUNCION REUTILIZABLE...
// CALCULAR GASTO TOTAL DE LA TERCER SEMANA

const totalSemana = ( mes, numSemana )=>{

    let posicionSemana = numSemana - 1

    let contador = 0

    for( let i = 0; i < mes[posicionSemana].length; i++ ){
        contador += mes[posicionSemana][i]
    }

    return contador

}

let totalSemana3 = totalSemana( febrero, 3 )
console.log(totalSemana3)


//TODO
// CREANDO UNA FUNCION REUTILIZABLE...
// QUEREMOS SABER EL TOTAL DE LO QUE SE GASTO SUMANDO TOD´OS LOS DIAS SABADOS
// ¿COMO LO HARIAS?

const totalGastosDia = (mes, numDia )=>{
    let posicionDia = numDia - 1
    let acc = 0
    for(let i = 0 ; i < mes.length; i++ ){
        acc += mes[i][posicionDia]
    }
    return acc

}

let totalSabados = totalGastosDia(febrero, 6)
console.log( totalSabados )

//TODO
// CALCULAR EL TOTAL GASTADO DEL MES

const totalMensual = (mes)=>{

    let acc = 0
    for(let i = 0; i < mes.length; i++){

        for(let j = 0 ; j < mes[i].length; j++ ){
            acc += mes[i][j]
        }

    }

    return acc
}
let totalFebrero = totalMensual(febrero)
console.log(totalFebrero)






// TODO
// EN EL DIA QUE MAS SE GASTO, CUANTO FUE ?
// EN QUE DIA Y SEMANA , SE PRODUJO ESE GASTO?



