var Fiber = require('fibers');
(function(){
var check = (function(){
    var i = 0;
    return Fiber.prototype.run.bind(Fiber(function() {
        // なんかする
        while (true) {
           // 完了するまで待つ
           if(i>=10000){
                break;
            }
            // いったん抜ける
            Fiber.yield(i++);
        }
        // 完了処理
        console.log('OKKKKKKKKKKKKKKKKKKKKKKKKKK');
    }));
})();
var f = function(){
    var r = check();
    if(r === undefined){
        // 何も返さなければ終了
        return;
    }
    console.log(r);
    process.nextTick(f);
}
f();
console.log('pass');
})();
