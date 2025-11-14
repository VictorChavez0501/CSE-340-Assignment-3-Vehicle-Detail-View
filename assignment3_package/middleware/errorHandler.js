function notFoundHandler(req, res, next) {
  const err = new Error('Página no encontrada');
  err.status = 404;
  next(err);
}

function globalErrorHandler(err, req, res, next) {
  const status = err.status || 500;
  if (status === 500) console.error(err.stack);
  res.status(status).render('error', {
    title: `${status} - Error`,
    status,
    message: status === 500 ? 'Error interno del servidor' : err.message,
    stack: process.env.NODE_ENV === 'development' ? err.stack : undefined,
  });
}

module.exports = {
  notFoundHandler,
  globalErrorHandler,
};
