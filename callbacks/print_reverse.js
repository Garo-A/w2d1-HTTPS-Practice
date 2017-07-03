var https = require ('https');
var getHTML = require('../http-functions');

var options = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/reverse.html'
}

function reverse(html) {
  var reversed = html.split('').reverse().join('');
  console.log(reversed);
}

getHTML(options, reverse);