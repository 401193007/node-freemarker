var express = require("express");
var router = express.Router();

var data = {
	age : 12
}

router.get("/",function(req,res,next){
	res.render('number',data);
});

module.exports = router;