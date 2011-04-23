sets.js
=======

Dead simple API for Google Sets.

Installing:

    npm install sets.js

Usage:

    var sets = require("sets");

    sets.googlesets(['apples', 'oranges', 'grapes', 'pears'], function(item) {
      console.log(item);
    });
