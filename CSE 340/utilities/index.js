function formatCurrency(value) {
  if (value == null) return '';
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value);
}

function formatNumber(value) {
  if (value == null) return '';
  return new Intl.NumberFormat('en-US').format(value);
}

function escapeHtml(unsafe) {
  return String(unsafe || '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

function buildVehicleDetailHTML(v) {
  const makeModel = `${v.inv_make} ${v.inv_model}`;
  const price = formatCurrency(v.inv_price);
  const miles = formatNumber(v.inv_miles);

  return `
    <div class="vehicle-detail-grid">

      <!-- IMAGEN -->
      <div class="vehicle-detail-image">
        <img src="${v.inv_image}" alt="${makeModel}">
      </div>

      <!-- INFORMACIÓN -->
      <div class="vehicle-detail-info">

        <h2 class="vehicle-title">
          ${v.inv_year} ${makeModel}
        </h2>

        <p class="vehicle-price">${price}</p>

        <ul class="vehicle-specs">
          <li><strong>Mileage:</strong> ${miles} miles</li>
          <li><strong>Color:</strong> ${v.inv_color}</li>
        </ul>

        <div class="vehicle-description">
          <h3>Description</h3>
          <p>${escapeHtml(v.inv_description)}</p>
        </div>

        <div class="vehicle-actions">
          <button class="btn-primary">START MY PURCHASE</button>
          <button class="btn-secondary">CONTACT US</button>
          <button class="btn-secondary">SCHEDULE TEST DRIVE</button>
        </div>

      </div>

    </div>
  `;
}

module.exports = {
  buildVehicleDetailHTML,
  formatCurrency,
  formatNumber,
};
