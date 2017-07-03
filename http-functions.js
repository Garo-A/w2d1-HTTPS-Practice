var https = require('https');

module.exports = function getHTML(requests, callback){

  var data = "";

  https.get(requests, function(response) { //issues get command to object containing website info

    response.setEncoding('utf8');  //sets correct character coding.

    response.on('data', function(chunk) { //Takes eahc chunk, tells you how big they are, loads them in data
      console.log("Chunk length: ", chunk.length)
      data += chunk;
    })

    response.on('end', function(){ //Once there is no more data, then stop and print out what you found.
      callback(data);
    })

    response.on('error', function(err) {
      throw err;
    })

  })

}
