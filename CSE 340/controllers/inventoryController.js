const inventoryModel = require('../models/inventory-model')

async function getClassificationList(req, res, next) {
  try {
    const list = await inventoryModel.getAllForClassification()
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

module.exports = {
  getClassificationList,
  getVehicleDetail,
}