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
