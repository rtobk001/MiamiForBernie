/**
 * Created by Daniel on 8/21/2015.
 */
var express = require('express');
var router = express.Router();

var Parse = require('node-parse-api').Parse;
var APP_ID = "LdiNPVjUchKBhP43kq5M854UNGTibqJ8Z4VNBheJ",
    MASTER_KEY = "hWhEkdDI5br7OoN07bYStnc4thumhyfFt6bMl5I0";

var database = new Parse(APP_ID, MASTER_KEY);

// add a Foo object, { foo: 'bar' }
//database.delete('Foo', "QzekqIlve8", function (err, response) {
//  console.log(response);
//});

/* GET admin page. */
router.get('/', function(req, res, next) {
    res.render('admin', { title: 'Miami for Bernie' });
});

module.exports = router;
