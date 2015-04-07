var fs = require("fs");
var stream = require("stream");
var events = require("events");
var readable = new stream.Readable();

var content = fs.readFileSync("stream.txt");

//console.dir(readable);
//console.log(readable instanceof events.EventEmitter);

readable.setEncoding("utf8"); //Definit l'encodage des octets à afficher

readable._read = function(size) { //la methode _read() retourne les octets lus sur le stream 
                                  //Le param size indique la taille en octets du buffer pouvant etre lu lors de l'appel de _read()
  if (content) {
    readable.push(content); //La methode push permet d'envoyer les octets sur le stream
    //console.log(size);
  }
  content = "";
};

//La methode privée _read() est appelé quand l'evènement data est reçu.
/*
readable.on("data", function(chunck) { //le param chunck transmis dans l'evenement data correspond au paquet d'octets reçus
  console.log(chunck);  
});
*/

readable.on("readable", function() {
  var buf = readable.read();
  console.log(buf);
});
