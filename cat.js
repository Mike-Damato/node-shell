const fs = require('fs');

module.exports = (file) => {
  fs.readFile(file, (err, data) => {
    if (err) throw err;
    console.log(data);
  });
}
