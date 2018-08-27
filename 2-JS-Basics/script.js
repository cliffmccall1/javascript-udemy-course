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

//  var firstName = 'John';
//  var age = 28;

//  //Type coercion
// console.log(firstName + ' ' + age);

// var job, isMarried;
// job = 'teacher';
// isMarried = false;

// console.log(firstName + ' is a ' + age + ' year old ' + job  + '. Is he married? ' + isMarried);
 
// // Variable mutation
// age = 'twenty eight';
// job = 'driver';

// alert(firstName + ' is a ' + age + ' year old ' + job  + '. Is he married? ' + isMarried);

// var lastName = prompt('What is his last Name?');
// console.log(firstName + ' ' + lastName);

/********************
 * Basic Operators
 */
// var now, yearJohn, yearMark;
// now = 2018;
// ageJohn = 28;
// ageMark = 33;

// //Math Operators
// yearJohn = now - ageJohn;
// yearMark = now - ageMark;

// console.log(yearJohn);
// console.log(now + 2);
// console.log(now * 2);
// console.log(now / 10);

// // Logical Operators
// var johnOlder = ageJohn < ageMark;
// console.log(johnOlder);

// // typeof operator
// console.log(typeof johnOlder);
// console.log(typeof ageJohn);
// console.log(typeof 'Mark is older than John');
// var x;
// console.log(typeof x);

/*************************************
 * Operator precedence
 */

//  var now = 2018;
//  var yearJohn = 1989;
//  var fullAge = 18;

//  // Multiple operators
//  var isFullAge = now - yearJohn >= fullAge; //true
//  console.log(isFullAge);

// // Grouping
//  var ageJohn = now - yearJohn;
//  var ageMark = 35;
//  var average = (ageJohn + ageMark) / 2;
//  console.log(average);

//  // Multiple assignments
//  var x, y;
// x =  y = (3 + 5) * 4 -6; // 8 * 4 - 6 // 32 - 6 // 26
// console.log(x, y);

// // More operators
// x *= 2;
// console.log(x);
// x += 10;
// console.log(x);
// x++;
// console.log(x);
// x--;
// console.log(x);

/*************************
 *  Coding Challenge 1
 */

 /*
 Mark and John are trying to compare their BMI, which is calculated using
 the formula: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

 1. Store Mark and John's mass and height.
 2. Calculate both BMIs
 3. Create a boolean variable containing information about
 whether Mark has a higher BMI than John.
 4. Print a string to the console containing the variable from step 3.

 */

//  var markHeight = 1.75;
//  var johnHeight = 1.66;
//  var markMass = 70;
//  var johnMass = 88;

//  var markBMI = markMass / (markHeight * markHeight);
//  var johnBMI = johnMass / (johnHeight * johnHeight);
//  console.log(markBMI, johnBMI);

//  var greaterBMI = markBMI > johnBMI;

//  console.log("Is Mark's BMI higher than John's?" + ' ' + greaterBMI);

/********************
 * If / else statements
 */

// var firstName = 'John';
// var civilStatus = 'single';

// if (civilStatus === 'married') {
//     console.log(firstName + ' is married!')
// } else {
//     console.log(firstName + ' will hopefully marry soon :)');
// }

// var isMarried = true;
// if (isMarried) {
//     console.log(firstName + ' is married!')
// } else {
//     console.log(firstName + ' will hopefully marry soon :)');
// }

// // example from Coding Challenge 1 with if /else statements
// var markHeight = 1.75;
// var johnHeight = 1.66;
// var markMass = 70;
// var johnMass = 88;

// var markBMI = markMass / (markHeight * markHeight);
// var johnBMI = johnMass / (johnHeight * johnHeight);
// console.log(markBMI, johnBMI);

// if (markBMI > johnBMI) {
//     console.log("Mark's BMI is higher than John's.");
// } else {
//     console.log("John's BMI is higher than Marks's.");
// }

/*****************************
 *  Boolean Logic
 */

// var firstName = 'John';
// var age = 20;

// if (age < 13) {
//     console.log(firstName + ' is a boy.');
// } else if(age >= 13 && age < 20) {
//     console.log(firstName + ' is a teenager.');
// } else if(age >= 20 && age < 30) {
//     console.log(firstName + ' is a young man.');
// }else {
//     console.log(firstname + ' is a man');
// }

