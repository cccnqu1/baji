var fs = require("fs");
var kb = require("../lib/kb");

var e2cpText=fs.readFileSync(__dirname+"/e2cp.dic", 'UTF-8');
var e2c = kb.text2dic(e2cpText, {vfilter:[0]});
var e2p = kb.text2dic(e2cpText, {vfilter:[1]});
console.log("e2cpText=\n%s", e2cpText);
console.log("e2c=%j", e2c);
console.log("e2p=%j", e2p);
