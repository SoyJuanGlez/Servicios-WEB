const express = require('express');
const app = express();
app.use(express.json());

// Datos simulados en memoria
let productos = [
  { id: 1, nombre: "Laptop", precio: 15000 },
  { id: 2, nombre: "Mouse", precio: 300 }
];

// GET: Obtener todos los productos
app.get('/productos', (req, res) => {
  res.json(productos);
});

// POST: Agregar un nuevo producto
app.post('/productos', (req, res) => {
  const { nombre, precio } = req.body;
  const nuevoProducto = { id: Date.now(), nombre, precio };
  productos.push(nuevoProducto);
  res.status(201).json(nuevoProducto);
});

// PUT: Editar un producto existente
app.put('/productos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { nombre, precio } = req.body;
  const producto = productos.find(p => p.id === id);
  if (producto) {
    producto.nombre = nombre;
    producto.precio = precio;
    res.json(producto);
  } else {
    res.status(404).json({ mensaje: "Producto no encontrado" });
  }
});

// DELETE: Eliminar un producto
app.delete('/productos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = productos.findIndex(p => p.id === id);
  if (index !== -1) {
    productos.splice(index, 1);
    res.json({ mensaje: "Producto eliminado" });
  } else {
    res.status(404).json({ mensaje: "Producto no encontrado" });
  }
});

// Iniciar el servidor
app.listen(5000, () => {
  console.log('API de productos escuchando en el puerto 5000');
});