// Ejemplo de cuentas bancarias con saldos
const cuentas = {
    "12345": 1000,
    "67890": 500,
    "54321": 50
};

function verificarSaldo(cuenta, monto) {
    return new Promise((resolve, reject) => {
        const saldoDisponible = cuentas[cuenta]; //obtiene el saldo de la cuenta
        if (saldoDisponible >= monto) { //verifica si hay fondos suficientes 
            const saldoRestante = saldoDisponible - monto;  
            resolve({
                cuenta,
                saldoRestante,
                mensaje: "Transacción aprobada"
            });
        } else {
            reject({
                error: "Fondos insuficientes",  
                saldoDisponible,
                codigo: 402
            });
        }
    });
}

verificarSaldo("54321", 200)
    .then(res => console.log(res))
    .catch(err => console.log(err));