var SSDP   = require('ssdp').SSDP;
var client = new SSDP();

client.on('response', function (msg, rinfo) {
    console.log(msg.toString());
    console.log(rinfo);
    console.log('\n\n');
});

client.search('ssdp:all');
