var cluster = require('cluster');
if (cluster.isMaster) {
    var wlist = [];
    cluster.on('fork',function(worker){
        worker.on('message', function(msg){
            var ret = JSON.parse(msg);
            switch(ret.status){
            case 0:
                break;
            }
            console.log(ret);
            console.log(worker.id);
        });
        worker.on('online', function() {
        });
        worker.on('disconnect', function() {
        });
        worker.on('exit',function(code, signal){
        });
    });
    for(var i=0;i<10;++i) cluster.fork();
    for(var id in cluster.workers){
        wlist.push(id);
    }
    var workerCall = function(js){
        var id = wlist.shift();
        if(id){
            cluster.workers[id].send(js);
            wlist.push(id);
        }
    }
    process.nextTick(function N(){
        workerCall(JSON.stringify({id:Math.random()*2|0, hoge:Math.random()}));
        process.nextTick(N);
    });
    
} else if (cluster.isWorker) {
    process.on('message', function(msg) {
        var obj = JSON.parse(msg);
        var ret = {status : -1};
        switch(obj.id){
        case 1:
            ret.status = 0;
            break;
        }
        process.send(JSON.stringify(ret));
    });
}
