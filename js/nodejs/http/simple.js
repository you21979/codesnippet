var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('oraoraoraora');
}).listen(1337, '0.0.0.0');
