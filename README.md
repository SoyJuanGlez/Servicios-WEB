## Ejercicios de Javascript-parejas
## MIRANDA JARAMILLO FCO. SALVADOR - C19400458
## GONZALEZ DELGADO JUAN CARLOS - 21400689


## Ejercicio 1.
Variables y tipos de datos  
Se muestra cómo declarar y utilizar variables con tipos de datos primitivos en JavaScript. 
Se usa la palabra reservada `let` para definir la variable, se asigna una cadena de texto y se imprime en la consola.

// Declaro una constante
const nombre = "Francisco";

// Imprimo el valor de la constante en consola
console.log(nombre);

## Ejercicio 2.
Operaciones matemáticas  
Se realizan operaciones aritméticas básicas utilizando variables numéricas. 
Se definen las variables con los números y se muestran los resultados de las operaciones en la consola.

// Declaro dos variables numéricas
let num1 = 10;
let num2 = 5;

// Realizo operaciones usando las variables num1 y num2
const suma = num1 + num2; // Suma de num1 y num2
const resta = num1 - num2; // Resta de num1 y num2
const multiplicacion = num1 * num2; // Multiplicacion de num1 y num2
const division = num1 / num2; // Division de num1 entre num2

// Imprimo los resultados de las operaciones en consola
console.log("Suma: " + suma);
console.log("Resta: " + resta);
console.log("Multiplicación: " + multiplicacion);
console.log("División: " + division);


## Ejercicio 3.
Lógica condicional  
Se implementa una condición para decidir si una persona es mayor de edad. 
Si la edad ingresada es igual o superior a 18, se indica en la consola que la persona es mayor de edad.

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

## Ejercicio 4.
Uso de bucles  
Se utiliza un ciclo `for` para repetir una acción desde el número 1 hasta el 10, 
especificando el punto de inicio y finalización del ciclo.

// Imprimo los números del 1 al 10 usando un ciclo for
for(let i = 1; i <= 10; i++) {
    console.log("Numero: " + i);
}

## Ejercicio 5.
Funciones con parámetros y retorno  
Se crea una función que recibe un nombre como parámetro y retorna un saludo personalizado. 
Se solicita el nombre mediante `prompt` y se concatena con el saludo para mostrarlo.

// Declaro una funcion que saluda a la persona cuyo nombre se pasa como argumento
function saludar(nombre) {
    console.log("Hola, " + nombre);
}

// Llamo a la funcion saludar
saludar("Juan");

## Ejercicio 6.
Acceso a elementos de un array  
Se recorre un arreglo de tamaño 7 y se muestra el segundo elemento utilizando su índice correspondiente.

// Declaro un arreglo de ciudades
let ciudades = ["Madrid", "Barcelona", "Londres", "New York", "Los Angeles", "Chicago"];

// Imprimo la segunda ciudad del arreglo
console.log("La segunda ciudad es:", ciudades[1]);

## Ejercicio 7.
Iterar arrays con forEach  
El método `forEach` permite ejecutar una acción para cada elemento de un array, 
mostrando cada valor en la consola.

// Declaro un arreglo de numeros
let numeros = [2,4,6,8,10];

// Recorro el arreglo e imprimo cada numero
numeros.forEach((num) => {
    console.log(num);
});

## Ejercicio 8.
Objetos y propiedades  
Se define un objeto con atributos que representan a una persona. 
Se accede y muestra únicamente el nombre del objeto en la consola.

// Declaro un objeto persona con varias propiedades
const persona = {
    nombre: "Juan",
    edad: 30,
    profesion: "Desarrollador"
};

// Imprimo el nombre de la persona
console.log(persona.nombre);

## Ejercicio 9.
Agregar propiedades a objetos  
A un objeto previamente definido se le añade una nueva propiedad de manera dinámica.

// Declaro un objeto persona con varias propiedades, incluyendo nacionalidad
const persona = {
    nombre: "Juan",
    edad: 30,
    profesion: "Desarrollador",
    nacionalidad: "Mexicana"
};

// Imprimo la nacionalidad de la persona
console.log(persona.nacionalidad);

## Ejercicio 10.
Filtrar arrays con filter  
Se utiliza el método `filter` para crear un nuevo arreglo que solo contiene los elementos 
que cumplen con la condición de ser mayores de 18 años.

// Declaro un arreglo de edades
let edades = [12,18,25,10,30,16];

// Filtro las edades mayores o iguales a 18 con filter
const mayoresDeEdad = edades.filter(edad => edad >= 18);

// Imprimo las edades filtradas
console.log("Edades mayores o iguales a 18:", mayoresDeEdad);

## Ejercicio 11.
Transformar arrays con map  
El método `map` se emplea para recorrer un array y elevar cada elemento al cuadrado usando `Math.pow`.

