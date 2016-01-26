var kb8 = require("../kb8");

kb8.loadKb();
var e="you", c="亂";
console.log("e:%s=%s,%s", e, kb8.e2c[e], kb8.e2p[e]);
console.log("c:%s=%s,%s,%s", c, kb8.c2sc[c], kb8.c2e[c], kb8.c2sound[c]);
