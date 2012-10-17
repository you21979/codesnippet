var dgram = require('dgram');

//udp4, udp6, unix_dgram
var type = 'udp4';
var socket = dgram.createSocket(type, function (msg, rinfo) {
    console.log('got message from '+ rinfo.address +':'+ rinfo.port);
    console.log('data len: '+ rinfo.size + ' data: ' + msg.toString('ascii', 0, rinfo.size));
    sock.send(message, 0, message.length, rinfo.port, rinfo.address);
});
socket.bind(1333,'0.0.0.0');
