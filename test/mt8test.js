var kb8 = require("../lib/kb8");
var mt8 = require("../lib/mt8");
var c = console;

function test() {
  kb8.loadKb();
  c.log("ce=%s", mt8.translate("一隻狗追一隻貓", 't'));
  c.log("ec=%s", mt8.translate("a dog chase a cat", 's'));
  c.log("mt3=%s", mt8.translate("I see 一隻狗追一隻貓 in the 228 park", 'st'));
  c.log("mt3=%s", mt8.translate("I see 一隻狗追一隻貓 in the 228 park", 'ruby_st'));
}

test();
