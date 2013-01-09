var _ = require('underscore');
var alert = console.log;

// array
_.each([1, 2, 3], function(num){ alert(num); });

// object
_.each({one : 1, two : 2, three : 3}, function(num, key){ alert(num); });
