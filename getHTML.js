var https = require("https");

var args = process.argv.slice(2) //takes arguments from terminal.

console.log(args[0]);
console.log(args[1]);

function printHTML(html){ //My callback function; this will be called upon at some point.
  console.log(html);
}

var options = { //This is where the information about the given website and path who's information i want.
  host: args[0],
   path: args[1]
}

function getHTML(requests, callback){

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

getHTML(options, printHTML);