// まだunstableだから気をつける 0.8.14現在
// VM版は遅すぎる・・・
var vm = require('vm');
var txt = ''
+'ctx.hoge+=1;'
+'if(ctx.hoge%2===0){'
+' ctx.fuga+=1;'
+'}'
;
var MAX = 10000;
[function(){
    var script = vm.createScript(txt, 'myfile.vm');
    var TID = 'runInNewContext';
    var ctx = {
        hoge : 0,
        fuga : 0,
        console : console,
    };
    console.time(TID);
    for(var i=0;i<MAX;++i){
        script.runInNewContext({ctx:ctx});
    }
    console.timeEnd(TID);
    console.log(ctx.hoge);
    console.log(ctx.fuga);
},
function(){
    var TID = 'newFunction';
    var ctx = {
        hoge : 0,
        fuga : 0,
        console : console,
    };
    console.time(TID);
    for(var i=0;i<MAX;++i){
        var f = new Function('ctx',txt);
        f(ctx);
    }
    console.timeEnd(TID);
    console.log(ctx.hoge);
    console.log(ctx.fuga);
}].forEach(function(f){
    f();
});
