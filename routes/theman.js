/**
 * Created by Daniel on 8/18/2015.
 */
var express = require('express');
var router = express.Router();

/* GET bernie profile page. */
router.get('/', function(req, res, next) {
    res.render('theman', { title: 'The Man' });
});

module.exports = router;
