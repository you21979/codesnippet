var asyncblock = require('asyncblock');
var mysql = require('mysql');
var Query = require('./query');

var mcl = mysql.createConnection({
  host : '127.0.0.1',
  user : 'root',
  password : '',
  database : 'test',
});

var q = new Query(mcl);
//q.query('begin');
for(var i=0;i<10000;++i){
    q.query('insert into test1(id,rnd,str) values(?,?,?);', [i, Math.random()*100000|0, 'test']);
}
//q.query('commit');
console.log('GO');
console.time('QUERY');
q.exec(function(){
    console.timeEnd('QUERY');
    mcl.end();
});
