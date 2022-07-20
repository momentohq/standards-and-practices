# Momento GitHub Badges

This directory contains badges we use on our OSS projects.

These badges are generated via `shields.io`:

https://github.com/badges/shields
https://shields.io/#your-badge

Each badge in this directory has a corresponding `.source` file that contains
the `shields.io` URL that was used to generate it.

Note that some of our badges include the Momento squirrel icon.  To generate
one of these, you need to pass a base-64 encoded, URL-encoded version of the
squirrel SVG as a query parameter in the URL.

The original squirrel SVG can be found at [./MomentoSquirrel_SI.svg](./MomentoSquirrel_SI.svg).

You can base64 it by doing `cat ./MomentoSquirrel_SI.svg |base64`.  Then you need
to URL-encode it (e.g. via a website like [this one](https://www.urlencoder.io/)).

Then you just need to put the text into the query string of a `shields.io` URL.
See some of the existing `.source` files for examples.
