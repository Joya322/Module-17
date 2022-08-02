// You and your friends Tom, Jane, Peter and John got their final exam results. Your total
// score is 85, Tom’s total score is 66, Jane’s total score is 95, Peter’s total score is 56
// and John’s total score is 40. The grading chart is
// 80 or above A grade
// 60 or above B grade
// 50 or above C grade
// 40 or above D grade
// 39 or less => F grade

// Write a program to find your and your friends’ grades using if-else.

var Name = prompt("Enter your name: ")
var score = prompt("Enter your score: ");

if (score >= 80) {
    document.write(Name + " got A");
}
else if (score >= 60) {
    document.write(Name + " got B");
}
else if (score >= 50) {
    document.write(Name + " got C");
}
else if (score >= 40) {
    document.write(Name + " got D");
}
else if (score <= 39) {
    document.write(Name + " got F");
}