var fs = require('fs');

var filePath = process.argv[2];
var buf = fs.readFile(filePath, function(err, data){
	if(err) console.error(err);

	if(data != null && data.length !== 0){
		console.log(data.toString().split('\n').length - 1);
	}else{
		console.error("The file is empty or null");
	}
});

