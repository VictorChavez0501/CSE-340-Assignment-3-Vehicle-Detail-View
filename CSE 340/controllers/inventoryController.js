const inventoryModel = require('../models/inventory-model')

// ===============================
// CLASIFICACIÓN
// ===============================
async function getClassificationList(req, res, next) {
  try {
    const classification_id = req.params.classification_id
    const list = await inventoryModel.getVehiclesByClassificationId(classification_id)
    const nav = await inventoryModel.getClassifications()

    res.render('inventory/classification', {
      title: 'Clasificación',
      list,
      nav
    })
  } catch (err) {
    next(err)
  }
}

// ===============================
// DETALLE VEHÍCULO
// ===============================
async function getVehicleDetail(req, res, next) {
  const invId = req.params.inv_id

  try {
    const vehicle = await inventoryModel.getVehicleById(invId)
    const nav = await inventoryModel.getClassifications()

    if (!vehicle) {
      const err = new Error('Vehículo no encontrado')
      err.status = 404
      return next(err)
    }

    res.render('inventory/detail', {
      title: `${vehicle.inv_make} ${vehicle.inv_model}`,
      vehicle,
      nav
    })
  } catch (err) {
    next(err)
  }
}

// ⭐ AGREGAR FAVORITO
async function addFavorite(req, res, next) {
  try {
    const account = res.locals.account;

    if (!account) {
      return res.redirect('/account/login');
    }

    const account_id = account.account_id;
    const inv_id = req.params.inv_id;

    await inventoryModel.addFavorite(account_id, inv_id);

    res.redirect('/inventory/detail/' + inv_id);
  } catch (err) {
    next(err);
  }
}

// ⭐ VER FAVORITOS
async function viewFavorites(req, res, next) {
  try {
    const account = res.locals.account;

    if (!account) {
      return res.redirect('/account/login');
    }

    const account_id = account.account_id;

    const favorites = await inventoryModel.getFavoritesByUser(account_id);
    const nav = await inventoryModel.getClassifications();

    res.render('inventory/favorites', {
      title: 'My Favorites',
      favorites,
      nav
    });
  } catch (err) {
    next(err);
  }
}

module.exports = {
  getClassificationList,
  getVehicleDetail,
  addFavorite,
  viewFavorites
}