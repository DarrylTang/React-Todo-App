function add(a, b) {
    return a + b;
}

console.log(add(3, 5));

var toAdd = [9, 5];
console.log(add(...toAdd)); //doing this will have all element in the array get returned

var groupA= ['Jen', 'Cory'];
var groupB= ['Vikram'];
var final = [3, ...groupA];
var finalWOspread = [3, groupA];

console.log('with spread: ' + final);
console.log('without spread: ' + finalWOspread);

var person = ['andrew', 25];
var personTwo = ['Jen', 29];

function greet (name, age) {
    console.log('Hi ' + name + ' you are ' + age);
}

greet(...person);
greet(...personTwo);

var names = ['Mike', 'Ben'];
var final = ['Andrew', ...names];

final.forEach(function(name) {
    console.log('Hi ' + name);
})
