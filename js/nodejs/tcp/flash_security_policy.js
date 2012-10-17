"use strict";
var net = require('net');
var DEFAULT_PORT = 843;
net.createServer(function(socket){
    var policy = '';
    policy += '<?xml version="1.0"?>\n';
    policy += '<!DOCTYPE cross-domain-policy SYSTEM "/xml/dtds/cross-domain-policy.dtd">\n';
    policy += '<cross-domain-policy>\n';
    policy += '<site-control permitted-cross-domain-policies="all"/>\n';
    policy += '<allow-access-from domain="*" to-ports="*" />\n';
    policy += '</cross-domain-policy>\n';
    socket.write(policy);
    socket.end();
}).listen(DEFAULT_PORT);
