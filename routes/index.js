var express = require('express');
var router = express.Router();
var data = {
  user: 'John',
  age : 26,
  average :30,
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
