var googlesets = require("./googlesets.js");

// will work
googlesets.small(['carrots', 'tomatoes', 'cabbages'], function(err, item) {
  if (err) {
    console.log(err.message);
    return;
  }
  console.log(item);
});

// will throw an error and say 'No sets found.'
googlesets.large(["ház","doboz","disznó"], function(err, item) {
  if (err) {
    console.log(err.message);
    return;
  } 
  console.log(item);
});
