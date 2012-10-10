// typeof 演算子
function JSTYPE(value){
    switch(typeof value){
    case 'number':
        return function(){
            console.log('num');
        };
    case 'string':
        return function(){
            console.log('str');
        };
    case 'boolean':
        return function(){
            console.log('bool');
        };
    case 'object':
        return function(){
            console.log('obj');
        };
    case 'undefined':
        return function(){
            console.log('undef');
        };
    case 'function':
        return function(){
            console.log('func');
        };
    default:
        break;
    }
    return function(){
        console.log('unknown');
    };
}

var list = [
    JSTYPE("aaa"),
    JSTYPE(100),
    JSTYPE(true),
    JSTYPE(false),
    JSTYPE(null),
    JSTYPE(undefined),
    JSTYPE({}),
    JSTYPE([]),
];
list.forEach(function(l){
    l();
});

