// Reverse a number.
// Input: 12345
// Output: 54321

let num = 12345;
let reversed = 0;

while( num !== 0) {
  
  let digit = num % 10;
  reversed = reversed * 10 + digit;
  num = Math.floor( num / 10);
  
}

console.log(reversed);


// Count the digits of a number.
// Input: 123456
// Output: 6

let numb = 123456;
let count = 0;
let reversed2 = 0;

while( num !== 0){

  let digit = numb % 10 ;
  reversed2 = reversed2 *  10 + digit; 
  count++;
  numb = Math.floor(numb/10);
}

console.log(count)


// Find the sum of digits.
// Input: 12345
// Output: 15
let input= 12345

let sum =0;
let reversed3 =0;

while(input !== 0) {
  let digit = input % 10
  sum += digit ;
  reversed3 = reversed3 * 10 + digit;
  input = Math.floor(input/10);
}

console.log(sum)


// Find the product of digits.
// Input: 1234
// Output: 24
let number = 1234;
let product = 1;

while(number !== 0){
  let digit = number % 10;
  product = digit * product;
  number = Math.floor(number / 10);
}

console.log(product)


// Check whether a number is a palindrome.
// Input: 121
// Output: Palindrome
let n = 121;
let o = n;
let reverseed = 0;

while(n !== 0){

 let digit = n % 10;
  reverseed = reverseed * 10 + digit;
  n = Math.floor(n/10);
}

if(reverseed === o){
  console.log("Palindrom")
}

 console.log(reverseed)


// Find the largest digit in a number.
// Input: 58329
// Output: 9
let a = 598327;
let l = 0;

while (a !== 0){

  let digit = a % 10 ;
  if ( digit > l){
    l = digit;
  };
  a = Math.floor(a/10);
}
console.log(l)


// Find the smallest digit in a number.
let b = 5198327;
let s = Infinity;

while (b !== 0){

  let digit = b % 10 ;
  if ( digit < s){
    s = digit;
  };
  b = Math.floor(b/10);
}
console.log(s)


// Count how many times a particular digit occurs.
// Input: 1223342
// Digit: 2
// Output: 3
let a1 = 1223342;

function findDigitCount (n,num){
let count = 0;

  while ( num !== 0){

    let digit = num % 10;

    if(digit === n){
       count ++;
    }
    num = Math.floor(num / 10);
  }
  return count;
}

console.log(findDigitCount(2,a1));


// Check whether a number is an Armstrong number.
// 153 → Armstrong
let armstrong = 153 ;

function checkArmstrong(a){
 let count = 0;
  let b = a;
  while ( a !== 0){

  let digit = a % 10;
    count += digit * digit * digit;

    a = Math.floor(a / 10);
}
  return count === b;
}

console.log(checkArmstrong(armstrong));


// Check whether a number is a perfect number.
// 6 → Perfect number
function checkPerfectNum(num){
  sum = 0 ;

  for(let i=1; i<num; i++){

    if(num % i === 0) {
      sum += i
    }
    
  }
  return sum === num;
  
}

console.log(checkPerfectNum(6));



// 🟠 Level 3 — Prime numbers

// Check whether a number is prime.
function checkPrime(num){

  for(let i=2; i<num; i++){

    if( num % i === 0){
      return false;
    }
    
  }
  return true;
}

console.log(checkPrime(7));


// Print all prime numbers from 1 to 100.
// Count prime numbers between two numbers.
// Find the first N prime numbers.
// Find the largest prime number below a given number.
// Find the sum of all prime numbers between 1 and 100.
// Print prime factors of a number.
// Input: 60
// Output: 2 2 3 5