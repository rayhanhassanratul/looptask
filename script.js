// Task: 01
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// Task: 02
let n = parseInt(prompt("Enter a number: "));

for (let i = 1; i <= n; i++) {
  console.log(i);
}

// Task: 03
let num = parseInt(prompt("Enter a number: "));
let sum = 0;

for (let i = 1; i <= num; i++) {
  sum += i;
}

console.log("Sum is:", sum);

// Task: 04
for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// Task: 05
for (let i = 1; i <= 100; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}

// Task: 06
let number = parseInt(prompt("Enter a number: "));

for (let i = 1; i <= 10; i++) {
  console.log(`${number} × ${i} = ${number * i}`);
}

// Task: 07
let factorialNumber = parseInt(prompt("Enter a number: "));
let factorial = 1;

for (let i = 1; i <= factorialNumber; i++) {
  factorial *= i;
}

console.log("Factorial:", factorial);

// Task: 08
let revNum = parseInt(prompt("Enter a number: "));

for (let i = revNum; i >= 1; i--) {
  console.log(i);
}

// Task: 09
let evenOfSumNum = parseInt(prompt("Enter a number:"));
let evenSum = 0;

for (let i = 1; i <= evenOfSumNum; i++) {
  if (i % 2 === 0) {
    evenSum += i;
  }
}

console.log("Sum of even numbers:", evenSum);

// Task: 10
for (let i = 1; i <= 50; i++) {
  if (i % 3 === 0) {
    console.log(i);
  }
}

// Task: 11
let str = "My Name is Sheikh Jabed";
let length = 0;

for (let char of str) {
  length++;
}

console.log("Length is:", length);

// Task: 12
let text = "JavaScript Programming";
let vowelsCount = 0;
let consonantsCount = 0;

for (let char of text.toLowerCase()) {
  if ("aeiou".includes(char)) {
    vowelsCount++;
  } else if (char >= "a" && char <= "z") {
    consonantsCount++;
  }
}

console.log("Vowels:", vowelsCount, "Consonants:", consonantsCount);

// Task: 13
let originalStr = "hello";
let reversedStr = "";

for (let i = originalStr.length - 1; i >= 0; i--) {
  reversedStr += originalStr[i];
}

console.log("Reversed:", reversedStr);

// Task: 14
let palindromeStr = "madam";
let reversed = "";

for (let i = palindromeStr.length - 1; i >= 0; i--) {
  reversed += palindromeStr[i];
}

if (palindromeStr === reversed) {
  console.log("Palindrome");
} else {
  console.log("Not Palindrome");
}

// Task: 15
let sentence = "I love programming";
let spaceCount = 0;

for (let char of sentence) {
  if (char === " ") {
    spaceCount++;
  }
}

console.log("Spaces:", spaceCount);

// Task: 16
let fruit = "banana";
let charCount = {};

for (let char of fruit) {
  charCount[char] = (charCount[char] || 0) + 1;
}

console.log("Character frequency:", charCount);

// Task: 17
let nameStr = "Naeeim";

for (let char of nameStr) {
  console.log(char);
}
