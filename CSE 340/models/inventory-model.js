const pool = require('../db/pool');

// Obtener vehículo por ID
async function getVehicleById(invId) {
  const sql = `
    SELECT *
    FROM inventory
    WHERE inv_id = $1
  `;
  const { rows } = await pool.query(sql, [invId]);
  return rows[0];
}

// Obtener vehículos por clasificación
async function getVehiclesByClassificationId(classification_id) {
  const sql = `
    SELECT *
    FROM inventory
    WHERE classification_id = $1
    ORDER BY inv_make, inv_model
  `;
  const { rows } = await pool.query(sql, [classification_id]);
  return rows;
}

// Obtener TODAS las clasificaciones (NAVBAR)
async function getClassifications() {
  const sql = `
    SELECT classification_id, classification_name
    FROM classification
    ORDER BY classification_name
  `;
  const { rows } = await pool.query(sql);
  return rows;
}

module.exports = {
  getVehicleById,
  getVehiclesByClassificationId,
  getClassifications,
};