/***********************************
 * The Ternary Operator and Switch Statements
 */
// var firstName = 'John';
// var age = 22;

// //Ternary Operator
// age >= 21 ? console.log(firstName + ' drinks beer.') :
//  console.log(firstName + ' drinks juice.');

// var drink = age >= 21 ? 'beer' : 'juice';
// console.log(drink);

// if (age >= 21) {
//     var drink = 'beer';
// } else {
//     var drink = 'juice';
// }

// Switch Statement
// var job = 'instructor';
// switch(job) {
//     case 'teacher':
//     case 'instructor':
//         console.log(firstName + ' teaches kids how to code.');
//         break;
//     case 'driver':
//         console.log(firstName + ' drive and uber');
//         break;
//     case 'designer':
//         console.log(firstName + ' desings websites');
//         break;
//     default:
//         console.log(firstName + ' does something else.')
// }


// var age = 56;

// switch(true) {
//     case age < 13:
//         console.log(firstName + ' is a boy.');
//         break;
//     case age >= 13 && age < 20:
//         console.log(firstName + ' is a teenager.');
//         break;
//     case age >= 20 && age < 30:
//         console.log(firstName + ' is a young man.');
//         break;
//     default:
//         console.log(firstName + ' is a man');
// }

/**************************************
 * Truthy and Falsy values and equality operators
 */

 // falsy values: undefines, null, 0, '', NaN
 // truthy values: NOT falsy values

// var height;

// height = 23;

// if (height || height === 0) {
//     console.log('Variable is defined');
// } else {
//     console.log('Variable has not been defined');
// }

// // Equality operators 
// if (height == '23') {
//     console.log('The == operator does type coercion!');
// }


/**************************************
 * Coding Challenge 2
 */

/* 
John and Mike both play basketball in different teams.  In the latest
3 games, John's team scored 89, 120 and 103 points, while Mike's team
scored 116, 94 and 123 points.

1. Calculate the average score for each team.
2. Decide which teams win in average, and print the winner to the console.
Also include the average score in the output.
3. Then Change the scores to show different winners.
Don't forget to take into account there might be a draw.
4. EXTRA: Mary also plays basketball, and her team scored 
97, 134 and 105 points. Like before, log the average winner
to the console. HINT: you will need the && operator to take the decision.
If you can't solve this one, just watch the solution.
5. Like before, change the scores to generate different winners. */
// var mikeAverage = (116 + 94 + 123) / 3;
// var johnAverage = (116 + 96 + 123) / 3;
// var maryAverage = (97 + 134 + 105) / 3;
// console.log(mikeAverage, johnAverage, maryAverage);

// if (mikeAverage > johnAverage && mikeAverage > maryAverage) {
//     console.log('Mike is the winner with and average of' + ' ' + mikeAverage);
// } else if (johnAverage > mikeAverage && johnAverage > maryAverage) {
//     console.log('John is the winner with and average of' + ' ' + johnAverage);
// } else if (maryAverage > mikeAverage && maryAverage > johnAverage) {
//     console.log('Mary is the winner with and average of' + ' ' + johnAverage);
// }else {
//     console.log('It is a draw!');
// }

/**************************************
 * Functions
 * DRY = Don't Repeat Yourself
 */

// function calculateAge(birthYear) {
//     return 2018 - birthYear;
// }

// var ageJohn = calculateAge(1990);
// var ageMike = calculateAge(1948);
// var ageJane = calculateAge(1969);
// console.log(ageJohn, ageMike, ageJane);

// function yearsUntilRetirement(year, firstName) {
//     var age = calculateAge(year);
//     var retirement = 65 - age;

//     if (retirement > 0 ){
//         console.log(firstName + ' retires in ' + retirement + ' years.');
//     } else {
//         console.log(firstName + ' is already retired.');
//     }
// }

// yearsUntilRetirement(1990, 'John');
// yearsUntilRetirement(1948, 'Mike');
// yearsUntilRetirement(1969, 'Jane');

/*******************
 * Function Statements and Expressions
 */
//Function Declaration
// function whatDoYouDo(job, firstName) {}

// Function expression
// var whatDoYouDo = function(job, firstName) {
//     switch(job) {
//         case 'teacher':
//             return firstName + ' teaches kids how to code';
//         case 'driver':
//             return firstName + ' drives an uber';
//         case 'designer':
//             return firstName + ' designs beautiful websites';
//         default:
//             return firstName + ' does something else';
//     }
// }

