var redis = require('redis');

var rcl = redis.createClient();

rcl.on('error', function (err) {
    console.log('error event - ' + rcl.host + ':' + rcl.port + ' - ' + err);
});

rcl.set('hoge', 'fuga', redis.print);
rcl.get('hoge', redis.print);

rcl.quit(function (err, res) {
    console.log('Exiting from quit command.');
});

