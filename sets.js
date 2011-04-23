var http = require("http");

var sets = function (items, callback) {
  // query string: q1=apples&q2=oranges&q3=grapes etc
  var c = 0;
  var query_string = items.map(function(i) {
    c += 1;
    return "q" + c + "=" + i;
  }).join('&');
  var options = { host: "labs.google.com"
                , port: 80
                , path: '/sets?hl=en&btn=Large+set&' + query_string 
                }  
  http.get(options, function (res) {
    var body = "";
    res.on('data', function(chunk) {
      body += chunk;
    });
    res.on('end', function() {
      var re = /<a href="http:\/\/www\.google\.com\/search\?hl=en&amp;q=[^"]+">(.*?)<\/a>/g;
      var urlmatches = body.match(re);
      var matches = urlmatches.map(function (i) {
        var re2 = /<a href="http:\/\/www\.google\.com\/search\?hl=en&amp;q=[^"]+">(.*?)<\/a>/g; //nem mondok semmit
        var vegre = re2.exec(i)[1];
        return vegre;
      });
      callback(matches);
    });
  });
} 

sets(['a', 'b', 'c'], function(i) { console.log(i); });
