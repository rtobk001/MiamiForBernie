/**
 * Created by Daniel on 8/23/2015.
 */



var Parse = require('node-parse-api').Parse;

//var APP_ID = "LdiNPVjUchKBhP43kq5M854UNGTibqJ8Z4VNBheJ",
//    MASTER_KEY = "hWhEkdDI5br7OoN07bYStnc4thumhyfFt6bMl5I0";
//
//var database = new Parse(APP_ID, MASTER_KEY);

var dbOption = {
    app_id:'LdiNPVjUchKBhP43kq5M854UNGTibqJ8Z4VNBheJ',
    api_key: 'Sp3Wlj0gQmduqsX4XtcyrvtPOlkwSmQZp1yxxdb3'
};

var database = new Parse(dbOption);

//database.me("sessionToken", function(err, response){
//    console.log(response);
//});


module.exports = {
    createUser: function(newUser, callback){
        database.insertUser(newUser, function(err, response){
            if(err){
                console.log(err);
                callback(err);
                //throw new Error("Failed to create user: " + JSON.stringify(newUser) + "\n Error message: " + err);
            }
            else{
                console.log("user created");
                console.log(response);
                callback(null, response);
            }
        });
    },
    login: function(username, password, callback){
        database.loginUser(username, password, function(error, response){
            if(error){
                callback(error);
            }else{
                callback(response);
            }
        });

    }
};