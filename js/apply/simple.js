

var x = function(){
    console.log(arguments);
    this.z = 0;
}

var test = function(a,b){
    x.apply(this, arguments);
}

var p = new test("a",[1,2,4]);
console.log(p);
