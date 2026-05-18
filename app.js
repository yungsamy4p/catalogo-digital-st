const express = require('express');
const libroRoutes = require('./src/routes/libroRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para procesar JSON
app.use(express.json());

// Montar las rutas bajo el prefijo /api requerido por la pauta
app.use('/api', libroRoutes);

// Manejo global para rutas no existentes (404 general)
app.use((req, res) => {
    res.status(404).json({ exito: false, mensaje: "Ruta no encontrada en la API de la biblioteca." });
});

// Inicializar Servidor
app.listen(PORT, () => {
    console.log(`Servidor de la biblioteca corriendo de manera exitosa en el puerto ${PORT}`);
});