googlesets
==========

Dead simple API for Google Sets.

Also used to learn a lot about coding async and getting the gist of the node/npm boilerplate stuff. Not to mention learning the ins and outs of JavaScript's slightly odd RegExp handling.

Installing (npm package soon, until then, just git clone this repo):

    npm install googlesets

Usage:

    var googlesets = require("googlesets");

    googlesets.small(['carrots', 'tomatoes', 'cabbages'], function(item) {
      console.log(item);
    });

    googlesets.large(['apples', 'oranges', 'grapes', 'pears'], function(item) {
      console.log(item);
    });
