// ANCHOR ---> if / ternario / switch - case

// admin ---> tiene permiso para todo
// vendedor ---> tiene permiso para editar sus cosas
// comprador ---> tiene acceso solo para ver y comprar producto

const determinarPermisos = (rolUsuario) => {
  let permiso = undefined;

  if (rolUsuario === "admin") {
    permiso = " tiene permiso para todo";
  } else if (rolUsuario === "vendedor") {
    permiso = "tiene permiso para editar sus cosas";
  } else {
    permiso = "tiene acceso solo para ver y comprar producto";
  }

  return permiso;
};

let tienePermiso = determinarPermisos("admin");
console.log(tienePermiso);

let tienePermiso2 = determinarPermisos("comprador");
console.log(tienePermiso2);

// ternario ---> condicion ? aca va lo quiero hacer si se cumple : y aca si no se cumple

// clima es lluvioso ---> si, llevalo
// clima no es lluvioso ---> no, no hace falta

const llevoParaguas = (clima) =>
  clima === "lluvioso" ? "si, llevalo" : "no, no hace falta";

let loLlevo = llevoParaguas("lluvioso");
console.log(loLlevo);

// impuesto fijo ---> 200

// audi 50
// vw  60
// volvo 30
// renault  55
// bmw 70
// fiat 80

const calcularImpuesto = (marcaDelAuto) => {
  let impuesto = 200;

  switch (marcaDelAuto) {
    case "audi":
      impuesto += 50;
      break;
    case "vw":
      impuesto += 60;
      break;
    case "volvo":
      impuesto += 70;
      break;
    case "renault":
    case "bmw":
    case "fiat":
      impuesto += 20;
      break;
    default:
      impuesto = "Su auto esta excento";
  }

  

  return impuesto;
};

let totalPagar = calcularImpuesto("fiat");
console.log(totalPagar);

let totalPagar2 = calcularImpuesto("audi");
console.log(totalPagar2);

// let x = 20

// // x = 20 + 5

// x = x + 5

// x += 5

// x = x + 1
// x += 1
// x--

