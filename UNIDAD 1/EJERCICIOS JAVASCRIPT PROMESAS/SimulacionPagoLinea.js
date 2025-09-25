function procesarPago(monto) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (monto > 0) {
                resolve(`Pago exitoso de $${monto}`);
            } else {
                reject('Error: Monto inválido');
            }
        });
    });
}

procesarPago(100)
    .then(mensaje => console.log(mensaje))
    .catch(error => console.log(error));