// ejercicio 1 --> cosas previas al parcial
// ejercicio 2 --> bubble sort
// ejercicio 3 a ---> matrices con un solo for
// ejercicio 3 b ---> matrices con recorrerla completa // doble for

// TODO FILTRAR LOS PRODUCTOS QUE TENGAN MENOS DE 10 UNIDADES EN STOCK
// Y RETORNARLOS

let items = [
  {
    nombre: "televisor",
    precio: 500,
    stock: 7,
  },
  {
    nombre: "tablet",
    precio: 350,
    stock: 12,
  },
  {
    nombre: "celular",
    precio: 400,
    stock: 21,
  },
  {
    nombre: "notebook",
    precio: 600,
    stock: 5,
  },
];

const filtrador = (arr) => {
  let arrayFiltrado = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].stock < 10) {
      arrayFiltrado.push(arr[i]);
    }
  }

  return arrayFiltrado;
};

let res = filtrador(items);
console.log(res);

// TODO ORDENAR EL ARREGLO DE FORMA DESCENDENTE

// let edades = [2, 12, 1, 5, 32, 56, 7];
let palabras = ["casa", "perro", "gato", "mariposa"];

const bubble = (arr) => {
  let aux;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        aux = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = aux;
      }
    }
  }
};

bubble(palabras);
console.log(palabras);

// TODO ORDENAR EL ARREGLO DE FORMA ASCENDENTE SEGUN LA CANTIDAD DE STOCK

let productos = [
  {
    nombre: "televisor",
    precio: 500,
    stock: 7,
  },
  {
    nombre: "tablet",
    precio: 350,
    stock: 21,
  },
  {
    nombre: "celular",
    precio: 400,
    stock: 12,
  },
  {
    nombre: "notebook",
    precio: 600,
    stock: 16,
  },
];

const bubbleObj = (arr) => {
  let aux;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j].stock > arr[j + 1].stock) {
        aux = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = aux;
      }
    }
  }
};

bubbleObj(productos);
console.log(productos);

// DADA LA SIGUIENTE MATRIZ

let matriz1 = [
  [2, 4, 3],
  [3, 1, 5], // [9, 3, 15]
  [8, 4, 9],
];

// TODO ---> UN SOLO CICLO
// CREAR UNA FUNCION QUE RETORNE UN NUEVO ARREGLO
// CON TODOS LOS ELEMENTOS DE LA FILA de la posicion 1 (multiplicados x 3)

const fila = (mat) => {
  let arr = [];

  for (let i = 0; i < mat[1].length; i++) {
    arr.push(mat[1][i] * 3);
  }

  return arr;
};

let resultado = fila(matriz1);
console.log(resultado);

let matriz2 = [
  [2, 4, 3],
  [3, 1, 5],
  [5, 4, 9],
];

// TODO CREAR UNA FUNCION QUE MODIFIQUE LOS ELEMENTOS IMPARES DE
// LA COLUMNA 0, POR UN numero cero"

const columna = (mat) => {
  for (let i = 0; i < mat.length; i++) {
    if (mat[i][0] !== undefined && mat[i][0] % 2 !== 0) {
      mat[i][0] = 0;
    }
  }
};

columna(matriz2);
console.table(matriz2);

let matriz5 = [
  [2, 4, 3],
  [3, 1, 5],
  [8, 4, 9],
];

// TODO --> ACA DOBLE FOR
// CAMBIAR TODOS LOS ELEMENTOS DE LA MATRIZ POR SU NEGATIVO

const matrizCompleta = (mat) => {
  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[i].length; j++) {
      // mat[i][j] = mat[i][j] * (-1)
      mat[i][j] *= -1;
    }
  }
};

let febrero = [
  // EMPEZAREMOS A CONTAR LOS DIAS DESDE EL DIA LUNES
  // EL MES ES FEBRERO QUE TIENE 31 DIAS
  [1231, 2500, 900, 1600, 2800, 3650, 1100], // semana 1
  [1750, 1890, 4500, 1300, 898, 1750, 2800], // semana 2
  [1700, 1150, 1690, 1900, 1770, 2222, 2560], // semana 3
  [800, 1250, 1430, 2100, 1980, 1270, 950], // semana 4
];

// TODO

// EN EL DIA QUE MAS SE GASTO, CUANTO FUE ?
// EN QUE DIA Y SEMANA , SE PRODUJO ESE GASTO?

const mayorGasto = (mat) => {
    let dias = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"]
  let mayor = mat[0][0]; // 1231
  let dia = 0; // 5
  let semana = 0; // 2

  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[i].length; j++) {
      if (mayor < mat[i][j]) {
        mayor = mat[i][j];
        semana = i;
        dia = j;
      }
    }
  }

  semana += 1;

  return { mayor, dia: dias[ dia ], semana };
};

let obj = mayorGasto(febrero);

console.log(
  `El dia que mas se gasto fue el dia ${obj.dia} de la semana ${obj.semana} con un monto total de ${obj.mayor}`
);
