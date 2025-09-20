function autenticarUsuario(usuario, contraseña) {
    return new Promise((resolve, reject) => {
        if (usuario === "admin" && contraseña === "1234") {
            resolve({
                usuario,
                rol: "administrador",
                mensaje: "Inicio de sesión exitoso"
            });
        } else {
            reject({
                error: "Credenciales incorrectas",
                codigo: 401
            });
        }
    });
}



autenticarUsuario("admin", "1234")
    .then(respuesta => console.log(respuesta))
    .catch(error => console.log(error));