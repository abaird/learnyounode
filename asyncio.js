var args = process.argv;
var fs = require('fs');

fs.readFile(args[2], 'utf8', function (err, data) {
    if (err) throw err;
    console.log(data.split('\n').length - 1);
});