// Declaro una función que retorna una promesa que se resuelve después de 2 segundos
function Promesa(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Promesa cumplida");
        }, 2000);
    });
}

// Uso la promesa y muestro el mensaje cuando se resuelve
Promesa().then((mensaje) => {
    console.log(mensaje);
});