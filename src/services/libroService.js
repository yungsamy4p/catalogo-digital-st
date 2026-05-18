const fs = require('fs').promises;
const path = require('path');
const cheerio = require('cheerio');

const htmlPath = path.join(__dirname, '../../actividad_2_6_cheerio/public/catalogo.html');

class LibroService {
    async obtenerTodosLosLibros() {
        try {
            // Lee archivo desde el servidor de forma asíncronica
            const htmlContent = await fs.readFile(htmlPath, 'utf-8');
            
            // Carga el HTML en Cheerio
            const $ = cheerio.load(htmlContent);
            const libros = [];

            // Selectores exactos basados en catalogo.html
            $('#catalogo .libro').each((_, elemento) => {
                const id = parseInt($(elemento).attr('data-id'), 10);
                const categoria = $(elemento).attr('data-categoria') || '';
                const titulo = $(elemento).find('h3.titulo').text().trim();
                const autor = $(elemento).find('.autor').text().trim();
                
                // Limpieza de prefijos usando expresiones regulares
                const isbn = $(elemento).find('.isbn').text().replace(/^ISBN:\s*/i, '').trim();
                const anio = parseInt($(elemento).find('.anio').text().replace(/^Año:\s*/i, '').trim(), 10) || null;
                const editorial = $(elemento).find('.editorial').text().replace(/^Editorial:\s*/i, '').trim();
                
                const estado = $(elemento).find('.estado').text().trim().toLowerCase();
                const ubicacion = $(elemento).find('.ubicacion').text().trim();

                libros.push({
                    id,
                    categoria,
                    titulo,
                    autor,
                    isbn,
                    anio,
                    editorial,
                    estado,
                    ubicacion
                });
            });

            return libros;
        } catch (error) {
            throw new Error('Error al procesar el archivo del catálogo legacy.');
        }
    }
}

module.exports = new LibroService();