function say(filename) {
  var contents = fs.readFileSync(filename);

}

var fs = require("fs");

module.exports.say = say;
