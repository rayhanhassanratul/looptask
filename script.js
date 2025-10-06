// 1️⃣ ১ থেকে ১০ পর্যন্ত সংখ্যা প্রিন্ট করো
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// 2️⃣ ১ থেকে n পর্যন্ত সংখ্যা প্রিন্ট করো
let n = 7;
for (let i = 1; i <= n; i++) {
  console.log(i);
}

// 3️⃣ ১ থেকে n পর্যন্ত সংখ্যার যোগফল বের করো
n = 5;
let sum = 0;
for (let i = 1; i <= n; i++) {
  sum += i;
}
console.log("Sum =", sum);

// 4️⃣ ১ থেকে ১০০ পর্যন্ত সব জোড় সংখ্যা প্রিন্ট করো
for (let i = 2; i <= 100; i += 2) {
  console.log(i);
}

// 5️⃣ ১ থেকে ১০০ পর্যন্ত সব বিজোড় সংখ্যা প্রিন্ট করো
for (let i = 1; i <= 100; i += 2) {
  console.log(i);
}

// 6️⃣ গুণের নামতা প্রিন্ট করো
let num = 5;
for (let i = 1; i <= 10; i++) {
  console.log(`${num} × ${i} = ${num * i}`);
}

// 7️⃣ Factorial বের করো (n!)
n = 5;
let fact = 1;
for (let i = 1; i <= n; i++) {
  fact *= i;
}
console.log("Factorial =", fact);

// 8️⃣ Reverse Number Printing (n → 1)
n = 10;
for (let i = n; i >= 1; i--) {
  console.log(i);
}

// 9️⃣ ১ থেকে n পর্যন্ত সব জোড় সংখ্যার যোগফল
n = 10;
sum = 0;
for (let i = 2; i <= n; i += 2) {
  sum += i;
}
console.log("Even Sum =", sum);

// 🔟 ১ থেকে ৫০ পর্যন্ত ৩ দিয়ে বিভাজ্য সব সংখ্যা
for (let i = 1; i <= 50; i++) {
  if (i % 3 === 0) {
    console.log(i);
  }
}

// 11️⃣ String Length বের করো (str.length ছাড়া)
let str = "hello";
let count = 0;
for (let i = 0; str[i] !== undefined; i++) {
  count++;
}
console.log("Length =", count);

// 12️⃣ Count Vowels and Consonants
str = "programming";
let vowels = 0,
  consonants = 0;
let vowelList = "aeiouAEIOU";
for (let i = 0; i < str.length; i++) {
  let ch = str[i];
  if (vowelList.indexOf(ch) !== -1) {
    vowels++;
  } else if ((ch >= "a" && ch <= "z") || (ch >= "A" && ch <= "Z")) {
    consonants++;
  }
}
console.log("Vowels =", vowels);
console.log("Consonants =", consonants);

// 13️⃣ Reverse a String
str = "hello";
let reverse = "";
for (let i = str.length - 1; i >= 0; i--) {
  reverse += str[i];
}
console.log("Reversed =", reverse);

// 14️⃣ Palindrome Checker
str = "madam";
reverse = "";
for (let i = str.length - 1; i >= 0; i--) {
  reverse += str[i];
}
if (str === reverse) {
  console.log("Palindrome");
} else {
  console.log("Not Palindrome");
}

// 15️⃣ Count Spaces in a Sentence
let sentence = "I love programming";
let spaces = 0;
for (let i = 0; i < sentence.length; i++) {
  if (sentence[i] === " ") {
    spaces++;
  }
}
console.log("Spaces =", spaces);

// 16️⃣ Find Character Frequency
str = "banana";
let freq = {};
for (let i = 0; i < str.length; i++) {
  let ch = str[i];
  if (freq[ch]) {
    freq[ch]++;
  } else {
    freq[ch] = 1;
  }
}
console.log(freq);
