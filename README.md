# Actividad 2.6: Exploración de JavaScript en Backend + Cheerio

## Objetivo
Desarrollar un servicio backend funcional con Node.js y Express que consuma y procese mediante técnicas de web scraping (usando Cheerio) un archivo HTML estático de catálogo legacy, exponiendo endpoints REST estructurados en formato JSON.

## Estructura del Proyecto


actividad_2_6_cheerio/
├── src/
│   ├── controllers/
│   │   └── libroController.js
│   ├── routes/
│   │   └── libroRoutes.js
│   └── services/
│       └── libroService.js
├── public/
│   └── catalogo.html
├── app.js
├── package.json
└── README.md

## Instalación y Ejecución
1. Instalar las dependencias del proyecto:
   ```bash
   npm install

   node app.js