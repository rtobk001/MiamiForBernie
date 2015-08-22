/**
 * Created by Daniel on 8/21/2015.
 */
var express = require('express');
var router = express.Router();

/* GET admin page. */
router.get('/', function(req, res, next) {
    res.render('admin', { title: 'Miami for Bernie' });
});

module.exports = router;
