var fs = require('fs');
var path = require('path');

module.exports = function teste (pathDir, extName, cb){
	fs.readdir(pathDir, function(err, data){
	if(err) 
		return cb(err);
	//Primeiro filtra os arquivos do diretório
	//pelo nome da extensão
	//depois retorna um por um	
	var getFileExt = data.filter(function(f){
		return path.extname(f) === '.' + extName;
	}).forEach(function(e){
		cb(null, e);
	});


});
}