// ***********************Function Constructor***********************

// var john = {
//   name: 'John',
//   yearOfBirth: 1990,
//   job: 'teacher'
// };

// function constructor variables start with a capital letter
// var Person = function(name, yearOfBirth, job) {
//   this.name = name;
//   this.yearOfBirth = yearOfBirth;
//   this.job = job;
// };

// each person has access to the functoin because it is in the prototype property
// Person.prototype.calculateAge = function() {
//   console.log(2018 - this.yearOfBirth);
// };

// // Everyone will inherit the same last name because it is now part of the prototype property
// Person.prototype.lastName = 'Smith';

// // When we us the new operator a brand new empty object is created
// var john = new Person('John', 1990, 'teacher');
// var jane = new Person('Jane', 1969, 'designer');
// var mark = new Person('Mark', 1948, 'retired');

// john.calculateAge();
// jane.calculateAge();
// mark.calculateAge();

// console.log(john.lastName, jane.lastName, mark.lastName);

/***********************Creating object with Object.create***********************/
/* First define an object that will act as the prototype and then create a new object based on that very prototype.
    object.create builds an object that inherits directly from the one passed through the arguement.
    The function constructor the newly created object inherits from the constructor's prototype property

*/

// var personProto = {
//   calculateAge: function() {
//     console.log(2018 - this.yearOfBirth);
//   }
// };

// var john = Object.create(personProto);
// john.name = 'John';
// john.yearOfBirth = 1990;
// john.job = 'teacher';

// var jane = Object.create(personProto, {
//   name: { value: 'Jane' },
//   yearOfBirth: { value: 1969 },
//   job: { values: 'desinger' }
// });

// ***********************  Primitives vs objects ***********************

// // Primitives
// var a = 23;
// var b = a;
// a = 46;
// console.log(a);
// console.log(b);

// // Ojects
// var obj1 = {
//   name: 'John',
//   age: 26
// };
// var obj2 = obj1;
// obj1.age = 30;
// console.log(obj1.age);
// console.log(obj2.age);

// // Functions
// var age = 27;
// var obj = {
//   name: 'Jonas',
//   city: 'Lisbon'
// };

// function change(a, b) {
//   a = 30;
//   b.city = 'San Francisco';
// }
// change(age, obj);

// console.log(age);
// console.log(obj.city);

// ***********************  Passing functions as arguments ***********************

// var years = [1990, 1965, 1937, 2005, 1998];

// function arrayCalc(arr, fn) {
//   var arrRes = [];
//   for (var i = 0; i < arr.length; i++) {
//     arrRes.push(fn(arr[i]));
//   }
//   return arrRes;
// }

// function calculateAge(el) {
//   return 2018 - el;
// }

// function isFullAge(el) {
//   return el >= 18;
// }

// function maxHeartRate(el) {
//   if (el >= 18 && el <= 81) {
//     return Math.round(206.9 - 0.67 * el);
//   } else {
//     return -1;
//   }
// }

// var ages = arrayCalc(years, calculateAge);
// var fullAges = arrayCalc(ages, isFullAge);
// var rates = arrayCalc(ages, maxHeartRate);

// console.log(ages);
// console.log(fullAges);
// console.log(rates);

// ***********************  Functions returning functions ***********************
// function interviewQuestion(job) {
//   if (job === 'designer') {
//     return function(name) {
//       console.log(name + ' , can you please explain what UX design is?');
//     };
//   } else if (job === 'teacher') {
//     return function(name) {
//       console.log(name + ', what subject do you teach?');
//     };
//   } else {
//     return function(name) {
//       console.log('Hello ' + name + ', what do you do?');
//     };
//   }
// }

// var teacherQuestion = interviewQuestion('teacher');
// var designQuestion = interviewQuestion('desginer');

// teacherQuestion('John');
// designQuestion('Jane');

// ***********************  Immediately Invoked Function Expressions (IIFE) ***********************

// function game() {
//   var score = Math.random() * 10;
//   console.log(score >= 5);
// }
// game();

// // IIFE

// // (function() {
// //   var score = Math.random() * 10;
// //   console.log(score >= 5);
// // })();

// // console.log(score); // cannot log because data is private

// (function(goodLuck) {
//   var score = Math.random() * 10;
//   console.log(score >= 5 - goodLuck);
// })(5);

// ***********************  Closures ***********************
// function retirement(retirementAge) {
//   var a = ' years left until retirement.';
//   return function(yearOfBirth) {
//     var age = 2018 - yearOfBirth;
//     console.log(retirementAge - age + a);
//   };
// }

// var retirementUS = retirement(66);
// var retirementGermany = retirement(65);
// var retirementIceland = retirement(67);

// retirementUS(1990);
// retirementGermany(1990);
// retirementIceland(1990);

// // retirement(66)(1990);

// function interviewQuestion(job) {
//   if (job === 'designer') {
//     return function(name) {
//       console.log(name + ' , can you please explain what UX design is?');
//     };
//   } else if (job === 'teacher') {
//     return function(name) {
//       console.log(name + ', what subject do you teach?');
//     };
//   } else {
//     return function(name) {
//       console.log('Hello ' + name + ', what do you do?');
//     };
//   }
// }

