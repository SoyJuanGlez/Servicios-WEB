function descargarArchivo(tamaño) {
    return new Promise((resolve, reject) => {
        // Si el tamaño es menor o igual a 50MB, la descarga se completa
        if (tamaño <= 50) {
            resolve("Descarga completada");
        } else {
            // Si el tamaño es mayor a 50MB, se rechaza la descarga
            reject("El archivo es demasiado grande");
        }
    });
}

descargarArchivo(60)
    .then(mensaje => console.log(mensaje))
    .catch(error => console.log(error));