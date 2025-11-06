// // // let age = +prompt ("age do apnii")
// // // if (age >= 18 ) 
// // //   {
// // //     console.log("eligible");
// // //   }
// // // else  {
// // //  console.log( "not eligible")
// // // }

// 



// // // for (let i = 1; i <=10; i++) {
// // //  console.log(i*5);

// // // }
// // // count = 0;
// // // for (let i = 0; i<=15; i++) {
// // //   if (i > 8 ){
// // //   count++;
// // //   }
// // // } 
// // // console.log(count);

// // // const userpassword  = "tameeem ";
// // // let password = prompt ("apna password daal bhai ");
// // // if (password === userpassword) {
// // //   console.log("access granted");
// // //  }
// // // else {
// // //     console.log("access danied");
// // // }
// // // let age = prompt ("age btao");
// // // console.log(age);
// // // if (age === null )
// // // {
// // //   console.error ("bhai tu cancel dba diya" )
// // // }
// // const  correct = "1234";
// // let attempt = 0;
// // let maxattempt = 3;



// // while (attempt < maxattempt) {
// //   let input = prompt("enter u r password ");
// //   if ( input === correct ) {
// //     console.log ("access granted");
// //   break;
// //   }
// //   else {
// //     attempt ++;
// //     if (attempt === maxattempt) {
// //       console.log ("account locked")
// //     }
// //     else {
// //       console.log (`wrong password . attempts left  : ${maxattempt - attempt }`);
// //     }
// //   }
// // }
// const mainvalue = "stop";
//  let count = 0


// while (stop) {
//     let input = prompt ("bhai kuch likh");
//     if (input === mainvalue) {
//       break;
//     }
//     if (input === "yes")  {
//       count++;

//     }


// }
// console.log (`uh typed 'yes' ` + count + "times." );

// for (let i = 1; i <=50; i++) {
//   if (i %7 === 0){
//     console.log (i);

//   }

//
// let firstinput= prompt("phla nmbr de bhai ");
// let secondinput= prompt(" dusra nmbr de bhai ");

//   if (firstinput===null || secondinput === null) {
//     console.log("bhai cancel mt press kr nmbr de ");

//   }
//   else {
//          if (firstinput.trim() ==="" || secondinput.trim() ==="") {
//       console.log ("arey mere bhai nmbr de de");
//   }
//   else {
//     let first = Number (firstinput);
//     let second = Number (secondinput);

//      if (isNaN (first) || isNaN(second)) {
//       console.log ("bhai mere tere ko nmbr dene bola tha mai tu string q dera h  ")
//      }
//      else {
//       for (let i = first+1; i < second; i++) {
//   console.log(i);

//       }
//      }
//   }
// }
// let firstodd = 0;
// let maxodd = 3;
// for (let i = 1; i <= 20; i++) {
//    if (i%2!==0) {
//      console.log(i);
//     firstodd++;

//    }
//    else if (maxodd === firstodd){
//     break;
//    }

// }

//  let count = 0;
// for (let i = 1; i <= 5; i++) {
//   let input = prompt("nmbr de bhai check krrra hu positive h ky ")
//   if (input === null) {
//     console.log("bhai cancel mt press kr nmbr de ");
//     break;
//   }
//   else if (input.trim() === "") {
//     console.log("arey mere bhai nmbr de de");
//     continue;
//   }
//   else {

//     let int = Number(input);
//     if (isNaN(int)) {
//       console.log("bhai mere tere ko nmbr dene bola tha mai tu string q dera h  ")
//     }
//     else {
//       if (int > 0) {
//         count++;

//       }
//     }


//   }

// }
// console.log(count);

// {
//     let balance = 1000;

//     for (let i = 1; i <= 3; i++) {
//         let input = prompt("enter u r amount");
//         if (input === null) {
//             console.log("bhai cancel mt press kr nmbr de ");
//             break;
//         }
//         else if (input.trim() === "") {
//             console.log("arey mere bhai nmbr de de");
//             break;

//         }
//         else {
//             let int = Number(input)
//             if (isNaN(int)) {
//                 console.log("bhai mere tere ko nmbr dene bola tha mai tu string q dera h  ")
//             }
//             else {
//                 if (int > balance) {
//                     console.log("insufficient balance")
//                 }
//                 else {
//                     balance -= int;
//                     console.log("bhai widrawl succesfull, and new balance is " + balance)
//                 }
//             }
//         }
//     }
// }
//
//  }
// let input = prompt("kuch nmbr de bhai :")
// if (input >10 ) {
//     console.log ("nmbr bada h bhai ")
// }
// else {
//     console.log( "10 se chota hai bhai")
// }
//


//  yaha se question start hue h bhai new gpt se liye hue ...!!git

// gpt s liye hue questionss

