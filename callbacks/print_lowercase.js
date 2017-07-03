var https = require ('https');
var getHTML = require('../http-functions');

var options = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/lowercase.html'
}

function lowercase(html) {
  console.log(html.toLowerCase());
}

getHTML(options, lowercase);