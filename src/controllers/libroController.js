const libroService = require('../services/libroService');

class LibroController {
    // GET /api/libros
    async listarTodos(req, res) {
        try {
            const libros = await libroService.obtenerTodosLosLibros();
            return res.status(200).json({
                exito: true,
                total: libros.length,
                datos: libros
            });
        } catch (error) {
            return res.status(500).json({ exito: false, mensaje: error.message });
        }
    }

    // GET /api/libros/disponibles
    async listarDisponibles(req, res) {
        try {
            const libros = await libroService.obtenerTodosLosLibros();
            const disponibles = libros.filter(l => l.estado === 'disponible');

            return res.status(200).json({
                exito: true,
                total: disponibles.length,
                datos: disponibles
            });
        } catch (error) {
            return res.status(500).json({ exito: false, mensaje: error.message });
        }
    }

    // GET /api/libros/categoria/:categoria
    async filtrarPorCategoria(req, res) {
        try {
            const { categoria } = req.params;

            if (!categoria || categoria.trim() === '') {
                return res.status(400).json({ exito: false, mensaje: "La categoría es requerida." });
            }

            const libros = await libroService.obtenerTodosLosLibros();
            const filtrados = libros.filter(l => l.categoria.toLowerCase() === categoria.toLowerCase());

            if (filtrados.length === 0) {
                return res.status(404).json({
                    exito: false,
                    mensaje: `No se encontraron libros para la categoría: "${categoria}".`
                });
            }

            return res.status(200).json({
                exito: true,
                categoria: categoria.toLowerCase(),
                total: filtrados.length,
                datos: filtrados
            });
        } catch (error) {
            return res.status(500).json({ exito: false, mensaje: error.message });
        }
    }
}

module.exports = new LibroController();