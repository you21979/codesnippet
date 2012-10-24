var redis = require('redis');
var key = 'hogezo_hash';

var xcl = redis.createClient();
xcl.get(key, function(e,v){
    if(v === null){
        xcl.hset(key,'id',JSON.stringify({gen:1}));
        xcl.hset(key,'name','HOGE');
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

var names = ['HOGE','FUGE','PIYO'];

var txn = function(){
    var rcl = redis.createClient();
    rcl.watch(key);
    rcl.hget(key, 'id', function(e,v){
        var obj = JSON.parse(v);
        ++obj.gen;
        rcl.multi()
            .hset(key, 'id', JSON.stringify(obj))
            .hset(key, 'name', names[Math.random()*names.length|0])
            .hgetall(key, function(e,v){console.log(v)})
            .exec(redis.print);
        rcl.quit();
    });
}

