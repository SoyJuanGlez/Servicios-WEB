// Base de datos local de ciudades con su clima
const Clima = {
    "Barcelona": { temperatura: 25, condicion: "Soleado" },
    "Tepic": { temperatura: 28, condicion: "Nublado" },
    "Monterrey": { temperatura: 22, condicion: "Lluvia" }
};

function consultarClima(ciudad) { 
    return new Promise((resolve, reject) => { 
        if (Clima[ciudad]) { //verifica si la ciudad existe en la base de datos local 
            resolve({
                ciudad,
                temperatura: Clima[ciudad].temperatura,
                condicion: Clima[ciudad].condicion
            });
        } else {
            reject({
                error: "Ciudad no encontrada",
                codigo: 404
            });
        }
    });
}

consultarClima("Tepic")
    .then(res => console.log(res))
    .catch(err => console.log(err));