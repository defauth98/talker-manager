const fs = require('fs');

function readFile(filename) {
  const fileContent = fs.readFileSync(filename, 'utf-8');

  return JSON.parse(fileContent);
}

module.exports = readFile;