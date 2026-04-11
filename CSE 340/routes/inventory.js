const express = require('express');
const router = express.Router();
const inventoryController = require('../controllers/inventoryController');

// ===============================
// CLASIFICACIÓN
// ===============================
router.get(
  '/classification/:classification_id',
  inventoryController.getClassificationList
);

// ===============================
// DETALLE VEHÍCULO
// ===============================
router.get(
  '/detail/:inv_id',
  inventoryController.getVehicleDetail
);

// ===============================
// ⭐ FAVORITOS (AHORA BIEN)
// ===============================
router.get(
  '/favorite/:inv_id',
  inventoryController.addFavorite
);

router.get(
  '/favorites',
  inventoryController.viewFavorites
);

module.exports = router;