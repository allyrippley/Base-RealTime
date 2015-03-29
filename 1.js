function printHelp() {
  console.log("1.js (c) Ally Rippley");
  console.log("");
  console.log("usage");
  console.log("--help            print this help");
  console.log("--file={NAME}     read the file of {NAME}");
  console.log("");
  console.log("");

}

var args = require("minimist")(process.argv.slice(2),{
  string: "name"
});


if (args.help || !args.file) {
  printHelp();
  process.exit(1);
}

var hello = require("./testing.js");

hello.say(args.file, function(err,contents) {
  console.log(contents.toString());
});