// level 1
// Q1
// ask users name and age print  hello  name and your age year old

// {
// let name = prompt(" enter your name");
// let age = prompt("enter your age :")
// console.log(`hello ${name} you are ${age} old`)}

// // Q2
// // print multiplication table of 7 using a loop


// {
// for (let i = 1; i <=70; i++) {
// if (i%7===0) {
// console.log(i);
// }
// }
// }
// // Q3
// // count how many numbers between 1 and 20 are even


//  {let count = 0
// for (let i = 1; i <= 20; i++) {
//     if (i%2===0) {
//         count++;
//     }

// }
// console.log(`there are ${count} even number betweeen 1 to 20 `)
// }

// Q4
// ask user for a nmbr and check if it is a positive and negative or zero

// {let input = prompt("enter any number :")
// if (input >0) {
//     console.log("positive number")
// }
// else if (input ==0) {
//     console.log("y zero hai bhai")
// }
// else {
//     console.log ("negative number hai bhai ")
// }}


// Q5
// ask users marks and print pass if marks is greater then 40 else print fail


// {
//     let marks = prompt("enter your marks :");
//     if (marks > 40) {
//         console.log("pass")
//     }
//     else {
//         console.log("fail")
//     }
// }

// Q6
// print squares of nmbrs from 1 to 10


// {
//     for (let i = 1; i <= 10; i++) {
//         console.log(i * i);
//     }
// }

// Q7
// asks users city if it is nagpur  print orange city

// {
//     let city = prompt("bhai apna city btaa");
//     if (city === "nagpur") {
//         console.log("orange city")
//     }
//     else {
//         console.log(`you belong to ${city}`);
//     }
// }


// level 2
//  Q1
// allow only 2 attempt to enter correct pin if wrong twice   then card blocked


//  {
//     let correctpin = 7498;
//     maxattempt = 2;
//     for (let atettempt = 0; atettempt <maxattempt ; atettempt++) {
//         let input = +prompt ("enter your pin  :")
//      if (input ===correctpin) {
//         console.log("login successfully")
//         break;

//      }
//      else if (atettempt===maxattempt-1) {
//         console.log("acount blocked")
//      }
//         else {
//             console.log ("wrong pin enter again")
//         }
//     }
//  }

// Q2
// keep taking numbers until users enter 0 then primt the total sum

// {
//  let sum = 0;
//  let input = +prompt ("enter any number");
//  while (input !==0) {
//         sum += input;
//     input = +prompt ("enter any number");



//  }
//  console.log ("the total nmbr of sum is  "+ sum);
// }

// Q3
// print number between 10 to 30 that are divisible by 3 and 5


// for (let i = 10; i <=30; i++) {
//     if (i %3 ===0 && i %5 ===0)
//     console.log (i);
// }

// Q4
// ask user for 10 number count how many are odd

// {
//   let count = 0;

//   for (let i = 1; i <= 10; i++) {
//     let num = +prompt(`Enter number ${i}:`);
//     if (num % 2 !== 0) {
//       count++;
//     }
//   }

//   console.log(`You entered ${count} odd numbers.`);
// }


// Q5
// ask user to enter names untill end is typed then print how many names were entered

// {
//     let count = 0;
//     let input = prompt("enter your name ");
//     while (input !== "end") {

//         count++;

//          input = prompt("enter your name ");
//     }
//     console.log(`bhai tu ne ${count} bar naam diya hai `)
// }



// Q6
// print the first 5 multiples of 9 using for lop

// {
//     for (let i = 1; i <= 5; i++) {

//         console.log(i * 9);

//     }
// }


// Q7
// sum of all even numbers from 1 to 50 and print the result

// {
//     let sum = 0
//     for (let i = 1; i <= 50; i++) {
//         if (i % 2 === 0) {
//             sum += i;

//         }


//     }
//     console.log(`bhai ye h 1 se 50 tk even nmbr ka plus :${sum} `)
// }

// Q7
// create a simple bank system start with 500  and allow 2 deposit or 2 withdrawal then show the final balance


// {
//     let currentbalance = 500;

//     for (let i = 1; i <= 2; i++) {
//         let deposit = +prompt("bhai tera amount de :");
//         currentbalance += deposit;
//         console.log ("deposit successfull !");
//         console.log("bhai tera balance abhi " + currentbalance + " hai");
//     }
//     for (let t = 1; t <= 2; t++) {
//         let withdrawl = +prompt("bhai withdrawal amount de : ");
//         if (currentbalance < withdrawl) {
//             console.log("insufficient balance  !")

//         }
//         else {
//             currentbalance -= withdrawl;
//             {
//                 console.log ("withdrwal successfull !");
//                 console.log("bhai tera balance abhi " + currentbalance + " hai");
//             }


//         }

//     }

// }


