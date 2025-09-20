//aqui creamos una funcion que valide si un correo es valido o no
//se valida con una expresion regular
function validarCorreo(correo) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(correo);
}

console.log(validarCorreo("juan@gmail.com")); // true
console.log(validarCorreo("juan.gmail.com")); // false