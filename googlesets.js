var http = require("http");
// I really, really, really hate regexp handling in javascript.
// var regexp = /<a href="http:\/\/www\.google\.com\/search\?hl=en&amp;q=[^"]+">(.*?)<\/a>/g;
var regexp = '<a href="http:\\/\\/www\\.google\\.com\\/search\\?hl=en&amp;q=[^"]+">(.*?)<\\/a>';

var googlesets = exports;

var get = function (items, what, callback) {
  // query string: q1=apples&q2=oranges&q3=grapes etc
  var query_string = items.map(function(item, c) {
    return "q" + (c+1) + "=" + item;
  }).join('&');
  var query = { host: "labs.google.com"
              , port: 80
              , path: '/sets?hl=en&btn=' + what + '&' + query_string 
              }; 
  http.get(query, function (res) {
    var body = "";
    res.on('data', function(chunk) {
      body += chunk;
    });
    res.on('end', function() {
      var urlmatches = body.match(new RegExp(regexp, 'g'));
      if (urlmatches === null) {
        callback(new Error("No sets found."), null);
      } else {
        var matches = urlmatches.map(function (item) {
          return new RegExp(regexp, 'g').exec(item)[1];
        });
        callback(null, matches);
      }
    });
  });
}; 

googlesets.large = function(items, callback) {
  return get(items, 'Large+set', callback);
};

googlesets.small = function(items, callback) {
  return get(items, 'Small+set', callback);
};
