var googlesets = require("./googlesets");

googlesets.small(['carrots', 'tomatoes', 'cabbages'], function(item) {
  console.log(item);
});

googlesets.large(['apples', 'oranges', 'grapes', 'pears'], function(item) {
  console.log(item);
});
