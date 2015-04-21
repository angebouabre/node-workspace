var fs = require("fs");
fs.readFile("fic.txt", function(err, data){
  console.log("Contenu du fichier fic.txt: ");
  console.log(data);
});
console.log("Suite 1 du programme.")
console.log("Suite 2 du programme.")
console.log("Suite 3 du programme.")
