var assert = require('assert');
var crypt = require('crypto');

var algorithm = 'aes256';
var key = 'The Key';
var input = 'オラオラオラオラオラオラオラ';

console.log(input);

// encode
var cipher = crypt.createCipher(algorithm, key);
var crypted = cipher.update(input, 'utf8', 'hex');
crypted += cipher.final('hex');
console.log(crypted);

// decode
var decipher = crypt.createDecipher(algorithm, key);
var dec = decipher.update(crypted, 'hex', 'utf8');
dec += decipher.final('utf8');

console.log(dec);

assert(input === dec);
