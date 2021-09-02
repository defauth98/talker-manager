const fs = require('fs');

function writeFile(filename, content) {
  fs.writeFileSync(filename, content);
}

module.exports = writeFile;