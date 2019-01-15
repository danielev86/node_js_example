const listModule = require('./js/listModule');
const readWriteModule = require('./js/readWriteModule');
const csvConverter = require('./js/csvConverter');

var list = readWriteModule.parsingJsonFIle('./data/person.json');

//Test list module
var person = listModule.searchByFirstNameAndLastName(list, 'Homer', 'Simpson');
console.log("Person:" + person.first_name + " " + person.last_name);
listModule.addElementToArray(list, { "first_name" : "Montgomery", "last_name":"Burns" });
listModule.orderListByLastName(list);
listModule.printDetails(list);

//Test Json Converter
csvConverter.jsonToCsv(list, ';', "/home/daniele/prova.csv");

