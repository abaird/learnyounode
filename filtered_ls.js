var args = process.argv;
var fs = require('fs');
var path = require('path');

fs.readdir(args[2], function (err, files) {
    if (err) throw err;
    files.forEach(function(n){
        if (path.extname(n) === ('.' + args[3]))
            console.log(n);
    });
});