const { compile } = require("./formatter");

exports.compile = function (msgs) {
  return compile(msgs, "ru")
};

