// VM版は遅すぎる・・・
var fs = require('fs');
var txt = fs.readFileSync('./filevm.jss');
var MAX = 1000000;
[function(){
    var TID = 'newFunction';
    var ctx = {
        hoge : 0,
        fuga : 0,
    };
    var f = new Function(txt);
    var x = f();
    console.time(TID);
    x.init(ctx);
    for(var i=0;i<MAX;++i){
        x.update(ctx);
    }
    console.timeEnd(TID);
    console.log(ctx.hoge);
    console.log(ctx.fuga);
}].forEach(function(f){
    f();
});
