// You are given an array:

// var fruits = ['Apple', 'Banana', 'Orange'];

// a) Find the index of ‘Banana’ and replace ‘Banana’ with ‘Mango’.
// b) Remove ‘Orange’ and add ‘Watermelon’.

var fruits = ["Apple", "Banana", "Orange"];
//finding the index of banana
var indexOfBanana = fruits.indexOf("Banana");

console.log("index of Banana is: " + indexOfBanana + "\n");

console.log("array before replacing Banana with Mango: " + fruits + "\n");

console.log("a)\n");

// replacing Banana with Mango
fruits[indexOfBanana] = "Mango";
console.log("array after replacing Banana with Mango: " + fruits + "\n");

console.log("b)\n");
//removing "Orange"
fruits.pop();

//adding "Watermelon"
fruits.push("Watermelon");

console.log("array after removing Orange and adding Watermelon: " + fruits + "\n");