var fs = require('fs');
var cache = {};
var callscript = function(scriptname){
    var data = null;
    if( scriptname in cache ){
        data = cache[scriptname];
    }
    else{
        data = fs.readFileSync(scriptname);
        cache[scriptname] = data;
    }
    eval(data.toString());
}
callscript('./script.js');
callscript('./script.js');
callscript('./script.js');
callscript('./script.js');
callscript('./script.js');
