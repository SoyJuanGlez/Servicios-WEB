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