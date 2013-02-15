var crc = require('./crc32');
var hoge = "hoge";
console.log(crc(new Buffer(hoge)));
console.log(crc(hoge));
