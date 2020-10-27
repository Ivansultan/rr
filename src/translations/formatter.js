const fs = require("fs");

exports.format = function (msgs) {
  const results = {};
  for (const [id, msg] of Object.entries(msgs)) {
    results[id] = {
      defaultMessage: id,
    };
  }
  return results;
};

exports.compile = function (msgs, locale) {
  var results = {};
  const data = fs.readFileSync(`./src/translations/${locale}.json`, "utf8");
  const translations = JSON.parse(data);
  for (const [id, msg] of Object.entries(msgs)) {
    results[id] = translations[id] || id;
  }

  return results;
};

