var utils = require ('./dir_utils.js');
var dir = process.argv[2];
var filter = process.argv[3];

utils(dir, filter, function (err, files) {
    if(err) 
        return console.log(err);
    files.forEach(function(file){
        console.log(file);
    })
});