function errHandler(err, req, res, next) {
  let errors = []
  let statusCode = 500

  console.log(err, '<< error sekarang')

  switch (err.name) {
    case 'SequelizeUniqueConstraintError' :
      errors.push('Email already used')
      statusCode = 400
      break;
    case 'JsonWebTokenError':
      errors.push('Failed to authenticate!')
      statusCode = 401
      break;
    case 'SequelizeValidationError':
      err.errors.forEach(el => {
        errors.push(el.message)
      })
      statusCode = 400
      break;
    default: 
      errors.push(err.msg || 'internal server error')
      statusCode = err.statusCode || 500
  }
  res.status(statusCode).json({ errors: errors})
}

module.exports = errHandler