var express = require('express');
var router = express.Router();
var User = require('../controllers/User');

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


  var errors;
  if(password != password2){
    errors = "Passwords do not match."
  }

  //TODO: Check is registration code is valid

  if(errors){
    res.render('index', {
      title:"Miami for Bernie",
      errors: errors,
    })
  }else{
    var newUser = {
      firstName: firstName,
      lastName: lastName,
      fullName: fullName,
      email: email,
      userName: userName,
      password: password,
      role: "admin"
    };

    console.log(newUser);

    res.render('admin',{
      title: 'Admin'
    });

    //Create User
    User.createUser(newUser, function(err, user){
      if(err){

      }
      console.log(user);
    });

    //Success Message
    req.flash('success', 'You are now registered and may log in.');

    req.location('/');
    res.redirect('/');

  }

});



router.get('/login', function(req, res, next) {
  res.render('login', {
    title: 'Login'
  })
});

module.exports = router;
