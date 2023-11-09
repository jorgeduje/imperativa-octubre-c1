let arrayCuentas = [
    {
      nroCuenta: 5486273622,
      tipoDeCuenta: "Cuenta Corriente",
      saldoEnPesos: 27771,
      titularCuenta: "pepito",
    },
    {
      nroCuenta: 1183971869,
      tipoDeCuenta: "Caja de Ahorro",
      saldoEnPesos: 8675,
      titularCuenta: "maria",
    },
    {
      nroCuenta: 9582019689,
      tipoDeCuenta: "Caja de Ahorro",
      saldoEnPesos: 27363,
      titularCuenta: "juancito",
    },
    {
      nroCuenta: 1761924656,
      tipoDeCuenta: "Cuenta Corriente",
      saldoEnPesos: 32415,
      titularCuenta: "carmen",
    },
    {
      nroCuenta: 7401971607,
      tipoDeCuenta: "Cuenta Unica",
      saldoEnPesos: 18789,
      titularCuenta: "Jack",
    },
];

let consultar = function( titular ){
        
    for(let i = 0; i < this.clientes.length; i++){
        if( this.clientes[i].titularCuenta === titular){
            return this.clientes[i]
        }
    }
    
    return "lo siento, cliente no encontrado"

}



let banco = {
    clientes: arrayCuentas,
    consultarCliente: consultar,
    deposito:  function(titular, cantidad){

        let cliente = this.consultarCliente(titular) // {} / ""
       
        if( typeof cliente === "object" ){
            cliente.saldoEnPesos += cantidad
            return `Deposito realizado, su nuevo saldo es ${cliente.saldoEnPesos}`
        }else{
            return "lo siento"
        }

     }
}

// let clienteEncontrado = banco.consultarCliente("oscar")
// console.log(clienteEncontrado)

let ticket = banco.deposito("juancito", 10000)
console.log(ticket)

// let x = "adsad"

// x.cualquieraCosa

// console.log( banco.cualquieraCosa )

console.log(typeof 2)

// COPIA POR VALOR VS COPIA POR REFERENCIA
// 1, "dasd", tru ---> valor
// [ ] - {} ---> referencia