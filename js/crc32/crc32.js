/**
 *  CRC32
 */
var crc32 = module.exports = (function(){
    var crc_table = (function(){
        var table = new Uint32Array(256);
        var c = 0;
        var len = table.length;
        for(var i = 0; i< len; ++i){
            c = i;
            for(var j = 0; j < 8; ++j) {
                c = (c & 1) ? (0xedb88320 ^ (c>>>1)) : (c>>>1);
            }
            table[i] = c;
        }
        return table;
    })();
    return function(buffer){
        if(!(buffer instanceof Buffer)){
            throw new Error('no Buffer');
        }
        var c = new Uint32Array(2);
        c[0] = 0xffffffff;
        var len = buffer.length;
        for (var i = 0; i < len; i++) {
            c[1] = c[0] ^ buffer[i];
            c[0] = crc_table[c[1] & 0xff] ^ (c[0] >>> 8);
        }
        c[1] = c[0] ^ 0xffffffff;
        return c[1];
    };
})();
if(!module.parent){
    var assert = require('assert');
    var a = 4119635186;
    var buf = new Buffer("hogehoge");
    assert(crc32(buf) === a);
}
