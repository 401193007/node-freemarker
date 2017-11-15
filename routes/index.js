var express = require('express');
var router = express.Router();
var data = {
  name: '卖鱼灿',
  age : 26,
  average :30,
  latestProduct: {
      url: 'products/greenmouse.html',
      name: 'mouse'
  }
};
/* GET home page. */
router.get('/', function(req, res, next) {
	console.log("data："+data.name);
	res.render('index', data);
});

module.exports = router;
