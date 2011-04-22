var _ = require("underscore");
var http = require("http");
var sets_path = 'http://labs.google.com/sets?hl=en&btn=Large+Set&';

function sets(items) {
  // q1=lofasz&q2=faszlo etc
  var c = 0; //tudom hogy undorito
  var qitems =  _.map(items, function(i) {
    c += 1;
    return "q" + c + "=" + i;
  });
  var options = { host: "labs.google.com"
                , port: 80
                , path: '/sets?hl=en&btn=Large+set&' + qitems.join('&')
                }  
  var response = ""
  var to_return;
  http.get(options, function(res) {
    res.on('data', function(chunk) {
      response += chunk;
    });
    res.on('end', function() {
      console.log(response.scan(/q=[^">]/))
    });
  });
} 

sets(['a', 'b', 'c']);
