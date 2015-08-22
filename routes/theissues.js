/**
 * Created by Daniel on 8/18/2015.
 */
var express = require('express');
var router = express.Router();

/* GET issues page. */
router.get('/', function(req, res, next) {
    res.render('theissues', { title: 'Miami for Bernie' });
});

module.exports = router;
