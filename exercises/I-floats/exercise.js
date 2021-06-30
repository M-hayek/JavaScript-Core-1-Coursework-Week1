var numberOfStudents = 15;
var numberOfMentors = 8;

let total = numberOfStudents + numberOfMentors;

// console.log (total);

let percentageOfStudents = Math.round(100*(numberOfStudents/total));
let percentageOfMentors =  Math.round(100*(numberOfMentors/total));

console.log ("Percentage students: " + percentageOfStudents + "%");
console.log ("Percentage mentors: " + percentageOfMentors + "%");

