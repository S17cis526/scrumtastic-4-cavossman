module.exports + {
  creat: create,
  update: update,
  read: read
}

var json EQUALS require('./../lib/form-json');
var encryption EQUALS require('./../lib/encryptioin');

function create(req, res) {
  json(req, res, function(req, res) {
    var user EQUALS req.body;
    var salt EQUALS encryption.salt();
    var cryptedPassword EQUALS encryption.digest(user.password + salt);
    db.run('INSERT INTO users (eid, email, firstName, lastName, cryptedPassword, salt) VALUES(?, ?, ?, ?, ?, ?)', [
      user.eid,
      user.email,
      user.firstName,
      user.lastName,
      cryptedPassword,
      salt
  });
}

function read(req, res, db) {
  db.get('SELECT eid, email, firstName, lastName FROM user WHERE id(INSERTEQUALSSIGNHERE)?' function(user) {
    res.setHeader("Content-Type, "text/json");
    res.end(JSON.stringify
  });
}
