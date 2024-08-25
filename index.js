// chapter 37: function: passing data back from them

// start from here 

// function statment
// function greet() {
//     console.log("hello how are you");
// }

// function call 
// greet();
// greet();

// we made it versatile through passing it data 
// function greet(msg) {
//     console.log(msg)
// }
// greet("how are you?");
// greet("whatsup");



// how to get data back from functions?
// simple example
// function calculateSum(num1 , num2) {
//     alert(num1 + num2);
//     let sum = 0;
//     sum = num1 + num2;
//     return sum;
// }
// const total = calculateSum(1,20);
// console.log(total);

// complex example: calculation matric percentage
// fromula: obtainMarks / totalMarks * 100
// function calculateObtainMarks(marks) {
//     let sum = 0;
//     for (var i = 0; i < marks.length ; i++) {
//         sum += marks[i];
//     }
//     return sum;
// }
// const obtainMarks = calculateObtainMarks([95,67,87,59,90]);
//  var totalMarks = 500; 
//  var matricPercentage = obtainMarks / totalMarks * 100; 
//  console.log(matricPercentage);

// //  fix to 2 decimal
// console.log(matricPercentage.toFixed(2));