// Declaro un arreglo de números
let numeros = [1, 2, 3, 4, 5];

// Creo un nuevo arreglo con los números elevados al cuadrado
let numerosAlCuadrado = numeros.map(num => num * num);

// Imprimo el nuevo arreglo
console.log("Números al cuadrado:", numerosAlCuadrado);

## Ejercicio 12.
Reducir arrays con reduce  
Se define un array y se utiliza `reduce` para sumar todos sus elementos, 
obteniendo un único resultado total.

// Declaro un arreglo de precios
let precios = [10,20,30,40];

// Sumo todos los precios usando reduce
let suma = precios.reduce((suma, precio) => suma + precio, 0);

// Imprimo la suma total
console.log("La suma de los precios es:", suma);

## Ejercicio 13.
Asincronía con setTimeout  
Se crea una función que muestra un saludo de manera retardada usando `setTimeout`, 
haciendo que el mensaje aparezca después de 3 segundos.

//creamos una funcion que salude despues de 3 segundos con setTimeout
function saludar() {
    setTimeout(() => {
        console.log("Hola");

    }, 3000);
} 

saludar();

## Ejercicio 14.
Promesas para operaciones asíncronas  
Se implementa una promesa que, tras cumplirse cierta condición, ejecuta diferentes acciones. 
Si todo es correcto, tras 3 segundos se muestra un mensaje.

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

## Ejercicio 15.
Promesas con sintaxis moderna  
Se utiliza la sintaxis moderna de promesas para manejar la asincronía, 
ejecutando una función y mostrando la respuesta al cumplirse la condición.

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

## Ejercicio 16.
Validar texto con regex  
Se emplea una expresión regular para comprobar si un correo electrónico tiene el formato adecuado y, 
si es válido, se muestra un mensaje en la consola.

//aqui creamos una funcion que valide si un correo es valido o no
//se valida con una expresion regular
function validarCorreo(correo) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(correo);
}

console.log(validarCorreo("juan@gmail.com")); // true
console.log(validarCorreo("juan.gmail.com")); // false

## Ejercicio 17.
Manipulación de cadenas  
Se transforma una cadena a mayúsculas con `toUpperCase` y se eliminan las comas usando `replace`.

//hacemos que una cadena de texto se convierta en mayusculas y ademas elimine las comas

let str = "Hola, como estas?";

console.log(str.toUpperCase().replace(',', ''));

## Ejercicio 18.
Ordenar datos alfabéticamente  
Se ordena un arreglo de cadenas alfabéticamente utilizando el método `sort`.

//ordenar alfabéticamente un array de palabras con el método sort() 
let palabras = ["banana", "manzana", "pera", "uva"];

console.log(palabras.sort());

## Ejercicio 19.
Consumir APIs externas con fetch  
Se utiliza `fetch` para obtener datos en formato JSON desde una API externa y se muestran en la consola.

// Funcion asincrona para obtener datos de una API externa
async function getData() {
  const url = 'https://jsonplaceholder.typicode.com/todos/1';
  try {
    // Hago una peticion fetch a la URL
    const response = await fetch(url);
    if (!response.ok) {
      // Si la respuesta no es exitosa, lanzo un error
      throw new Error(`Response status: ${response.status}`);
    }

    // Convierto la respuesta a JSON
    const result = await response.json();
    // Imprimo el resultado
    console.log(result);
  } catch (error) {
    // Manejo errores de la peticion
    console.error(error.message);
  }
}

// Llamo a la funcion para obtener los datos
getData();

## Ejercicio 20.
Operaciones CRUD básicas  
Se implementa una estructura para gestionar tareas, permitiendo crear, 
leer, actualizar y eliminar tareas específicas.

// Declaro un arreglo vacio para almacenar tareas
let tareas = [];

// Funcion para agregar una nueva tarea al arreglo
function agregarTarea(descripcion) {
    let nuevaTarea = {
        id: tareas.length + 1,
        descripcion: descripcion,
        completada: false
    };
    tareas.push(nuevaTarea);
    console.log("Tarea agregada:", nuevaTarea);
}

// Funcion para eliminar una tarea por su id
function eliminarTarea(id) {
    tareas = tareas.filter(tarea => tarea.id !== id);
    console.log("Tarea eliminada", id);
}

// Funcion para marcar una tarea como completada por su id
function completarTarea(id) {
    let tarea = tareas.find(tarea => tarea.id === id);
    if (tarea) {
        tarea.completada = true;
        console.log("Tarea completada:", tarea);
    } else {
        console.log("Tarea no encontrada:", id);
    }
}

// Ejemplo de uso de las funciones anteriores
agregarTarea("Acabar el proyecto");
agregarTarea("Terminar la documentación");
completarTarea(1);
eliminarTarea(2);
console.log("Lista de tareas:", tareas);