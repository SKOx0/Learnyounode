var fs = require('fs');
var path = require('path');

//Arguments
var pathDir = process.argv[2];
var extName = process.argv[3];
//End Arguments

fs.readdir(pathDir, function(err, data){
	if(err) console.log(err);
	//Primeiro filtra os arquivos do diretório
	//pelo nome da extensão
	//depois retorna um por um
	var getFileExt = data.filter(function(f){
		return path.extname(f) === '.' + extName;
	}).forEach(function(e){
		console.log(e);
	});
});