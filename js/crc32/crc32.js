/**
 * @fileoverview CRC32[http://ja.wikipedia.org/wiki/%E5%B7%A1%E5%9B%9E%E5%86%97%E9%95%B7%E6%A4%9C%E6%9F%BB]
 */
"use strict";
/**
 * CRC32
 * @param {Buffer} arg1 バッファ
 * @return {number} CRC値
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
    var export_crc32 = function(buffer, begin, end){
        if(!(buffer instanceof Buffer)){
            throw new Error('no Buffer');
        }
        if(begin === undefined){
            begin = 0;
        }
        var len = buffer.length;
        if(end === undefined){
            end = len;
        }
        if(end > len){
            end = len;
        }
        var c = 0xffffffff;
        for (var i = begin; i < end; ++i) {
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
