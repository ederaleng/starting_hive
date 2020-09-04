let BAD_REQUEST = 400,
    UNAUTHORIZED = 401,
    FORBIDDEN = 403,
    CONFLICT = 409,
    NOT_FOUND = 404,
    UNPROCESSABLE = 422,
    GENERIC_ERROR = 500

const unauthorized = (req, res, next) => {
  if (req.error_status !== UNAUTHORIZED) return next()
  res.status(UNAUTHORIZED).json({
    success: false,
    message: 'Unauthorized',
    messageDetail: req.error_message || null
  })
}

const forbidden = (req, res, next) => {
  if (req.error_status !== FORBIDDEN) return next()
  res.status(FORBIDDEN).json({
    success: false,
    message: 'Forbidden',
    messageDetail: req.error_message
  })
}
  
const conflict = (req, res, next) => {
  if (req.error_status !== CONFLICT) return next()
  res.status(CONFLICT).json({
    success: false,
    message: 'Conflict',
    messageDetail: req.error_message || null
  })
}

const badRequest = (req, res, next) => {
  if (req.error_status !== BAD_REQUEST) return next()
  res.status(BAD_REQUEST).json({
    success: false,
    message: 'Bad Request',
    messageDetail: req.error_message || null
  })
}

const unprocessable = (req, res, next) => {
  if (req.error_status !== UNPROCESSABLE) return next()
  res.status(UNPROCESSABLE).json({
    success: false,
    message: 'Unprocessable entity',
    messageDetail: req.error_message || null
  })
}


const notFound = (req, res, next) => {
  if (req.error_status !== NOT_FOUND) return next()
  res.status(NOT_FOUND).json({
    success: false,
    message: 'The requested resource could not be found',
    messageDetail: req.error_message || null
  })
}

const genericError = (req, res, next) => {
  if (req.error_status !== GENERIC_ERROR) return next()
  res.status(GENERIC_ERROR).json({
    success: false,
    message: 'Internal server error',
    messageDetail: req.error_message || null
  })
}


const catchall = (req, res, next) => {
  res.status(NOT_FOUND).json({
    success: false,
    message: 'The requested resource could not be found',
    messageDetail: req.error_message || null
  })
}

const exportables = {
  unauthorized,
  forbidden,
  conflict,
  badRequest,
  unprocessable,
  notFound,
  genericError,
  catchall
}

const all = Object.keys(exportables).map(key => exportables[key])

module.exports = {
  ...exportables,
  all_catch: all
}