var db = require('../../../db/mdb-config');

module.exports = function(req, res) {
  db.checkUsername(req.body.username, function(exists) {
    if(exists){
      res.send("user already exists")
    }
    else{
      db.saveUser(req, res)
    }
  });
};