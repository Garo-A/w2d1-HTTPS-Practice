var https = require("https");

function getAndPrintHTMLChunks() {

  var options = { //This is where the information about the given website and path who's information i want.
    host: "sytantris.github.io",
    path: "/http-examples/step1.html"
  }

  var data = "";

  https.get(options, function(response) { //issues get command to object containing website info

    response.setEncoding('utf8');  //sets correct character coding.

    response.on('data', function(chunk) { //Takes eahc chunk, tells you how big they are, loads them in data
      console.log("Chunk length: ", chunk.length)
      data += chunk;
    })

    response.on('end', function(){ //Once there is no more data, then stop and print out what you found.
      console.log(data);
    })

  })

}

getAndPrintHTMLChunks();