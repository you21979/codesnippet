/**
 *  CRC32
 */
var crc32 = module.exports = (function(){
    var MAX = 256;
    var crc_table = (function(max){
        var table = new Uint32Array(max);
        var c = new Uint32Array(1);
        for(var i = 0; i< max; ++i){
            c[0] = i;
            for(var j = 0; j < 8; ++j) {
                c[0] = (c[0] & 1) ? (0xedb88320 ^ (c[0] >> 1)) : (c[0] >> 1);
            }
            table[i] = c[0];
        }
        return table;
    })(MAX);
    return function(buffer){
        if(!(buffer instanceof Buffer)){
            throw new Error('no Buffer');
        }
        var len = buffer.length;
        var c = new Uint32Array(3);
        c[0] = 0xffffffff;
        for(var i = 0; i < len; ++i) {
            c[1] = buffer[i];
            c[0] = crc_table[(c[0] ^ c[1]) & 0xff] ^ (c[0] >> 8);
        }
        c[2] = c[0] ^ 0xffffffff;
        return c[2];
    };
})();
if(!module.parent){
    var assert = require('assert');
    var a = 4202626462;
    var buf = new Buffer("hogehoge");
    assert(crc32(buf) === a);
}
