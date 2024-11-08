var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    // serve xử lý dữ liệu đẩy data về view
    res.render('index', { title: 'Tạo giao diện HBS' });
});

module.exports = router;