var redis = require('redis');
var publisher = redis.createClient();
publisher.on('error', function(err){
    console.log('onError : %s', err);
});
publisher.on('ready', function(){
    publisher.publish("test", "oraoraoraora");
    publisher.quit();
});
