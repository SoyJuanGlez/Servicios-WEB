let tareas = [];

function agregarTarea(descripcion) {
    let nuevaTarea = {
        id: tareas.length + 1,
        descripcion: descripcion,
        completada: false
    };
    tareas.push(nuevaTarea);
    console.log("Tarea agregada:", nuevaTarea);
}

function eliminarTarea(id) {
    tareas = tareas.filter(tarea => tarea.id !== id);
    console.log("Tarea eliminada", id);
}

function completarTarea(id) {
    let tarea = tareas.find(tarea => tarea.id === id);
    if (tarea) {
        tarea.completada = true;
        console.log("Tarea completada:", tarea);
    } else {
        console.log("Tarea no encontrada:", id);
    }
}

agregarTarea("Acabar el proyecto");
agregarTarea("Terrminar la documentación");
completarTarea(1);
eliminarTarea(2);
console.log("Lista de tareas:", tareas);