const pool = require('../db/pool');

async function getVehicleById(invId) {
  const sql = `
    SELECT inv_id, inv_make, inv_model, inv_year, inv_price, inv_miles, inv_description, inv_image, inv_thumbnail
    FROM inventory
    WHERE inv_id = $1
  `;
  const { rows } = await pool.query(sql, [invId]);
  return rows.length ? rows[0] : null;
}

async function getAllForClassification() {
  const sql = `
    SELECT inv_id, inv_make, inv_model, inv_year, inv_price, inv_thumbnail
    FROM inventory
    ORDER BY inv_make, inv_model
    LIMIT 200
  `;
  const { rows } = await pool.query(sql);
  return rows;
}

module.exports = {
  getVehicleById,
  getAllForClassification,
};