// interviewQuestion('teacher')('John');

// ***********************  Bind, Call and Apply ***********************

// var john = {
//   name: 'John',
//   age: 26,
//   job: 'teacher',
//   presentation: function(style, timeOfDay) {
//     if (style === 'formal') {
//       console.log(
//         'Good ' +
//           timeOfDay +
//           ", Ladies and gentlemen! I'm " +
//           this.name +
//           ", I'm a " +
//           this.job +
//           " and I'm " +
//           this.age +
//           ' years old. Have a nice ' +
//           timeOfDay +
//           '.'
//       );
//     } else if (style === 'friendly') {
//       console.log(
//         "Hey! What's up?  I'm " +
//           this.name +
//           ", I'm a " +
//           this.job +
//           " and I'm " +
//           this.age +
//           ' years old. Have a nice ' +
//           timeOfDay +
//           '.'
//       );
//     }
//   }
// };
// var emily = {
//   name: 'Emily',
//   age: 35,
//   job: 'designer'
// };

// john.presentation('formal', 'morning');

// // method borrowing using the call method
// john.presentation.call(emily, 'friendly', 'afternoon');

// var johnFriendly = john.presentation.bind(john, 'friendly');

// johnFriendly('night');

// var emilyFormal = john.presentation.bind(emily, 'formal');
// emilyFormal('afternoon');

// var years = [1990, 1965, 1937, 2005, 1998];

// function arrayCalc(arr, fn) {
//   var arrRes = [];
//   for (var i = 0; i < arr.length; i++) {
//     arrRes.push(fn(arr[i]));
//   }
//   return arrRes;
// }

// function calculateAge(el) {
//   return 2018 - el;
// }

// function isFullAge(limit, el) {
//   return el >= limit;
// }

// var ages = arrayCalc(years, calculateAge);

// var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));
// console.log(ages);
// console.log(fullJapan);

// ***********************  Coding Challenge 7 ***********************
/*
--- Let's build a fun quiz game in the console! ---
1. Build a function constructor called Question to describe a question. A question should include:
a) question itself
b) the answers from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
c) correct answer (I would use a number for this)
2. Create a couple of questions using the constructor
3. Store them all inside an array
4. Select one random question and log it on the console, together with the possible answers (each question should have a number) (Hint: write a method for the Question objects for this task).
5. Use the 'prompt' function to ask the user for the correct answer. The user should input the number of the correct answer such as you displayed it on Task 4.
6. Check if the answer is correct and print to the console whether the answer is correct ot nor (Hint: write another method for this).
7. Suppose this code would be a plugin for other programmers to use in their code. So make sure that all your code is private and doesn't interfere with the other programmers code (Hint: we learned a special technique to do exactly that).
8. After you display the result, display the next random question, so that the game never ends (Hint: write a function for this and call it right after displaying the result)
9. Be careful: after Task 8, the game literally never ends. So include the option to quit the game if the user writes 'exit' instead of the answer. In this case, DON'T call the function from task 8.
10. Track the user's score to make the game more fun! So each time an answer is correct, add 1 point to the score (Hint: I'm going to use the power of closures for this, but you don't have to, just do this with the tools you feel more comfortable at this point).
11. Display the score in the console. Use yet another method for this.
*/

(function() {
  function Question(question, answers, correct) {
    this.question = question;
    this.answers = answers;
    this.correct = correct;
  }

  Question.prototype.displayQuestion = function() {
    console.log(this.question);

    for (var i = 0; i < this.answers.length; i++) {
      console.log(i + ': ' + this.answers[i]);
    }
  };

  Question.prototype.checkAnswer = function(ans, callback) {
    var total;

    if (ans === this.correct) {
      console.log('Correct answer!');
      total = callback(true);
    } else {
      console.log('Wrong answer. Try again :)');
      total = callback(false);
    }

    this.displayScore(total);
  };

  Question.prototype.displayScore = function(score) {
    console.log('Total Points: ' + score);
    console.log('------------------------------');
  };

  var q1 = new Question(
    'The Office is the only reason to have a Netflix subsription?',
    ['Yes', 'No'],
    0
  );

  var q2 = new Question(
    'Who is the assistant to the regional manager?',
    ['Dwight', 'Micheal', 'Jim'],
    0
  );

  var q3 = new Question(
    'What best describes The Office?',
    ['Boring', 'Funny', 'Greatest Show Ever', 'Parks and Recreation is better'],
    3
  );

  var questions = [q1, q2, q3];

  function score() {
    var total = 0;
    return function(correct) {
      if (correct) {
        total++;
      }
      return total;
    };
  }
  var keepScore = score();

  function nextQuestion() {
    var n = Math.floor(Math.random() * questions.length);
    questions[n].displayQuestion();
    var answer = prompt(
      'Welcome to The Office Trivia. Please select the correct answer. You must enter "exit" to leave the game'
    );
    if (answer !== 'exit') {
      questions[n].checkAnswer(parseInt(answer), keepScore);
      nextQuestion();
    }
  }
  nextQuestion();
})();
