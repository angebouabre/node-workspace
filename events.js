
var events = require("events");
var obj1 = new events.EventEmitter();

obj1.addListener("event1", function(p){
  console.log("Nom = " + p.nom, " Prenom = " + p.prenom);
});

var p1 = {nom : "Bouable", prenom: "Ange"}
obj1.emit("event1", p1);
