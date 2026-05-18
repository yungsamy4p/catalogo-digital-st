const express = require('express');
const router = express.Router();
const libroController = require('../controllers/libroController');

// Definición de las rutas del Catálogo REST
router.get('/libros', libroController.listarTodos);
router.get('/libros/disponibles', libroController.listarDisponibles);
router.get('/libros/categoria/:categoria', libroController.filtrarPorCategoria);

module.exports = router;