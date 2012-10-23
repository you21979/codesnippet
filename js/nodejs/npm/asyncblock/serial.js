var asyncblock = require('asyncblock');
var fs = require('fs');

var path1 = './a';
var path2 = './b';

[
function(){
    console.log('-------- begin ---------');
},
function(){
    console.log('-------- async1 begin ---------');
    asyncblock(function(flow) {
        var result = null;
        flow.errorCallback = function(e){
            console.log(e.stack);
        };
        fs.readFile(path1, 'utf8', flow.add());
        result = flow.wait();
        console.log(result);

        fs.readFile(path2, 'utf8', flow.add());
        result = flow.wait();
        console.log(result);
        
        console.log('-------- async1 end ---------');
    });
},
function(){
    console.log('-------- async2 begin ---------');
    asyncblock(function(flow) {
        var content = null;
        flow.errorCallback = function(e){
            console.log(e.stack);
        };
        contents = flow.sync( fs.readFile(path1, 'utf8', flow.callback()) );
        console.log(contents);

        contents = flow.sync( fs.readFile(path2, 'utf8', flow.callback()) );
        console.log(contents);

        console.log('-------- async2 end ---------');
    });
},
function(){
    console.log('-------- end ---------');
}
].forEach(function(fnc){
    fnc();
});

