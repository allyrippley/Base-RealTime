function say(filename) {
  var contents = fs.readFileSync(filename);
  return contents;
}

var fs = require("fs");

module.exports.say = say;
