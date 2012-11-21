var zlib = require('zlib');
var MAX = 1024;
var buff = new Buffer(MAX);
buff.fill(0);
var pos = 0;
function push(num){
    buff.writeInt16LE(num, pos);
    pos += 2;
}
for(var cnt=0;cnt<1024/2;++cnt){
    push(cnt+1);
}
console.log("pos:"+pos);
console.log("size:"+buff.length);
console.log(buff);
zlib.gzip(buff, function(x,y){
    console.log("size:"+y.length);
    console.log(y);
});

