const pool = require('../db/pool');

// ===============================
// VEHÍCULO POR ID
// ===============================
async function getVehicleById(invId) {
  const sql = `
    SELECT 
      inv_id,
      inv_make,
      inv_model,
      inv_year,
      inv_description,
      inv_image,
      inv_thumbnail,
      inv_price,
      inv_miles,
      inv_color,
      classification_id
    FROM inventory
    WHERE inv_id = $1
  `;
  const { rows } = await pool.query(sql, [invId]);
  return rows[0];
}

// ===============================
// VEHÍCULOS POR CLASIFICACIÓN
// ===============================
async function getVehiclesByClassificationId(classification_id) {
  const sql = `
    SELECT 
      inv_id,
      inv_make,
      inv_model,
      inv_year,
      inv_thumbnail,
      inv_price
    FROM inventory
    WHERE classification_id = $1
    ORDER BY inv_make, inv_model
  `;
  const { rows } = await pool.query(sql, [classification_id]);
  return rows;
}

// ===============================
// CLASIFICACIONES (NAVBAR)
// ===============================
async function getClassifications() {
  const sql = `
    SELECT classification_id, classification_name
    FROM classification
    ORDER BY classification_name
  `;
  const { rows } = await pool.query(sql);
  return rows;
}

// ===============================
// ⭐ AGREGAR FAVORITO
// ===============================
async function addFavorite(account_id, inv_id) {
  const sql = `
    INSERT INTO favorites (account_id, inv_id)
    VALUES ($1, $2)
    ON CONFLICT (account_id, inv_id) DO NOTHING
  `;
  await pool.query(sql, [account_id, inv_id]);
}

// ===============================
// ⭐ OBTENER FAVORITOS
// ===============================
async function getFavoritesByUser(account_id) {
  const sql = `
    SELECT i.*
    FROM favorites f
    JOIN inventory i ON f.inv_id = i.inv_id
    WHERE f.account_id = $1
    ORDER BY i.inv_make, i.inv_model
  `;
  const { rows } = await pool.query(sql, [account_id]);
  return rows;
}

module.exports = {
  getVehicleById,
  getVehiclesByClassificationId,
  getClassifications,
  addFavorite,
  getFavoritesByUser,
};