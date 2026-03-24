const pool = require('../db/pool')

// 👉 Obtener clasificaciones (para navbar dinámico)
async function getClassifications() {
  const sql = `
    SELECT classification_id, classification_name
    FROM classification
    ORDER BY classification_name
  `
  const { rows } = await pool.query(sql)
  return rows
}

// 👉 Obtener vehículos por clasificación
async function getInventoryByClassificationId(classification_id) {
  const sql = `
    SELECT inv_id, inv_make, inv_model, inv_year, inv_price, inv_thumbnail
    FROM inventory
    WHERE classification_id = $1
    ORDER BY inv_make, inv_model
  `
  const { rows } = await pool.query(sql, [classification_id])
  return rows
}

// 👉 Obtener vehículo por ID
async function getVehicleById(invId) {
  const sql = `
    SELECT *
    FROM inventory
    WHERE inv_id = $1
  `
  const { rows } = await pool.query(sql, [invId])
  return rows.length ? rows[0] : null
}

// 👉 (Opcional, por compatibilidad si lo usas en algún lado)
async function getAllForClassification() {
  const sql = `
    SELECT inv_id, inv_make, inv_model, inv_year, inv_price, inv_thumbnail
    FROM inventory
    ORDER BY inv_make, inv_model
  `
  const { rows } = await pool.query(sql)
  return rows
}

module.exports = {
  getClassifications,
  getInventoryByClassificationId,
  getVehicleById,
  getAllForClassification
}