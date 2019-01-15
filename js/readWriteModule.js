const fs = require('fs');

var parsingJsonFIle = function(data){
	var rowData = fs.readFileSync(data);
	return JSON.parse(rowData);
} 

module.exports.parsingJsonFIle = parsingJsonFIle;
	
	
