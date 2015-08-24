/**
 * Created by Daniel on 8/23/2015.
 */


/**
 * Helpers
 */

var hbs = require('hbs');
var helpers = {

    /**
     * If word1 matches word2, returns result as a handlebars safe string
     */
    'ifMatch': function(word1, word2, result){
        return word1 == word2 ? new hbs.handlebars.SafeString(result) : '';
    }
};

module.exports = {
  initializeHelpers : function(){
      for(var helper in helpers){
          hbs.registerHelper(helper, helpers[helper]);
      }
  }
};

/*
Below is a different way of registering helpers with self executing function.
If used, simply require this module in app.js, no need to initialize
 */
//module.exports = (function() {
//
//    for(var helper in helpers){
//        hbs.registerHelper(helper, helpers[helper]);
//    }
//
//}()); //execute

