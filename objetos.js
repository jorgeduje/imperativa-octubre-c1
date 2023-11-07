// Objetos literales

// let nombreUsuario = "pepe"
// let edadUsuario = 22
// let direccionUsuario = "italia 190"
// const saludar = ()=>{
//     return "hola soy pepe"
// }

// propiedades y metodos

const saludarFn = function () {
  return "hola soy " + this.nombre;
};

// pares clave - valor
let usuario1 = {
  nombre: "carmen",
  edad: 22,
  direccion: "italia 190",
  saludar: saludarFn,
};

let usuario2 = {
  nombre: "pepe",
  edad: 21,
  direccion: "italia 170",
  saludar: saludarFn,
};

// DOT NOTATION
// console.log( usuario.nombre )
// console.log( usuario.edad )

console.log(usuario1.saludar());
console.log(usuario2.saludar());


let usuario3 = {
    nombre: "carmen",
    edad: 22,
    direccion: "italia 190",
    saludar: saludarFn,
}

// Modificar 
usuario3.edad += 1

// Agregar
usuario3.apellido = "perez"

usuario3.nombre = "maria"


// Eliminar ---> ESTO NO SE USA CASI NUNCA

delete usuario3.direccion

console.log( usuario3 )


const persona = {
    nombre: "carmen",
    edad: 22,
    direccion: "italia 190",
    saludar: saludarFn,
   
}


persona.nombre = "nuevo nombre"
persona.nuevaPropieda = "una nueva"

console.log(persona)

// ESTO NOOOO
// persona = {
//     nombre: "juan"
// }

// const a = [ 1, 2 ,4 ]
// a.push(2)
// console.log(a)

// arreglos de objetos

// No Sql ---> estudiantes ( coleccion ) -- objetos ( documentos )
// Sql ---> estudiantes ( tabla ) -- objetos (registro)

const calcularPromedio = function(){
    
    let acc = 0
    for(let i= 0; i < this.notas.length; i++){
        acc += this.notas[i]
    }

    return acc / this.notas.length

}

let estudiantes = [
    {
        nombre: "pepe",
        edad: 12,
        notas: [9, 2, 10],
        promediar: calcularPromedio
    },
    {
        nombre: "maria",
        edad: 15,
        notas: [8, 9, 10],
        promediar: calcularPromedio
    },
    {
        nombre: "juancito",
        edad: 17,
        notas: [10, 9, 10],
        promediar: calcularPromedio
    },
]


const funcionParaLaProfesora = (array)=>{

    for(let i = 0; i < array.length; i++){
        console.log(`el promedio de ${array[i].nombre} es de : ` , array[i].promediar())
    }

}

funcionParaLaProfesora( estudiantes )