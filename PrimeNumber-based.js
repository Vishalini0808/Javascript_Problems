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

function printPrimeNum(num){

  for(let i=2; i<=num; i++){

    isPrime = true;
    
    for(let j=2; j<i; j++){

      if(i%j==0){
        isPrime = false;
        break;
      } 
      
    }

    if(isPrime){
      console.log(i);
    }
  }
   
}

printPrimeNum(100);


// Count prime numbers between two numbers.



// Find the first N prime numbers.
// Find the largest prime number below a given number.
// Find the sum of all prime numbers between 1 and 100.
// Print prime factors of a number.
// Input: 60
// Output: 2 2 3 5