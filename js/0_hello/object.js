// JAVASCRIPTのオブジェクト
var w = {
a : function(){
    var obj1 = {};
    var obj2 = {
        name : 'hoge',
        job : 'hacker',
    };
    var obj3 = new Object();
    var obj4 = new Object({
        name : 'hoge',
        job : 'hacker',
    });

    // 参照専用にする
    Object.freeze(obj2);

    // 要素追加
    obj1.hoge = 'fuga';
    obj1['number'] = 0;
    obj1.testnull = null;
    obj1.xnull = null;
    obj1.xundefined = undefined;
    obj1.testundefined = undefined;
    console.log(obj1);

    // 要素があるかチェック
    if(!obj1.hasOwnProperty('test')){
        console.log('nothing');
    }
    if(!('test' in obj1)){
        console.log('nothing');
    }
    if(!obj1.test){
        console.log('nothing');
    }
    if(!obj1.testnull){
        console.log('OOPS NULL field');
    }
    if(!obj1.testundefined){
        console.log('OOPS UNDEFINED field');
    }

    // 要素のスキャン
    for(var key in obj1){
        console.log(key+':'+obj1[key]);
    }
    
    // 要素削除
    delete obj1['testnull'];
    delete obj1.testundefined;

    // シリアライズ
    var j = JSON.stringify(obj1);
    console.log(j);
    var o = JSON.parse(j);
    console.log(o);
},
};
for(var k in w){
    w[k]();
}
