// 2. You are given a triangle with the sides 9, 8, 9. Write a program to check whether a triangle is Isosceles or not using if-else.

// Isosceles => two sides are equal
var a = parseInt(prompt("Enter side 1: "));
var b = parseInt(prompt("Enter side 2: "));
var c = parseInt(prompt("Enter side 3: "));

document.write("a = " + a + "</br>");
document.write("b = " + b + "</br>");
document.write("c = " + c + "</br>");

if (a == b && b == c) {
  document.write("Not Isosceles");
} else if (a == b || a == c || b == c) {
    document.write("Isosceles");
}
else {
  document.write("Not valid");
}