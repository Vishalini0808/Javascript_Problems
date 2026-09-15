// 🔵 Level 4 — Nested loops / Patterns


// Print:
// *
// **
// ***
// ****
// *****

  let row = 5;
  let star;
  
  for(let i=1; i <= row; i++) {
    
       star = '';

    for( let j= 1; j <= i ; j++){
      // console.log('*')
      star += '*' ;
    }
    console.log(star)
}



// *****
// ****
// ***
// **
// *

  let star2;
  let row2 = 5;
  for(let i=row2 ; i > 0; i--) {
    
       star2 = '';

    for( let j= i ; j > 0  ; j--){
      // console.log('*')
      star2 += '*' ;
    }
    console.log(star2);
}



// 1
// 12
// 123
// 1234
// 12345

//   let num;
//   let row = 5;
  for(let i= 1 ; i <= row; i++) {

    num ='';
    
    for( let j=1; j<= i; j++){
      // console.log(j)
      num += j;
    }
    console.log(num);
}



// 1
// 22
// 333
// 4444
// 55555

let res;
// let row =5;

for(let i = 1; i <= row; i++){
  res ='';

  for (let j = 1; j <= i; j++){
    // console.log(j)
    res += i;
  }
  console.log(res)
}


// 12345
// 1234
// 123
// 12
// 1

let num ;
// let row = 5;

for(let i = row; i>0 ; i--){

  num ='';

  for(let j= 1; j <= i ; j++){
    // console.log(j)
    num += j;
  }
  console.log(num);
}


//     *
//    **
//   ***
//  ****
// *****



// *****
//  ****
//   ***
//    **
//     *



// Print a square:
// *****
// *****
// *****
// *****
// *****
let rows = 5;
  let stars;
  
  for(let i=1; i <= rows; i++) {
    
       stars = '';

    for( let j= 1 ; j <= rows  ; j++){
      // console.log('*')
      stars += '*' ;
    }
    console.log(stars);
}


// Print this:
// 1
// 23
// 456
// 78910




// Print Floyd's triangle:
// 1
// 2 3
// 4 5 6
// 7 8 9 10