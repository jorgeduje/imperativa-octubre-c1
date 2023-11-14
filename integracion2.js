// TODO ---> 1
// Realizar una función que reciba por parámetro dos valores,
// el primero será numérico y el segundo booleano.
// Si el número es par y el booleano es true entonces retornar “Ha pasado la condición”.
// En cambio, si el número es impar y el booleano es false retornar “No ha pasado
// la condición”.
// Para cualquier otro caso, retornar -1

const verificar = (num, bool) => {
  if (num % 2 === 0 && bool === true) {
    return "Ha pasado la condición";
  } else if (num % 2 !== 0 && bool === false) {
    return "no ha pasado la condición";
  } else {
    return -1;
  }
};

let resultado = verificar(33, false);
console.log(resultado);

let productos = [
  {
    nombre: "motorola",
    precio: 40,
    cantidad: 5,
    categoria: "telefonia",
  },
  {
    nombre: "notebook",
    precio: 80,
    cantidad: 10,
    categoria: "computacion",
  },
  {
    nombre: "zapatilla",
    precio: 20,
    cantidad: 2,
    categoria: "indumentaria",
  },
  {
    nombre: "Macbook",
    precio: 100,
    cantidad: 7,
    categoria: "computacion",
  },
  {
    nombre: "samsung",
    precio: 60,
    cantidad: 15,
    categoria: "telefonia",
  },
  {
    nombre: "monitor",
    precio: 30,
    cantidad: 5,
    categoria: "computacion",
  },
];

// TODO ---> Simulacion frontend E-commerce

/* 
    1)Las personas encargadas del backend nos enviaron una lista de productos pero 
        se olvidaron de asignarles un ID unico para cada producto,
        nuestra tarea es agregarles ese ID unico a cada uno
        Requisito: debe empezar en 1 y ser secuencial 
    2) Nos solicitan crear un algoritmo que pueda determinar el dinero total que ingresaria
        si se venden todos los productos que tenemos en stock
    3) Debemos crear una funcion que al ejecutarse filtre los productos que sean
        X categoria y retornar dichos productos en un nuevo arreglo(debe ser dinamica)
    4) Por ultimo debemos crear una funcion para poder aumentar el precio de una categoria
    especifica que recibiremos por parametros y tambien recibiremos por cuanto queremos
    multiplicar dicho precio
  */

const generarId = (arreglo) => {
  for (let i = 0; i < arreglo.length; i++) {
    arreglo[i].id = i + 1; // {1} { 2} { 3}
  }
};

generarId(productos);

console.log(productos);

const determinarTotal = (array) => {
  let subTotal = 0;

  for (let i = 0; i < array.length; i++) {
    subTotal += array[i].precio * array[i].cantidad;
  }

  return subTotal;
};

let total = determinarTotal(productos);
console.log(total);

const filtrador = (array, nombreDeLaCategoria) => {
  let arrayFiltrado = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i].categoria === nombreDeLaCategoria) {
      arrayFiltrado.push(array[i]);
    }
  }

  return arrayFiltrado;
};

let prodTelefonia = filtrador(productos, "computacion");
console.log(prodTelefonia);

const aumentarPorCategoria = (array, categoria, incremento) => {

  for (let i = 0; i < array.length; i++) {

    if (array[i].categoria === categoria ) {
      array[i].precio *= incremento // 500 = 500 * 1.20 - 500 *= 1.20
    } 

  }

};

aumentarPorCategoria(productos, "telefonia", 1.20 )

console.log(productos)


let numeros = [ 5, 4, 7, 9, 2 , 3]

// console.log( Math.min(...numeros) )
// console.log( Math.max(...numeros) )

const determinarMenor = (array)=>{

  let menor =  array[0] // 2

  for (let i = 1; i < array.length; i++) {
    
    if( menor > array[i] ){

        menor = array[i]

    }
    
  }

  return menor 

}

let numeros2 = [ 5, 4, 7, 9, 2 , 3]

const determinarMAyor= (array)=>{

  let mayor =  array[0] // 9

  for (let i = 1; i < array.length; i++) {
    
    if( mayor < array[i] ){

        mayor = array[i]

    }
    
  }

  return mayor 

}