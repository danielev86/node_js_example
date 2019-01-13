var printDetails = function(data){
	data.forEach(element=>{
		console.log(element);
	});
}

var listSize = function(data){
	return data.length;
};

var searchByFirstNameAndLastName = function(data, firstName, lastName){
	var result;
	for (i in data){
		if (data[i].first_name === firstName && data[i].last_name === lastName){
			result = data[i];
			break;
		}
	}
	return result;
};

var orderListByLastName = function(data){
	data.sort( (ele1, ele2) => ele1.last_name.localeCompare(ele2.last_name));
}

var addElementToArray = function(data, element){
	data.push(element);
}

module.exports.printDetails = printDetails;
module.exports.listSize = listSize;
module.exports.searchByFirstNameAndLastName = searchByFirstNameAndLastName;
module.exports.orderListByLastName = orderListByLastName;
module.exports.addElementToArray = addElementToArray;