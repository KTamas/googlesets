sets.js
=======

Dead simple API for Google Sets.

Also used to learn a lot about coding async and getting the gist of the node/npm boilerplate stuff.

Installing:

    npm install sets.js

Usage:

    var sets = require("sets");

    sets.googlesets(['apples', 'oranges', 'grapes', 'pears'], function(item) {
      console.log(item);
    });
