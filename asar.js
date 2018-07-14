var fs = require("fs");

fs.writeFileSync('./out.log', 'Trying to stat ASAR...\n');

var error = new Error('No Error');
try {
    fs.statSync('./foo.asar').isDirectory();
} catch (e) {
    error = e;
}

fs.appendFileSync('./out.log', '...finished to stat ASAR with error: ' + error.toString());