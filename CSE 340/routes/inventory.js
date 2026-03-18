const express = require('express');
const router = express.Router();
const inventoryController = require('../controllers/inventoryController');

// Lista clasificación
router.get('/classification', inventoryController.getClassificationList);

// Detalle dinámico por inv_id
router.get('/detail/:inv_id', inventoryController.getVehicleDetail);

module.exports = router;
