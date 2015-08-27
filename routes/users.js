var express = require('express');
var router = express.Router();
var User = require('../controllers/user');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/register', function(req, res, next) {

  var REGISTRATION_CODES = {
    "fatty": true,
    "pajeros": true,
    "m4b": true,
    "bernie4pres": true,
    "sanders2016": true
  };


  //Get register form values
  var firstName = req.body.registerFirstName,
      lastName = req.body.registerLastName,
      fullName = req.body.registerFirstName + " " + req.body.registerLastName,
      email = req.body.registerEmail,
      userName = req.body.registerUsername,
      password = req.body.registerPassword,
      password2 = req.body.registerPassword2,
      registrationCode = req.body.registerCode;

  //Form validation
  //req.checkBody('registerPassword2', 'Passwords do not match.').equals(req.body.registerPassword2);

  //Check for errors
  //var errors = req.validationErrors();


  //var errors;
  //if(password != password2){
  //  errors = "Passwords do not match."
  //}

  //TODO: Check if registration code is valid

  if(!REGISTRATION_CODES[registrationCode]){
    //res.render('index', {
    //  title:"Miami for Bernie"
    //});
    res.status(200).send({code: 200, error: "Sorry, your registration code is invalid."});
    //res.send("Sorry, your registration code is invalid.");
  }else{
    var newUser = {
      firstName: firstName,
      lastName: lastName,
      fullName: fullName,
      email: email,
      username: userName,
      password: password,
      role: "admin"
    };

    //Create User
    User.createUser(newUser, function(err, user){
      if(err){
        //res.render('index', {title: "Miami for Bernie"});
        res.send(err);
      }else{
        //Success Message
        //req.flash('success', 'You are now registered and may log in.');

        console.log("New User Created:");
        console.log(user);

        res.status(status).send(body);

        //res.render('index',{
        //  title: 'Miami for Bernie'
        //});

        //req.location('/');
        //res.redirect('/');
      }

    });

  }

});



router.post('/login', function(req, res, next) {

  var username = req.body.loginUsername,
      password = req.body.loginPassword;

  User.login(username, password, function(error, response){
    if(error){
      res.render('index', {
        title: 'Miami for Bernie',

      })
    }
  });

});

module.exports = router;
