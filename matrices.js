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
// recorrer la diagonal principal --> un for --> longitud a la matriz
// recorrer la diagonal secundaria --> for --> longitud a la matriz 

let matrix3 = [
    [1, 2, 4], // fila 0
    [4, 1, 3], // fila 1
    [7, 4, 7], // fila 2
];

// matrix3[0][0]
// matrix3[1][1]
// matrix3[2][2]

// matrix3[0][2]
// matrix3[1][1]
// matrix3[2][0]


// recorrer la matriz completa ---> doble ciclo for ( esto es lo medianamente dificil )

