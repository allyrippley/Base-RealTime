function say(filename,cb) {
  var contents = fs.readFile(filename,cb);
  return contents;
}

var fs = require("fs");

module.exports.say = say;
