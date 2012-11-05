var asyncblock = require('asyncblock');
var redis = require('redis');

function Query(conn){
    this.conn_ = conn;
    this.q_ = [];
};
Query.prototype = {
    query : function(key, val){
        this.q_.push({key:key, val:val});
    },
    exec : function(callback){
        var self = this;
        asyncblock(function(flow) {
            flow.errorCallback = function(e){//例外処理はここにくる
                console.log(e.stack);
                self.q_.length = 0;
            };
            var data = '';
            var results = null;
            while(self.q_.length > 0){
                data = self.q_.shift();
                self.conn_.set(data.key, data.val, flow.add());
            }
            results = flow.wait();
            console.log(results);
            callback();
        });
    },
};

module.exports = Query;

