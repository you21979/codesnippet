// instanceof 演算子
function SuperX(){
    this.name = "SuperX";
}
function ExtendX(){
    this.name = "ExtendX";
}
ExtendX.prototype = new SuperX();

var a = new SuperX();
var b = new ExtendX();

console.log('=SuperX=');
console.log({} instanceof SuperX);
console.log(a instanceof SuperX);
console.log(b instanceof SuperX);

console.log('=ExtendX=');
console.log({} instanceof SuperX);
console.log(a instanceof ExtendX);
console.log(b instanceof ExtendX);

console.log('=Array=');
console.log(new Array() instanceof Array);
console.log([] instanceof Array);
console.log({} instanceof Array);
console.log(new Uint8Array() instanceof Array);

console.log('=Object=');
console.log({} instanceof Object);
console.log([] instanceof Object);
console.log(new Uint8Array() instanceof Object);
console.log(a instanceof Object);
console.log(b instanceof Object);
console.log(function(){} instanceof Object);
console.log(100 instanceof Object);
console.log('aaa' instanceof Object);

console.log('=Number=');
console.log(0 instanceof Number);
console.log(1.0 instanceof Number);
console.log('1' instanceof Number);
console.log(new Number() instanceof Number);

console.log('=String=');
console.log('aaa' instanceof String);
console.log(0 instanceof String);
console.log(new String() instanceof String);

