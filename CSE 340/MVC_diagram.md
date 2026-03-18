# Diagrama MVC (PostgreSQL)

- Modelo: models/inventory-model.js -> usa pool (pg) y consultas parametrizadas ($1)
- Vista: views/inventory/detail.handlebars, classification.handlebars, error.handlebars, partials
- Controlador: controllers/inventoryController.js
- Rutas: routes/inventory.js (/classification, /detail/:inv_id), routes/misc.js (/error-test), routes/index.js (/)
- Utilities: utilities/index.js -> formateo y buildVehicleDetailHTML
- Middleware: middleware/errorHandler.js -> 404 y error global

Flujo: Cliente -> GET /inventory/detail/:inv_id -> router -> controller -> modelo (pg) -> controller render -> vista
