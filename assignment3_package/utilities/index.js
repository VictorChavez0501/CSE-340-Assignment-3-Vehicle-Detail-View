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
    <div class="vehicle-detail__meta">
      <h2 class="vehicle-detail__heading">${v.inv_year} ${makeModel}</h2>
      <p class="vehicle-detail__price">${price}</p>
      <p class="vehicle-detail__miles">Kilometraje: ${miles} millas</p>
      <div class="vehicle-detail__description">
        <p>${escapeHtml(v.inv_description)}</p>
      </div>
    </div>
  `;
}

module.exports = {
  buildVehicleDetailHTML,
  formatCurrency,
  formatNumber,
};
