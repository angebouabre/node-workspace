//Exemple serveur HTTP

/*
var http = require('http');

var server = http.createServer(function(request, response) {
    response.setHeader("Content-Type", "text/html");
    response.write("<h3>Bonjour</h3>");
    response.end();
});

server.listen(3000);
console.log("Serveur HTTP démarré sur le port 3000.");
*/

var module1 = require("module1")
console.log(module1.add(3,4));
console.log(module1.mult(10,20));

console.log(module);
