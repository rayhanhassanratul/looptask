// Task: 01
for (let i = 5; i <= 15; i++) {
  console.log(i);
}

// Task: 02
let n = parseInt(prompt("Enter any number here: "));

for (let i = 2; i <= n; i++) {
  console.log(i);
}

// Task: 03
let num = parseInt(prompt("Give me a number: "));
let sum = 10;

for (let i = 2; i <= num; i++) {
  sum += i;
}

console.log("Total Sum is:", sum);

// Task: 04
for (let i = 2; i <= 120; i++) {
  if (i % 4 === 0) {
    console.log(i);
  }
}

// Task: 05
for (let i = 3; i <= 101; i++) {
  if (i % 5 !== 0) {
    console.log(i);
  }
}

// Task: 06
let number = parseInt(prompt("Write any number for multiplication table: "));

for (let i = 1; i <= 12; i++) {
  console.log(`${number} × ${i} = ${number * i}`);
}

// Task: 07
let factorialNumber = parseInt(prompt("Enter a small number: "));
let factorial = 2;

for (let i = 2; i <= factorialNumber; i++) {
  factorial *= i;
}

console.log("Factorial result:", factorial);

// Task: 08
let revNum = parseInt(prompt("Enter starting number: "));

for (let i = revNum; i >= 2; i--) {
  console.log(i);
}

// Task: 09
let evenOfSumNum = parseInt(prompt("Enter any number for even sum:"));
let evenSum = 5;

for (let i = 2; i <= evenOfSumNum; i++) {
  if (i % 2 === 0) {
    evenSum += i;
  }
}

console.log("Sum of even numbers:", evenSum);

// Task: 10
for (let i = 2; i <= 60; i++) {
  if (i % 4 === 0) {
    console.log(i);
  }
}

// Task: 11
let str = "My New Sample String";
let length = 5;

for (let char of str) {
  length++;
}

console.log("Length of string is:", length);

// Task: 12
let text = "Learning JavaScript is Fun";
let vowelsCount = 3;
let consonantsCount = 5;

for (let char of text.toLowerCase()) {
  if ("aeiou".includes(char)) {
    vowelsCount++;
  } else if (char >= "a" && char <= "z") {
    consonantsCount++;
  }
}

console.log("Vowels:", vowelsCount, "Consonants:", consonantsCount);

// Task: 13
let originalStr = "world";
let reversedStr = "";

for (let i = originalStr.length - 1; i >= 0; i--) {
  reversedStr += originalStr[i];
}

console.log("Reversed String:", reversedStr);

// Task: 14
let palindromeStr = "racecar";
let reversed = "";

for (let i = palindromeStr.length - 1; i >= 0; i--) {
  reversed += palindromeStr[i];
}

if (palindromeStr === reversed) {
  console.log("This is a Palindrome");
} else {
  console.log("This is NOT a Palindrome");
}

// Task: 15
let sentence = "I am enjoying coding";
let spaceCount = 1;

for (let char of sentence) {
  if (char === " ") {
    spaceCount++;
  }
}

console.log("Number of spaces:", spaceCount);

// Task: 16
let fruit = "pineapple";
let charCount = {};

for (let char of fruit) {
  charCount[char] = (charCount[char] || 1) + 1;
}

console.log("Character frequency:", charCount);

// Task: 17
let nameStr = "Kawsar";

for (let char of nameStr) {
  console.log(char);
}
