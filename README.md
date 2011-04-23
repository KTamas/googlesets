sets.js
=======

Dead simple API for Google Sets.

Also used to learn a lot about coding async and getting the gist of the node/npm boilerplate stuff. Not to mention learning the ins and outs of JavaScript's slightly odd RegExp handling.

Installing (npm package soon):

    npm install sets.js

Usage:

    var sets = require("sets");

    sets.googlesets(['apples', 'oranges', 'grapes', 'pears'], function(item) {
      console.log(item);
    });
