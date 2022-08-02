console.log("push");
var numbers1 = [12, 32, 55, 99, 20];
console.log(numbers1);
numbers1.push(100); //to adding values into the array at the end of the array.
console.log(numbers1);

console.log("\n");

console.log("pop");
var numbers2 = [162, 312, 505, 959, 200];
console.log(numbers2);
var popedValue = numbers2.pop(); //to deleting values from the array at the end of the array. this function returns the popped value
console.log(numbers2);
console.log("popped value = " + popedValue);

//adding and deteting values at the beginning of the array

console.log('\n');
var numbers3 = [12, 44, 53, 89, 100];
//adding value to array
console.log(numbers3);
numbers3.unshift(500);
console.log(numbers3);

console.log("\n");

var numbers4 = [152, 474, 543, 899, 100];
//removing value to array
console.log(numbers4);
var shiftedValue = numbers4.shift();
console.log(numbers4);
console.log(shiftedValue);

console.log(6 != 6);