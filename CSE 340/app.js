const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// View engine
const hbs = exphbs.create({
  extname: '.handlebars',
  helpers: {}
});
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));

// Static
app.use('/styles', express.static(path.join(__dirname, 'public', 'styles')));
app.use('/images', express.static(path.join(__dirname, 'public', 'images')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routers
app.use('/', require('./routes/index'));
app.use('/inventory', require('./routes/inventory'));
app.use('/', require('./routes/misc'));

// Error handlers (al final)
const { notFoundHandler, globalErrorHandler } = require('./middleware/errorHandler');
app.use(notFoundHandler);
app.use(globalErrorHandler);

app.listen(PORT, () => {
  console.log(`Servidor escuchando en puerto ${PORT}`);
});
