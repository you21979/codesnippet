[
    {}
    ,[]
    ,0
    ,'aaa'
    ,{val:''}
    ,{val:'aaa'}
    ,{val:['aaa','bbbbb']}
    ,{val:100}
    ,{val:[100, 300, 800]}
    ,{val:100.5}
    ,{val:[100.5, 200.1, 400.333]}
    ,{val:10000000000000000000000}
    ,{val:[]}
    ,{val:{}}
    ,{val:{name : 'test', id : 100}}
    ,{val:undefined}
    ,{val:null}
].forEach(function(data){
    var enc = JSON.stringify(data);
    var dec = JSON.parse(enc);
    console.log(enc);
});
