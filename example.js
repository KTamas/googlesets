var sets = require("./sets.js");

sets.googlesets(['apples', 'oranges', 'grapes', 'pears'], function(item) {
  console.log(item);
});
