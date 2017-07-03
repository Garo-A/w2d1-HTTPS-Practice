var https = require ('https');
var getHTML = require('../http-functions');

var options = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/uppercase.html'
}

function uppercase(html){
  console.log(html.toUpperCase());
}

getHTML(options, uppercase);