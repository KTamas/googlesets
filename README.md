googlesets
==========

Dead simple API for Google Sets. Inspired by [this ruby library](https://github.com/bjeanes/google-sets).

Also used to learn a lot about coding async and getting the gist of the node/npm boilerplate stuff. Not to mention learning the ins and outs of JavaScript's slightly odd RegExp handling.


Created by KTamas ([email](mailto:ktamas@ktamas.com)|[web](http://blog.ktamas.com)) and gazs ([email](mailto:gazs@bergengocia.net)|[web](http://bergengocia.net/)).
Installing:

    npm install googlesets

Usage:

    var googlesets = require("googlesets");

    googlesets.small(['carrots', 'tomatoes', 'cabbages'], function(item) {
      console.log(item);
    });

    googlesets.large(['apples', 'oranges', 'grapes', 'pears'], function(item) {
      console.log(item);
    });
