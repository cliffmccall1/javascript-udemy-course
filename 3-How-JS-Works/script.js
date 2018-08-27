///////////////////////////////////////
// Lecture: Hoisting - Hoisting with functions only works with declarations

//functions
// calculateAge(1956);

// function calculateAge(year) {
//     console.log(2016-year);
// }

// // retirement(1990);

// var retirement = function(year) {
//     console.log(65 - (2016 - year));
// }

// //variables
// console.log(age);
// var age = 23; //global variable
// console.log(age);

// function foo() {
//     var age = 65; 
//     console.log(age);
// }
// foo();
// console.log(age);

///////////////////////////////////////
// Lecture: Scoping


// First scoping example


// var a = 'Hello!';
// first();

// function first() {
//     var b = 'Hi!';
//     second();

//     function second() {
//         var c = 'Hey!';
//         console.log(a + b + c);
//     }
// }


// Example to show the differece between execution stack and scope chain


// var a = 'Hello!';
// first();

// function first() {
//     var b = 'Hi!';
//     second();

//     function second() {
//         var c = 'Hey!';
//         third()
//     }
// }

// function third() {
//     var d = 'John';
//     console.log(a + d);
// }


///////////////////////////////////////
// Lecture: The this keyword

/*
Regular function call: the this keyword points at the global object

Method Call: the this variable points to the object that is calling the method

The this keyword is not assigned a value until a function where it is defined is actually called
*/
/*
console.log(this);

calculateAge(1985);

function calculateAge(year) {
    console.log(2016 - year);
    console.log(this);
}
*/
// var john = {
//     name: 'John',
//     yearOfBirth: 1990,
//     calculateAge: function() {
//         console.log(this);
//         console.log(2016 - this.yearOfBirth);

//         function innerFunction() {
//             console.log(this);
//         }
//         innerFunction;
//     }
// }
// john.calculateAge();

// var mike = {
//     name: 'Mike',
//     yearOfBirth: 1984
// };

// mike.calculateAge = john.calculateAge;
// mike.calculateAge();

//the This keyword becomes something once the method gets called