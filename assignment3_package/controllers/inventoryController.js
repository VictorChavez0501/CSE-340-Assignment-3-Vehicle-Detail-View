const inventoryModel = require('../models/inventory-model');
const { buildVehicleDetailHTML, formatCurrency, formatNumber } = require('../utilities');

async function getClassificationList(req, res, next) {
  try {
    const list = await inventoryModel.getAllForClassification();
    res.render('inventory/classification', { title: 'Clasificación', list });
  } catch (err) {
    next(err);
  }
}

async function getVehicleDetail(req, res, next) {
  const invId = req.params.inv_id;
  try {
    const vehicle = await inventoryModel.getVehicleById(invId);
    if (!vehicle) {
      const err = new Error('Vehículo no encontrado');
      err.status = 404;
      return next(err);
    }
    const detailHTML = buildVehicleDetailHTML(vehicle);
    res.render('inventory/detail', {
      title: `${vehicle.inv_make} ${vehicle.inv_model}`,
      vehicle,
      detailHTML,
      formattedPrice: formatCurrency(vehicle.inv_price),
      formattedMiles: formatNumber(vehicle.inv_miles),
    });
  } catch (err) {
    next(err);
  }
}

module.exports = {
  getClassificationList,
  getVehicleDetail,
};
