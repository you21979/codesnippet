var cluster = require('cluster');
if (cluster.isMaster) {
    var wlist = [];
    cluster.on('fork',function(worker){
        worker.on('message', function(msg){
            switch(msg){
            case 'end':
                console.log(worker.id);
                break;
            }
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
        workerCall(JSON.stringify({hoge:Math.random()}));
        process.nextTick(N);
    });
    
} else if (cluster.isWorker) {
    process.on('message', function(msg) {
        process.send('end');
    });
}
