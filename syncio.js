var args = process.argv;
var fs = require('fs');
var buf = fs.readFileSync(args[2],'utf8');
var lines = 0;
lines = buf.split('\n').length - 1;
console.log(lines);