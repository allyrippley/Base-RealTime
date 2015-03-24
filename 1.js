function printHelp() {
  console.log("1.js (c) Ally Rippley");
  console.log("");
  console.log("usage");
  console.log("--help     print this help");
  console.log("--name     say hello to {NAME}");
  console.log("");
  console.log("");

}

var args = require("minimist")(process.argv.slice(2),{
  string: "name"
});

var name = args.name;

console.log("Hello " + name);
