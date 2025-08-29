// Importo el modulo readline para leer datos del usuario por consola
const readline = require('readline'); //Esto lo investigamos como se hacia 

//interfaz para leer desde la consola
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Pido al usuario que ingrese su edad
rl.question('Ingresa tu edad: ', (input) => {
    const edad = parseInt(input); // Convierto la entrada a numero
    if (isNaN(edad)) {
        // Si no es un numero valido, muestro un mensaje de error
        console.log("Por favor, ingresa un número válido.");
    } else if (edad >= 18) {
        // Si la edad es mayor o igual a 18, indico que es mayor de edad
        console.log("Eres mayor de edad.");
    } else {
        // Si la edad es menor a 18, indico que es menor de edad
        console.log("Eres menor de edad.");
    }
    rl.close(); // Cierro la interfaz
});




