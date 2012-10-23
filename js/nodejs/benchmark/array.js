var MAX = 100000000;
[
function(){
    var TID = "buildin";
    var o = null;
    console.time(TID);
    for(var i = 0; i<MAX; ++i){
        o = [0,1,2,3,4,5,6,7,8,9];
    }
    console.timeEnd(TID);
},
function(){
    var TID = "Array1";
    var o = null;
    console.time(TID);
    for(var i = 0; i<MAX; ++i){
        o = Array(10);
        o[0] = 0;
        o[1] = 1;
        o[2] = 2;
        o[3] = 3;
        o[4] = 4;
        o[5] = 5;
        o[6] = 6;
        o[7] = 7;
        o[8] = 8;
        o[9] = 9;
    }
    console.timeEnd(TID);
},
function(){
    var TID = "Array2";
    var o = null;
    console.time(TID);
    for(var i = 0; i<MAX; ++i){
        o = Array();
        o[0] = 0;
        o[1] = 1;
        o[2] = 2;
        o[3] = 3;
        o[4] = 4;
        o[5] = 5;
        o[6] = 6;
        o[7] = 7;
        o[8] = 8;
        o[9] = 9;
    }
    console.timeEnd(TID);
},
function(){
    var TID = "Array3";
    var o = null;
    console.time(TID);
    for(var i = 0; i<MAX; ++i){
        o = Array();
        o.push(0);
        o.push(1);
        o.push(2);
        o.push(3);
        o.push(4);
        o.push(5);
        o.push(6);
        o.push(7);
        o.push(8);
        o.push(9);
    }
    console.timeEnd(TID);
},
function(){
    var TID = "Array4";
    var o = null;
    console.time(TID);
    for(var i = 0; i<MAX; ++i){
        o = Array(0,1,2,3,4,5,6,7,8,9);
    }
    console.timeEnd(TID);
},
function(){
}
].forEach(function(fnc){
    fnc();
});

