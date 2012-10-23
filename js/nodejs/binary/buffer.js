var MAXSIZE = 32;
var buff = new Buffer(MAXSIZE);
var pos = 0;
console.log(buff.length);
[
function(){
    buff.fill(0);
},
function(){
    var data = 1;
    var size = 2;
    buff.writeInt16LE(data, pos);
    pos += size;
},
function(){
    var data = 1;
    var size = 2;
    buff.writeInt16BE(data, pos);
    pos += size;
},
function(){
    var enc = 'utf8';
    var data = "testdata";
    var size = Buffer.byteLength(data, enc);
    buff.write(data, pos, size, enc);
    pos += size;
},
function(){
    console.log(buff);
    console.log(pos);
}
].forEach(function(fnc){
    fnc();
});
