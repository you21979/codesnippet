// JAVASCRIPTの配列
var w = [
// 通常の配列
function(){
    // 配列初期化
    var list1 = [];
    var list2 = ['a','b','hoge'];
    // 配列初期化
    var list3 = new Array();
    // 数量指定配列初期化
    var list4 = new Array(100);
    // 二次元配列初期化
    var list5 = new Array(
        [1,2,3],
        [4,5,6],
        [7,8,9]
    );
    // 二次元配列
    var list6 = new Array(4);
    for(var i=0;i<list6.length;++i){
        list6[i] = new Array(10);
    }

    // 配列参照
    console.log(list2[1]);

    // 二次元配列参照
    console.log(list5[1][1]);

    // 配列の後ろに追加
    list1.push({name:'test1'});
    list1.push({name:'test2'});
    list1.push({name:'test3'});
    list1.push({name:'test4'});
    list1.push({name:'test5'});

    // 配列の先頭に追加
    list1.unshift({name:'test0'});

    // 配列のサイズを取得
    console.log(list1.length);

    // 配列スキャン1
    list1.forEach(function(value,idx){
        //console.log(idx);
        console.log(value);
    });
    // list4は配列は確保されているがforEachには反応しない
    // lengthはある
    list4.forEach(function(value,idx){
        //console.log(idx);
        console.log(value);
    });
    console.log(list4.length);
    // 配列スキャン2
    var len = list1.length;
    for(var i=0; i<len; ++i){
        //console.log(i);
        console.log(list1[i]);
    }

    // 多次元配列スキャン
    list5.forEach(function(w){
        w.forEach(function(v){
            console.log(v);
        });
    });

    // 配列の先頭を削除
    var n1 = list1.shift();
    console.log(list1);

    // 配列の最後を削除
    var n2 = list1.pop();
    console.log(list1);

    // 配列の途中を削除
    list1.splice(1,1);
    console.log(list1);

    // 配列を全部削除
    list1.length = 0;
    console.log(list1);

    // 配列のソート
    list1.push({name:'test1'});
    list1.push({name:'test2'});
    list1.push({name:'test3'});
    list1.push({name:'test4'});
    list1.push({name:'test5'});
    list1.sort(function(a,b){
        return 1; //1なら交換される
    });
    console.log(list1);

    // 逆順ソート
    list1.reverse();
    console.log(list1);
},
// 型付き配列
function(){
    var u8list = new Uint8Array(100);
    console.log(u8list[0]);
    u8list[0] = 100;
    console.log(u8list[0]);
    for(var i=0;i<u8list.length;++i){
        u8list[i] = 10;
    }
/*
Uint8Array
Uint16Array
Uint32Array
Int8Array
Int16Array
Int32Array
Float32Array
Float64Array
*/
}
];

w.forEach(function(func){
    func();
});

