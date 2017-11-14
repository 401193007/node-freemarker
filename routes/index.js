var express = require('express');
var router = express.Router();
var data = {
  user: 'joe',
  latestProduct: {
      url: 'products/greenmouse.html',
      name: 'mouse'
  }
};
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', data);
});

module.exports = router;
