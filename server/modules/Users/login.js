var db = require('../../../db/mdb-config');

module.exports = function(req, res) {
  var username = req.body.username;
  var password = req.body.password;
  db.checkUsername(username, function(exists) {
    console.log("at checkUsername")
    if(exists){
      console.log("exists")
      db.checkPassword(username, password, function(matched){
        console.log("checking password ", matched)
        if(matched){
          sess = req.session;
          sess.username = username;
          res.send("login successful")
        }
        else{
          console.log("password incorrect")
          res.send("password is incorrect")
        }
      })
    }
    else{
      res.send("username does not exist")
    }
  });
};