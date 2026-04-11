const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
require('dotenv').config();

const cookieParser = require('cookie-parser');
const { checkJWTToken } = require('./middleware/auth');

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

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(checkJWTToken);

// 👉 NAV GLOBAL (header dinámico)
const inventoryModel = require('./models/inventory-model');
app.use(async (req, res, next) => {
  try {
    const nav = await inventoryModel.getClassifications();
    res.locals.nav = nav;
    next();
  } catch (err) {
    next(err);
  }
});

// Routers
app.use('/', require('./routes/index'));
app.use('/inventory', require('./routes/inventory'));
app.use('/', require('./routes/misc'));

// Error handlers
const { notFoundHandler, globalErrorHandler } = require('./middleware/errorHandler');
app.use(notFoundHandler);
app.use(globalErrorHandler);

app.listen(PORT, () => {
  console.log(`Servidor escuchando en puerto ${PORT}`);
});