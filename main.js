const listModule = require('./listModule');
const readWriteModule = require('./readWriteModule');

var list = readWriteModule.parsingJsonFIle('./data/person.json');

var person = listModule.searchByFirstNameAndLastName(list, 'Homer', 'Simpson');
console.log("Person:" + person.first_name + " " + person.last_name);
listModule.orderListByLastName(list);
listModule.printDetails(list);