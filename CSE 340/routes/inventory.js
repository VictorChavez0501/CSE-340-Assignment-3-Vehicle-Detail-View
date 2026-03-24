const express = require('express');
const router = express.Router();
const inventoryController = require('../controllers/inventoryController');

// ✅ Lista por clasificación (dinámica)
router.get('/classification/:classification_id', inventoryController.getClassificationList);

// ✅ Detalle dinámico por inv_id
router.get('/detail/:inv_id', inventoryController.getVehicleDetail);

module.exports = router;