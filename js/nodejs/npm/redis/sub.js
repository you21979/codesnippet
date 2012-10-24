var redis = require('redis');
var subscriber = redis.createClient();

subscriber.on('end', function(){
    // 切れた時に再接続すると落ちるので一度subscribeを切る
    subscriber.pub_sub_mode = false;
});
subscriber.on('ready', function(){
    subscriber.subscribe('test');
});
subscriber.on('error', function(err){
    console.log('onError : %s', err);
});

subscriber.on('message', function(channel, message) {
    console.log('%s : %s', channel, message);
});
