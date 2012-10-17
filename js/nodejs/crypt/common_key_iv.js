var assert = require('assert');
var crypt = require('crypto');

function md5sum(input){
    var sum = crypt.createHash('md5');
    sum.update(input);
    return sum.digest('hex');
}


var algorithm = 'aes-256-cbc';
//var key = '2ea5074bcc33ccbd1cd99341b837fcb4'; // 32byte
//var iv = '0123456789abcdef'; //16byte
var pass = 'オラ';
var key = md5sum('key:'+pass); // 32byte
var iv = md5sum('iv:'+pass).substr(0,16); //16byte
var input = 'オラオラオラオラオラオラオラ';

console.log(key);
console.log(iv);
console.log(input);

// encode
var cipher = crypt.createCipheriv(algorithm, key, iv);
var crypted = cipher.update(input, 'utf8', 'hex');
crypted += cipher.final('hex');
console.log(crypted);

// decode
var decipher = crypt.createDecipheriv(algorithm, key, iv);
var dec = decipher.update(crypted, 'hex', 'utf8');
dec += decipher.final('utf8');

console.log(dec);

assert(input === dec);
