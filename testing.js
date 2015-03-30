function say(filename,cb) {
  var contents = fs.readFile(filename,function(err,contents){
    if(err) {
      cb(err);
    }
    else {
      setTimeout(function() {
        cb(null,contents);
      },3000);
    }
  });
  return contents;
}

var fs = require("fs");

module.exports.say = say;
