function Promesa(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Promesa cumplida");
        }, 2000);
    });
}

Promesa().then((mensaje) => {
    console.log(mensaje);
});