const fs = require("fs");
const line_feed = "\n"

var jsonToCsv = function(list, elementSeparator, fileName){
	var listElement = [];
	for (i in list){
		var line = "";
		var numElementData = jsonParameterSize(list[i]);
		var index = 1;
		for (j in list[i]){
			if (index == numElementData){
				line += list[i][j];
			}else{
				line += list[i][j] + elementSeparator;
			}
			index++;
		}
		listElement.push(line);
	}
		
	var file = fs.createWriteStream(fileName)
	.on('error', function(err) { 
		if (err)
			throw err;
	});
	listElement.forEach(function(data) { 
		file.write(data + '\n'); }
	);
	file.end();
}

var jsonParameterSize = function(data){
	var i = 0;
	for (j in data){
		i++;
	}
	return i;
}

module.exports.jsonToCsv = jsonToCsv;