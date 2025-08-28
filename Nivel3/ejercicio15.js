function Promesa(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Promesa cumplida");
        }, 2000);
    });
}

async function ejecutarPromesa(){
    let resultado = await Promesa();
    console.log(resultado);
}

ejecutarPromesa();