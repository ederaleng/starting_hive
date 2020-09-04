const express = require('express');
const router = express.Router();
const { all_catch } = require('./../middlewares/catch_error')

//  routes
router.use('/v1', require('./v1'))
router.use(all_catch)

module.exports = router;

