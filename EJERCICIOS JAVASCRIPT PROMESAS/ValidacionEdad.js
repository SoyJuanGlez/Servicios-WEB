function VerificarEdad(edad) {
    return new Promise((resolve, reject) => {
        // Si la edad es mayor o igual a 18, la promesa se resuelve
        if (edad >= 18) {
            resolve("Compra permitida");
        } else {
            // Si la edad es menor a 18, la promesa se rechaza
            reject("Debes ser mayor de edad para comprar este producto");
        }
    });
}

VerificarEdad(20)
    .then(mensaje => console.log(mensaje))
    .catch(error => console.log(error));