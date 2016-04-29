var fs = require('fs');
var path = require('path');

module.exports = function (dirname, ext, callback){
    fs.readdir(dirname, function (err, files) {
        if (err)
            return callback(err, files);
        var matching_files = files.filter(function(n){
            return path.extname(n) === ('.' + ext);
        });
        callback(null, matching_files);
    });
};