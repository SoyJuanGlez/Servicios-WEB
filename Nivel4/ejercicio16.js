function validarCorreo(correo) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(correo);
}

console.log(validarCorreo("juan@gmail.com")); // true
console.log(validarCorreo("juan.gmail.com")); // false