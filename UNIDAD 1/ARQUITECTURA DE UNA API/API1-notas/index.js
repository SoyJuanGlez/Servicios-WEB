const express = require('express');
const app = express();
app.use(express.json());

// Datos simulados en memoria
let notas = [
  { id: 1, titulo: "Nota 1", contenido: "Contenido de la nota 1" },
  { id: 2, titulo: "Nota 2", contenido: "Contenido de la nota 2" }
];

app.get('/notas', (req, res) => {
  res.json(notas);
});

app.post('/notas', (req, res) => {
  const { titulo, contenido } = req.body;
  const nuevaNota = { id: Date.now(), titulo, contenido };
  notas.push(nuevaNota);
  res.status(201).json(nuevaNota);
});

app.put('/notas/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { titulo, contenido } = req.body;
  const nota = notas.find(n => n.id === id);
  if (nota) {
    nota.titulo = titulo;
    nota.contenido = contenido;
    res.json(nota);
  } else {
    res.status(404).json({ mensaje: "Nota no encontrada" });
  }
});

// PATCH: Actualizar parcialmente una nota
app.patch('/notas/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const nota = notas.find(n => n.id === id);
  if (nota) {
    const { titulo, contenido } = req.body;
    if (titulo !== undefined) nota.titulo = titulo;
    if (contenido !== undefined) nota.contenido = contenido;
    res.json(nota);
  } else {
    res.status(404).json({ mensaje: "Nota no encontrada" });
  }
});

app.delete('/notas/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = notas.findIndex(n => n.id === id);
  if (index !== -1) {
    notas.splice(index, 1);
    res.json({ mensaje: "Nota eliminada" });
  } else {
    res.status(404).json({ mensaje: "Nota no encontrada" });
  }
});

// OPTIONS: Mostrar los métodos permitidos para /notas y /notas/:id
app.options('/notas', (req, res) => {
  res.set('Allow', 'GET,POST,OPTIONS').send();
});

app.options('/notas/:id', (req, res) => {
  res.set('Allow', 'GET,PUT,PATCH,DELETE,OPTIONS').send();
});

// Iniciar el servidor
app.listen(3000, () => {
  console.log('API de notas escuchando en el puerto 3000');
});



