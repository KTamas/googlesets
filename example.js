var sets = require("./sets");

sets.googlesets(['apples', 'oranges', 'grapes', 'pears'], function(item) {
  console.log(item);
});
