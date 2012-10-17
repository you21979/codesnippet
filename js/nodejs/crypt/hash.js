var crypt = require('crypto');
var input = 'オラオラオラオラオラオラオラ';

// sha1 md5 sha256 sha512
var sum = crypt.createHash('sha1');
sum.update(input);
// hex binary base64
var output = sum.digest('hex');

console.log(output);
