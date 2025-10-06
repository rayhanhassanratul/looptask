// 1. ১ থেকে ১০ পর্যন্ত সংখ্যা প্রিন্ট করো

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// ---------------------------------
// . ১ থেকে n পর্যন্ত সংখ্যা প্রিন্ট করো

// 👉 ইউজারের কাছ থেকে n ইনপুট নিয়ে।

let n = prompt("enter value of n ");

for (let i = 1; i <= n; i++) {
  console.log(i);
}

// -------------------------------------

//  ১ থেকে n পর্যন্ত সংখ্যার যোগফল বের করো

let num = prompt("enter value of num ");

sum = 0;

for (let i = 0; i <= num; i++) {
  sum = sum + i;
}

console.log("sum is " + sum);

// 4. ১ থেকে ১০০ পর্যন্ত সব জোড় সংখ্যা প্রিন্ট করো

for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// --------------------------------

// 5. ১ থেকে ১০০ পর্যন্ত সব বিজোড় সংখ্যা প্রিন্ট করো

for (let i = 1; i <= 100; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}

// গুণের নামতা প্রিন্ট করো

let number = parseInt(prompt("Enter The Number:"));

for (let i = 1; i <= 10; i++) {
  console.log(number + " × " + i + " = " + number * i);
}

// ------------------------------
// 7. Factorial বের করো

let n = 7;
let factorial = 1;

for (let i = 1; i <= n; i++) {
  factorial = factorial * i;
}

console.log(n + "! = " + factorial);

// --------------------------------

// 8. Reverse Number Printing

let n = parseInt(prompt("value of n"));

for (let i = n; i >= 1; i--) {
  console.log(i);
}

// 9. Sum of Even Numbers

let n = parseInt(prompt("VALUE OF N:"));
let sum = 0;

for (let i = 2; i <= n; i += 2) {
  sum = sum + i;
}

console.log("1 to" + n + " total = " + sum);

// ----------------------------------------------

// 10. Multiples of 3

let n = 50;

for (let i = 1; i <= n; i++) {
  if (i % 3 === 0) {
    console.log(i);
  }
}
