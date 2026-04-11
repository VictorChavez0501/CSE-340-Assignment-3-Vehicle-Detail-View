const express = require('express');
const router = express.Router();

const inventoryController = require('../controllers/inventoryController');
const favoritesController = require('../controllers/favoritesController');
const { checkLogin } = require('../middleware/auth');

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
// ⭐ FAVORITOS
// ===============================

// Guardar favorito
router.get(
  '/favorite/:inv_id',
  checkLogin,
  favoritesController.addFavorite
);

// Ver favoritos
router.get(
  '/favorites',
  checkLogin,
  favoritesController.viewFavorites
);

module.exports = router;