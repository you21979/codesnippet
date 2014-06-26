var fs = require('fs');
var domain = require('domain');

var task1 = function(callback){
    fs.readFile("something-file", "utf-8", function (err, data) {
        if (err) {
            throw err;
        }
        callback(data);
    });
}
var task2 = function(callback){
    throw new Error('hoge');
}
var task3 = function(callback){
    callback('ok');
}
var task4 = function(callback){
}
var task5 = function(callback){
    fs.readFile("something-file", "utf-8", function (err, data) {
        callback(JSON.parse(data));
    });
}

var proc = function(proctasks, timeout, fail, success, callback){
    var n = 0;
    var check = function(){
        --n;
        if(n === 0){
            callback();
        }
    }
    proctasks.forEach(function(task){
        ++n;
        process.nextTick(function(){
            var d = domain.create();
            var to = setTimeout(function(){
                timeout(new Error('timeout'));
                check();
            }, 100);
            d.on('error', function (e) {
                clearTimeout(to);
                fail(e);
                check();
            });
            d.bind(task)(function(data){
                clearTimeout(to);
                success(data);
                check();
            });
        });
    });
}

var main = function(callback){
    var tasks = [task1, task2, task3, task4, task5];
    var tasklist = [];
    var result = {
        success : 0,
        fail : 0,
        timeout : 0,
        task : 0,
    };
    for(var i=0; i<1000; ++i){
        tasklist.push(tasks[Math.random()*tasks.length|0]);
    }
    result.task = tasklist.length;
    var update = function(){
        var proctasks = tasklist.splice(0, 100);
        if(proctasks.length === 0) return callback(null, result);

        proc(proctasks, function(){
            result.timeout++;
        }, function(err){
            result.fail++;
        }, function(data){
            result.success++;
        }, function(){
            setTimeout(update, 0);
        });
    };
    update();
}
process.on('uncaughtException', function(err) {
    console.log('Caught exception: ' + err);
});
main(function(err, data){
    if(err)console.log(err.stack);
    console.log(data);
});


