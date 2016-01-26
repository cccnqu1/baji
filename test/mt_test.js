var fs = require("fs");
var mt = require("../lib/mt");
var kb = require("../lib/kb");
var c = console;

function test(dicText) {
  var c2e = kb.text2dic(dicText, {spliter:";", k:1});
  var e2c = kb.text2dic(dicText, {spliter:";", k:0});
  var ce = mt.translate(c2e, "一隻狗追一隻貓", "cline");
  var ec = mt.translate(e2c, "a dog chase a cat", "eline");
//  c.log("c2e=%j", c2e);
//  c.log("e2c=%j", e2c);
  c.log("ce=%j", ce);
  c.log("ec=%j", ec);
}

test("dog=狗;cat=貓;a=一隻;a=一;chase=追;eat=吃", ";");