// console.log(whatDoYouDo('teacher', 'John'));
// console.log(whatDoYouDo('designer', 'Jane'));
// console.log(whatDoYouDo('retired', 'Mark'));

/**************************************
 * Arrays
 */
// Initialize New Array
// var names = ['John', 'Mark', 'Jane'];
// var years = new Array(1990, 1969, 1948);

// console.log(names[2]);
// console.log(names.length);
// Mutate Array
// names[1] = 'Ben';
// names[names.length] = 'Mary';
// console.log(names);

//Different data types
// var john = ['John', 'Smith', 1990, 'designer', false];

// john.push('blue');
// john.unshift('Mr.');
// console.log(john);

// john.pop();
// john.pop();
// john.shift();
// console.log(john);

// console.log(john.indexOf(1990));

// var isDesigner = john.indexOf('designer') === - 1 ? 'John is NOT a designer' : 'John IS a designer';
// console.log(isDesigner);

/***************************************
 * Coding Challenge
 */

 /*John and is family went on a holiday and went to 3 different restaurants.
 The bills were $124, $48 and $268.

 To tip the waiter a fair amount, John created a simple tip calculator. He likes
 to tip 20% of the bill when less that %50, 15% when the bell is between $50 and $200,
 and 10% if the bill is more that $200.

 In the end, john would like to have 2 arrays: 

 1) containing all 3 tips

 2) Containg all 3 final paid amounts (bill + tip)*/

// function tipCalculator(bill) {
//     var percentage;
//     if (bill < 50){
//         percentage = .2;
//     } else if (bill >= 50 && bill < 200) {
//          percentage = .15;
//     } else {
//          percentage = .1;
//     }
//     return percentage * bill;
//  }

// var bill = [124, 48, 269];
// var tips = [tipCalculator(bill[0]), tipCalculator(bill[1]), tipCalculator(bill[2])];
// var finalValues = [bill[0] + tips[0], bill[1] + tips[1], bill[2] + tips[2]];
// console.log(finalValues);

/*****************************
 * Objects and properties
 */
// Object Literal
// var john = {
//     firstName: 'John',
//     lastName: 'Smith',
//     birthYear: 1990,
//     family: ['Jane', 'Mark', 'Bob', 'Emily'],
//     job: 'teacher',
//     isMarried: false
// };
// console.log(john.firstName);
// console.log(john['lastName']);
// var x = 'birthYear';
// console.log(john[x]);

// john.job = 'designer';
// john['isMarried'] = true;
// console.log(john);

// new Object syntax
// var jane = new Object();
// jane.firstName = 'Jane';
// jane.birthYear = 1969;
// jane['lastName'] = 'Smith';
// console.log(jane);

/*********************************
 *  Objects and methods
 */

// var john = {
//     firstName: 'John',
//     lastName: 'Smith',
//     birthYear: 1984,
//     family: ['Jane', 'Mark', 'Bob', 'Emily'],
//     job: 'teacher',
//     isMarried: false,
//     calAge: function() {
//         this.age = 2018 - this.birthYear;
//     }
// };

// john.calAge();
// console.log(john);

/********************************
 * Coding Challenge
 */

 /*
 Remember the first coding challenge where Mark and John compared their BMIs.
 Lets now implement the same functionality with objects and methods.
 1. For each of them, create an object with properties for their full name, mass and height.
 2. Then, add a method to each object to calculate the BMI. Save the BMI to the object and also return it rom the method.
 3. In the end, log to the console who has the highest BMI, together with the
 full name and the respective BMI.
*/

// var john = {
//     firstName: 'John',
//     lastName: 'Smith', 
//     height: 1.7,
//     weight: 88,
//     calBMI: function() {
//         this.bmi = this.weight / (this.height * this.height);
//         return this.bmi;
//     }
// };
// var mark = {
//     firstName: 'Mark',
//     lastName: 'Scott', 
//     height: 1.65,
//     weight: 80,
//     calBMI: function() {
//         this.bmi = this.weight / (this.height * this.height);
//         return this.bmi;
//     }
// }

