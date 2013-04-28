var crypto = require('crypto');

var hash = {
  algorithm: 'sha256',
  repetitions: 4
};

hash.generateHash: function(value){
  var v = crypto.createHash(this.algorithm); 
  v.update(value); 
  return v.digest();
};

hash.checkPassword: function(password, input){
  return password === this.hashPassword(input, password.substr(0, password.length/2));
};

hash.hashPassword: function(password, salt){
  var repetitions = this.repetitions;
  salt = salt || this.generateHash(crypto.randomBytes(16));
  hash = this.generateHash (salt + password);
  while (repetitions--)
    hash = this.generateHash(hash + salt + password);
  return salt + hash;
};

module.exports = hash;