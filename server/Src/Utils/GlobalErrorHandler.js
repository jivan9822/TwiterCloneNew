exports.globalErrorHandler = (err, req, res, next) => {
  res.status(err.statusCode || 500).json({
    status: false,
    message: err.message,
    err,
  });
};