// if (john.calBMI() > mark.calBMI()) {
//     console.log(john.firstName + ' ' + john.lastName + ' has a higher BMI of ' + john.bmi);
// } else if (mark.bmi > john.bmi) {
//     console.log(mark.firstName + ' ' + mark.lastName + ' has a higher BMI of ' + mark.bmi);
// } else {
//     console.log('They have the same BMI.');
// }

/*************************************
 * Loops and iteration
 */
// for (var i = 0; i < 10; i++){
//     console.log(i);
// };

// // i = 0, 0 < 10 true, log i to console, i++
// // i = 1, 1 < 10 true, log i to the console, i ++
// // ... etc
// // i = 10, 10 < 10 false, exit the loop

// var john = ['John', 'Smith', 1990, 'designer', false];

// //for loop
// for ( var i = 0; i < john.length; i++) {
//     console.log(john[i]);
// }
// //while loop
// var i = 0;
// while(i < john.length) {
//     console.log(john[i]);
//     i++;
// }

// // continue and break statements

// for(var i= 0; i < john.length; i++) {
//     if (typeof john[i] !== 'string') continue;
//     console.log(john[i]);
// }

// for(var i= 0; i < john.length; i++) {
//     if (typeof john[i] !== 'string') break;
//     console.log(john[i]);
// }

// // Looping backwards
// for (var i = john.length - 1; i >=0; i--) {
//     console.log(john[i]);
// }

/************************************************
 * Coding Challenge
 */

 /*
 Remember the tip calculator challenge? Let's create a more advanced version using 
 everything we learned!

This time, John and his family went to 5 different restaurants. The bills were
$124, $48, $268, $180 and $42. John likes to tip 20% of the bill when the bill is 
less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is 
more than $200.

Implement a tip calculator using objects and loops:
1. Create an object with an array for the bill values
2. Add a method to calculate the tip
3. This method should include a loop to iterate over all the paid 
bills and do the tip calculations
4. As an output, create 1) a new array containing all tips, and 2) an array containing 
final paid amounts (bill + tip). HINT: Start with two empty arrays [] as properties and 
then fill them up in the loop.


EXTRA AFTER FINISHING: Mark's family also went on a holiday, going to 4 different 
restaurants. The bills were $77, $375, $110, and $45. Mark likes to tip 20% of the bill when 
the bill is less than $100, 10% when the bill is between $100 and $300, and 25% if the bill 
is more than $300 (different than John).

5. Implement the same functionality as before, this time using Mark's tipping rules
6. Create a function (not a method) to calculate the average of a given array of tips. 
HINT: Loop over the array, and in each iteration store the current sum in a variable 
(starting from 0). After you have the sum of the array, divide it by the number of elements 
in it (that's how you calculate the average)
7. Calculate the average tip for each family
8. Log to the console which family paid the highest tips on average
 */

var john = {
    fullName: 'John Smith',
    bills: [124, 48, 268, 180, 42],
    calTips: function() {
        this.tips= [];
        this.finalValues = [];

        for (var i = 0; i < this.bills.length; i++) {
           var percentage;
           var bill = this.bills[i];
           if (bill < 50) {
               percentage = .2;
           } else if (bill > 50 && bill < 200) {
               percentage = .15;
           } else {
               percentage = .1;
           }

           this.tips[i] = bill * percentage;
           this.finalValues[i] = bill + bill * percentage;
        }
    }
}
var mark = {
    fullName: 'Mark Scott',
    bills: [124, 268, 10, 101],
    calTips: function() {
        this.tips= [];
        this.finalValues = [];

        for (var i = 0; i < this.bills.length; i++) {
           var percentage;
           var bill = this.bills[i];
           if (bill < 100) {
               percentage = .2;
           } else if (bill > 100 && bill < 300) {
               percentage = .1;
           } else {
               percentage = .25;
           }

           this.tips[i] = bill * percentage;
           this.finalValues[i] = bill + bill * percentage;
        }
    }
}

john.calTips();
mark.calTips();
console.log(john, mark);

function calAverage(tips) {
    var sum = 0;
    for (var i = 0; i < tips.length; i++) {
        sum = sum + tips[i];
    }
    return sum / tips.length;
}

john.average = calAverage(john.tips);
mark.average = calAverage(mark.tips);
console.log(john, mark);

if (john.average > mark.average) {
    console.log(john.fullName + `'s family pays higher tips, with and average of $` + john.average);
} else {
    console.log(mark.fullName + `'s family pays higher tips, with and average of $` + mark.average);
}