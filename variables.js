// ANCHOR ---> Variables ---> cajas que guardan algo

// let - const

// let edad = 30

let nombre = "pepe";

let edad = 30;

const apellido = "perez";

console.log(edad);
// console.log( nombre )

edad = 31;

console.log(edad);

console.log(apellido);

// apellido = "lopez"

// console.log(apellido)

// ANCHOR ---> TIPOS DE DATOS

// STRING ---> CADENAS DE TEXTO

// let frase = ' hola como estas "bien y vos" '
let frase = "hola como estas?";
console.log(frase);
let telefono = "45667788";
let dni = "1232131";

// NUMBER

let altura = 100.5;

console.log(typeof altura);
console.log(typeof dni);

// booleanos --> true - false

let logueado = true;
let terminoLaCompra = false;

console.log(typeof logueado);

// NO TENER VALOR
let usuarioLogueado = null;

// TENER UN VALOR PERO INDEFINIDO
let usuarioLogueado2 = undefined;

// EL RESULTADO DE UNA OPERACION QUE NO SE PUEDE REALIZAR --> Not a Number
let x = 21;
let y = "hola";
let z = x * y;
console.log(z);

y = 22;
console.log(y);

// OPERADORES

// MATEMATICOS
let a = 12;
let b = 6;
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b); // ---> 2
console.log(a % b); // ---> 0

// concatenar strings

let nom = "pepito";
let ape = "gomez";

console.log("Hola " + nom + " " + ape + " como estas?");
console.log(`Hola ${nom} ${ape} como estas?`);

// TEMPLATE LITERALS ---> backticks

// COMPARACION ---> siempre devuelven un booleano ( true o false )

let j = 2;
let k = "2";

// console.log(j == k); // ---> comparacion simple ---> solo se verifica el dato 
// console.log(j === k); // ---> comparacion estricta  ---> se verifica el dato pero tambien el tipo de dato
console.log( j !== k )

// console.log(j > k);
// console.log(j < k);
// console.log(j <= k);
// console.log(j >= k);

let logged = false

let leDoyAcceso = logged === true

// operador de negacion 
console.log("------------------")
let bool = true
console.log( !bool )

// LOGICOS

console.log("--------")
let tienePermisoAdmin = true
let siEstaLogueado = true

// and ---> &&
// devuelve true cuando absolutamente todas las condiciones son true
let tienePermiso = siEstaLogueado === true && tienePermisoAdmin === true

// COMPETENCIA DE BICI 
// primero que sea mayor de edad  o si no que venga con un acompáñante
// que tenga los estudios medicos 
// if( estudiosMedicos && edad >= 18 ){

// }


// or  ---> ||
// devuelve false cuando absolutamente todas las condiciones son false
let tienePermiso2 = siEstaLogueado === true || tienePermisoAdmin === true

console.log( tienePermiso )
console.log( tienePermiso2 )

// falsy --> 0 / "" / undefined / null 
// truthy -> "hola" / 1 / [] / {} / 

// && --> me devuelve el ultimo truthy o el primer falsy

// || --> me devuelve el primer truthy o el ultimo falsy

let truthys =  siEstaLogueado === true &&  0 && null && "hola" 
console.log(truthys)

let falsys = false || 0 || null || undefined


console.log(falsys)

// let compraFinalizada = true

//  compraFinalizada  && <h1>Gracias por tu compra</h1>

let r = true
let n = false

// r && n
