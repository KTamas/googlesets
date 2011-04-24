googlesets
==========

Dead simple API for [Google Sets](http://labs.google.com/sets). Inspired by [this ruby library](https://github.com/bjeanes/google-sets).

Also used to learn a lot about coding async and getting the gist of the node/npm boilerplate stuff. Not to mention learning the ins and outs of JavaScript's slightly odd RegExp handling.

Unfortunately you might run into captchas with too many requests. Not much we can do about that :(

Created by KTamas ([email](mailto:ktamas@ktamas.com)|[web](http://blog.ktamas.com)) and gazs ([email](mailto:gazs@bergengocia.net)|[web](http://bergengocia.net/)).

Installing:

    npm install googlesets

Usage:

    var googlesets = require("googlesets");

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
