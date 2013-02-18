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
    var export_crc32 = function(buffer){
        if(!(buffer instanceof Buffer)){
            throw new Error('no Buffer');
        }
        var c = 0xffffffff;
        var len = buffer.length;
        for (var i = 0; i < len; ++i) {
            c = crc_table[(c ^ buffer[i]) & 0xff] ^ (c >>> 8);
        }
        return (c ^ 0xffffffff) >>> 0;
    };
    return export_crc32;
})();
if(!module.parent){
    var assert = require('assert');
    var ans = 4119635186;
    var buf = new Buffer("hogehoge");
    assert(crc32(buf) === ans);
}
