// // // let age = +prompt ("age do apnii")
// // // if (age >= 18 ) 
// // //   {
// // //     console.log("eligible");
// // //   }
// // // else  {
// // //  console.log( "not eligible")
// // // }

// const { isValidElement } = require("react");

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

 
// let balance = 1000;

// for (let i = 1; i <=3; i++) {
// let input = prompt("enter u r amount");
//    if(input===null) {
//       console.log("bhai cancel mt press kr nmbr de ");
//    break;
//    }
//    else if (input.trim() === ""){
//     console.log("arey mere bhai nmbr de de");
//     break;

//    }
//    else {
//     let int = Number (input)
//     if (isNaN (int)) {
//        console.log("bhai mere tere ko nmbr dene bola tha mai tu string q dera h  ")
//     }
//     else {
//       if (int > balance) {
//         console.log("insufficient balance")
//       }
//       else {
//         balance-=int;
//         console.log("bhai widrawl succesfull, and new balance is " +balance)
//       }
//     }
//    }
// 
//  }