// 1. You are given three numbers 13, 79, and 45. Write a program that will print the
// largest number using if-else.


var a = parseInt(prompt("Enter first number: "));
var b = parseInt(prompt("Enter second number: "));
var c = parseInt(prompt("Enter third number: "));

document.write("a = " + a + "</br>");
document.write("b = " + b + "</br>");
document.write("c = " + c + "</br>");

if (a == b && b == c) {
    document.write("All are equal");
}
else if (a >= b && a >= c) {
    document.write("The largest number is: " + a);

}
else if (b >= a && b >= c) {
    document.write("The largest number is: " + b);
}
else {
    document.write("The largest number is: " + c);
}