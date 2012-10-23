var asyncblock = require('asyncblock');
var fs = require('fs');

var path1 = './a';
var path2 = './b';
var paths = [path1,path2];
var path = path1;

[
function(){
    console.log('-------- begin ---------');
},
function(){
    console.log('-------- async1 begin ---------');
    asyncblock(function(flow) {
        flow.errorCallback = function(e){
            console.log(e.stack);
        };
        fs.readFile(path1, 'utf8', flow.set('contents1'));
        fs.readFile(path2, 'utf8', flow.set('contents2'));
        console.log(flow.get('contents1') + flow.get('contents2'));
        console.log('-------- async1 end ---------');
    });
},
function(){
    console.log('-------- async2 begin ---------');
    asyncblock(function(flow) {
        flow.errorCallback = function(e){
            console.log(e.stack);
        };
        for(var i = 0; i < 2; i++){
            fs.readFile(paths[i], 'utf8', flow.add(i));                                    
        }
        var results = flow.wait();
        console.log(results);
        console.log('-------- async2 end ---------');
    });
},
function(){
    console.log('-------- async3 begin ---------');
    asyncblock(function(flow) {
        flow.errorCallback = function(e){
            console.log(e.stack);
        };
        var contents = flow.sync( fs.readFile(path, 'utf8', flow.callback()) );
        console.log(contents);
        console.log('-------- async3 end ---------');
    });
},
function(){
    console.log('-------- end ---------');
}
].forEach(function(fnc){
    fnc();
});

