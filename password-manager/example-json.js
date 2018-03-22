var person={
    name:'bechin',
    age:'24'
};
var personJson =JSON.stringify(person);

console.log(personJson);
console.log(typeof personJson);

var personObject = JSON.parse(personJson);

console.log(personObject.name);
console.log(personObject.age);
console.log(typeof personObject);

console.log('---------------');

var animal= '{"name": "bechin"}';

// convert to js object
var animalObject =JSON.parse(animal);
// add age prop
animalObject.age=1;
//conver back to JSON
animal = JSON.stringify(animalObject);
// log out
console.log(animal);
