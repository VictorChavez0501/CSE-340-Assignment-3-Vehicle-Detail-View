-- Init script for PostgreSQL (assignment)
-- Connect to the database 'cse340' manually (pgAdmin or psql)
-- Then run the CREATE TABLE and INSERT statements below.

CREATE TABLE IF NOT EXISTS inventory (
  inv_id SERIAL PRIMARY KEY,
  inv_make VARCHAR(100),
  inv_model VARCHAR(100),
  inv_year INT,
  inv_price NUMERIC(12,2),
  inv_miles INT,
  inv_description TEXT,
  inv_image VARCHAR(255),
  inv_thumbnail VARCHAR(255)
);

INSERT INTO inventory (inv_make, inv_model, inv_year, inv_price, inv_miles, inv_description, inv_image, inv_thumbnail)
VALUES
('Toyota','Corolla',2018,14500.00,45230,'Sedán confiable, mantenimientos al día.','/images/toyota-corolla-2018.jpg','/images/thumbs/toyota-corolla-2018.jpg'),
('Honda','Civic',2017,13200.00,58210,'Buen estado, único dueño.','/images/honda-civic-2017.jpg','/images/thumbs/honda-civic-2017.jpg'),
('Ford','Focus',2016,9800.00,75500,'Ideal para ciudad.','/images/ford-focus-2016.jpg','/images/thumbs/ford-focus-2016.jpg'),
('Nissan','Sentra',2019,15800.00,30000,'Excelente estado, muy cómodo.','/images/nissan-sentra-2019.jpg','/images/thumbs/nissan-sentra-2019.jpg');
