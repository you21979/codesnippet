// VM版は遅すぎる・・・
var fs = require('fs');
var txt = fs.readFileSync('./filevm.jss');
var MAX = 1000000;
[function(){
    var TID = 'newFunction';
    var ctx = {
        hoge : 0,
        fuga : 0,
        Func : function(){
            console.log("test");
        },
    };
    var f = new Function(txt);
    var x = f();
    console.time(TID);
    try{
        x.init(ctx);
        for(var i=0;i<MAX;++i){
            x.update(ctx);
        }
    }catch(e){
        console.log(e.stack);
    }
    console.timeEnd(TID);
    console.log(ctx.hoge);
    console.log(ctx.fuga);
}].forEach(function(f){
    f();
});
