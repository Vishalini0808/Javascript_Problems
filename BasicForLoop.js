// 🟢 Level 1 — Basic for loop

// Print numbers from 1 to 100.
for(let i=1; i<=100; i++){
//   console.log(i)
}


// Print numbers from 100 to 1.
for (let i=100; i>0; i--){
//   console.log(i)
}


// Print all even numbers from 1 to 100.
for(let i=1; i<=100; i++){
  if( i %2 === 0) {
    // console.log(i)
  }
}


// Print all odd numbers from 1 to 100.
for(let i=1; i<=100; i++){
  if( i %2 !== 0) {
    // console.log(i)
  }
}


// Print multiples of 5 from 1 to 100.
for (let i=1; i<=100; i++){
  if(i % 5 === 0) {
    // console.log(i)
  }
}


// Find the sum of numbers from 1 to 100.
let sum = 0;
for(let i=1; i<=100; i++){
  sum += i;
}
// console.log(sum);


// Find the sum of all even numbers from 1 to 100.
let add = 0;
for(let i=1; i<=100; i++){
  if( i % 2 === 0) {
    add += i;
  }
}
// console.log(add);


// Print the multiplication table of a given number.
function multipleNumber(num){

  for(i = 1; i<=10; i++){
    // console.log(`${i} * ${num} = ${i * num}`) 
  }
}
multipleNumber(2);


// Count how many numbers between 1 and 100 are divisible by 3.
let count = 0;

for(let i=1; i<=100; i++){

  if(i % 3 ===0 ){
    count += 1;
  }
}
// console.log(count);


// Calculate the factorial of a number.
let factorial = 1;

function calculateFactorial(num){
  for(let i=1; i<=num; i++){
    factorial *= i;
  }
  return factorial;
}
// console.log(calculateFactorial(2));


