// Objeto de inventario con productos y cantidades disponibles
const inventario = { 
    "laptop": 5, 
    "mouse": 10, 
    "teclado": 0 
};

function verificarStock(producto, cantidad) {
    return new Promise((resolve, reject) => {
        // Verifica si el producto existe en el inventario
        if (inventario.hasOwnProperty(producto)) {
            //El metodo hasOwnProperty() devuelve un valor booleano que 
            //indica si el objeto tiene la propiedad especificada como una propiedad directa del objeto.
            //Este metodo lo tuve que buscar porque no lo conocia.

            // Verifica si hay suficiente cantidad disponible
            if (inventario[producto] >= cantidad) {
                resolve("Stock disponible, procediendo con la compra");
            } else {
                reject("Stock insuficiente");
            }
        } else {
            reject("Stock insuficiente");
        }
    });
}

verificarStock("laptop", 3)
    .then(mensaje => console.log(mensaje))
    .catch(error => console.log(error));