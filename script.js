// Variables and Data Types
// var firstName = 'John';
// console.log(firstName);

// var lastName = 'Smith';
// var age = 28;

// var fullAge = true;
// console.log(fullAge);

// var job;
// console.log(job);

// job = 'Teacher';
// console.log(job);

// Variables cannot start with a number or symbol except for $ or _
// var 3years = 3;
// var john&Mark = 'John and Mark';
// var if = 23;
// You cannot use JavaScript keywords as vairable names

/*************************
 * Variable Mutation and type coerciaon
 */

 var firstName = 'John';
 var age = 28;

 //Type coercion
console.log(firstName + ' ' + age);

var job, isMarried;
job = 'teacher';
isMarried = false;

console.log(firstName + ' is a ' + age + ' year old ' + job  + '. Is he married? ' + isMarried);
 
// Variable mutation
age = 'twenty eight';
job = 'driver';

alert(firstName + ' is a ' + age + ' year old ' + job  + '. Is he married? ' + isMarried);

var lastName = prompt('What is his last Name?');
console.log(firstName + ' ' + lastName);