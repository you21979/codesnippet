var mysql = require('mysql');

var mcl = mysql.createClient({
  host : 'localhost',
  user : 'root',
  password : '',
  database : 'mysql',
});

mcl.query('SELECT * FROM user;', function(e,v){
    console.log(v);
});

mcl.end();
