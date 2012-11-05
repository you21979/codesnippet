var asyncblock = require('asyncblock');
var redis = require('redis');
var Query = require('./query');

var rcl = redis.createClient();

rcl.on('error', function (err) {
    console.log('error event - ' + rcl.host + ':' + rcl.port + ' - ' + err);
});

var q = new Query(rcl);
//q.query('begin');
for(var i=0;i<10000;++i){
    q.query('test1.'+i, JSON.stringify([i, Math.random()*100000|0, 'test']));
}
//q.query('commit');
console.log('GO');
console.time('QUERY');
q.exec(function(){
    console.timeEnd('QUERY');
    rcl.quit(function (err, res) {
        console.log('Exiting from quit command.');
    });
});
