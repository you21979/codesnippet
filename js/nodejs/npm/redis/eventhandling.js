var redis = require('redis');

var rcl = redis.createClient();

// debug
rcl.on('drain', function () {
    console.log('drain');
});
rcl.on('idle', function () {
    console.log('idle');
});
// -----------------
// event
// -----------------
// 接続した
rcl.on('connect', function (err) {
    console.log('connect');
});
// 切断時
rcl.on('end', function (err) {
    // connect呼ばれなくてもくる
    console.log('end');
});
// 準備完了
rcl.on('ready', function (err) {
    console.log('ready');
});
// 再接続中
rcl.on('reconnecting', function (err) {
    console.log('reconnecting');
});
// エラーが発生（接続失敗など）
rcl.on('error', function (err) {
    console.log('error event - ' + rcl.host + ':' + rcl.port + ' - ' + err);
});

rcl.set('hoge', 'fuga', redis.print);
rcl.get('hoge', redis.print);

rcl.quit(function (err, res) {
    console.log('Exiting from quit command.');
});
