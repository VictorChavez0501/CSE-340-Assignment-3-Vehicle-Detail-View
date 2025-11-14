# Enlaces de clasificación

Cada item en la vista de clasificación debe tener exactamente este enlace:
<a href="/inventory/detail/{{inv_id}}">Ver detalle</a>

Ejemplo Handlebar por item:
<li class="product-card">
  <img src="{{this.inv_thumbnail}}" alt="{{this.inv_make}} {{this.inv_model}} mini">
  <h2>{{this.inv_year}} {{this.inv_make}} {{this.inv_model}}</h2>
  <p>{{this.inv_price}}</p>
  <p><a href="/inventory/detail/{{this.inv_id}}">Ver detalle</a></p>
</li>
