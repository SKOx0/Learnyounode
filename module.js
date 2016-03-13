var fl = require('./filteredLS.js');

//Arguments
var pathDir = process.argv[2];
var extName = process.argv[3];
//End Arguments


fl(pathDir, extName, function(err, data){
	if(err) console.error(err);
	
	console.log(data);
});