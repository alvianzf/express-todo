var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  return res.status(404).json({result: 'Please refer to the documentation, A$$h**e!', error: '404, not found'})
});

router.use('/api', require('./api'))

module.exports = router;
