var net = require('net');
var sockets = [];

var server = net.Server(function(socket) {
   sockets.push(socket);
   socket.on('data', function(d) {
       for (var i=0;i < sockets.length; i++) {
           sockets[i].write(d);
       }
   });
   socket.on('end', function() {
       var i = sockets.indexOf(socket);
       sockets.splice(i,1);
   });
}).listen(1333);
