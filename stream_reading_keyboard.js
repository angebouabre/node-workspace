var fs = require("fs");
var stream = require("stream");
var events = require("events");
var readable = new stream.Readable();


readable._read = function(size) {  
  /*process.stdin.removeAllListeners("data").on("data", function(chunk) {
    readable.push(chunk);
  });*/
  process.stdin.on("data", function(chunk) {
    chunk= chunk.toString().replace(/[\r\n]/g, "");
    console.log(chunk);
    if (chunk == "exit") {
      this.pause();
      setTimeout(function() {
        process.stdin.resume();
      }, 10000);
    }
  });
};


readable.on("readable", function() {
  console.log(readable.read());
});
