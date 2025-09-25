// Declaro una función que retorna una promesa que se resuelve después de 2 segundos
function Promesa(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Promesa cumplida");
        }, 2000);
    });
}

// Función asíncrona que espera la resolución de la promesa y muestra el resultado
async function ejecutarPromesa(){
    let resultado = await Promesa();
    console.log(resultado);
}

// Llamo a la función asíncrona
ejecutarPromesa();