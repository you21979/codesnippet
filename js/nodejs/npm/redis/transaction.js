var redis = require('redis');
var key = 'hogezo';

var xcl = redis.createClient();
xcl.get(key, function(e,v){
    if(v === null){
        xcl.set(key,JSON.stringify({gen:1}));
    }
    txn();
    txn();
    txn();
    txn();
    txn();
    txn();
    txn();
    txn();
    txn();
    txn();
    txn();
    txn();
    txn();
    txn();
    txn();
    txn();
    txn();
    xcl.quit();
});

var txn = function(){
    var rcl = redis.createClient();
    rcl.watch(key);
    rcl.get(key, function(e,v){
        var obj = JSON.parse(v);
        ++obj.gen;
        rcl.multi()
            .set(key, JSON.stringify(obj))
            .get(key, redis.print)
            .exec(redis.print);
        rcl.quit();
    });
}

