// Declaro un arreglo de precios
let precios = [10,20,30,40];

// Sumo todos los precios usando reduce
let suma = precios.reduce((suma, precio) => suma + precio, 0);

// Imprimo la suma total
console.log("La suma de los precios es:", suma);

