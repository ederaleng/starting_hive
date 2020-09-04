const express = require('express');
const router = express.Router();

//  routes
router.use('/protected', require('./protected'))
router.use('/private', require('./private'))
router.use('/public', require('./public'))

module.exports = router;