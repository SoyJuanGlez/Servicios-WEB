const express = require('express');
const app = express();
app.use(express.json());

// Datos simulados en memoria
let usuarios = [
  { id: 1, nombre: "Juan", email: "juan@email.com" },
  { id: 2, nombre: "Pedfo", email: "pedro@email.com" }
];

// GET: Obtener todos los usuarios
app.get('/usuarios', (req, res) => {
  res.json(usuarios);
});

// POST: Agregar un nuevo usuario
app.post('/usuarios', (req, res) => {
  const { nombre, email } = req.body;
  const nuevoUsuario = { id: Date.now(), nombre, email };
  usuarios.push(nuevoUsuario);
  res.status(201).json(nuevoUsuario);
});

// PUT: Editar un usuario existente
app.put('/usuarios/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { nombre, email } = req.body;
  const usuario = usuarios.find(u => u.id === id);
  if (usuario) {
    usuario.nombre = nombre;
    usuario.email = email;
    res.json(usuario);
  } else {
    res.status(404).json({ mensaje: "Usuario no encontrado" });
  }
});

// DELETE: Eliminar un usuario
app.delete('/usuarios/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = usuarios.findIndex(u => u.id === id);
  if (index !== -1) {
    usuarios.splice(index, 1);
    res.json({ mensaje: "Usuario eliminado" });
  } else {
    res.status(404).json({ mensaje: "Usuario no encontrado" });
  }
});

// Iniciar el servidor
app.listen(4000, () => {
  console.log('API de usuarios escuchando en el puerto 4000');
});