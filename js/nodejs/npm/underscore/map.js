var _ = require('underscore');
var alert = console.log;

var r;
// array
r = _.map([1, 2, 3], function(num){ return num * 3; });
console.log(r);
// object
r = _.map({one : 1, two : 2, three : 3}, function(num, key){ return num * 3; });
console.log(r);
