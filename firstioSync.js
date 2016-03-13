var fs = require('fs');

var filePath = process.argv[2];
var buf = fs.readFileSync(filePath);

var bufLength = buf.toString().split('\n').length;
console.log(bufLength);