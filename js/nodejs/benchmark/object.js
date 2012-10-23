var MAX = 100000000;
[
function simple(){
    var TID = "buildin";
    var o = null;
    console.time(TID);
    for(var i = 0; i<MAX; ++i){
        o = {
            no : i,
            name : 'hogehoge',
        };
    }
    console.timeEnd(TID);
},
function newobj(){
    var TID = "new Object";
    var o = null;
    console.time(TID);
    for(var i = 0; i<MAX; ++i){
        o = new Object({
            no : i,
            name : 'hogehoge',
        });
    }
    console.timeEnd(TID);
},
function newfunc(){
    var TID = "new Func";
    var obj = function(no,name){
        this.no = no;
        this.name = name;
    };
    var o = null;
    console.time(TID);
    for(var i = 0; i<MAX; ++i){
        o = new obj(i, 'hogehoge');
    }
    console.timeEnd(TID);
},
function newfuncex(){
    var TID = "new Func ex";
    var base = function(no,name){
        this.no = no;
        this.name = name;
    };
    var obj = function(no,name){
        base.call(this,no,name);
    };
    var o = null;
    console.time(TID);
    for(var i = 0; i<MAX; ++i){
        o = new obj(i, 'hogehoge');
    }
    console.timeEnd(TID);
},
function(){
}
].forEach(function(fnc){
    fnc();
});

