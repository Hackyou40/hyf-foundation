// const balance= 1000;
// if (balance<=0){
//     console.log("please deposit some money!");
// }
// else if(balance<=1000){
//     console.log(" Your balance is looking ok")
// }
// else if(balance <=3000){
//     console.log("Your balance is looking good")
// }
// else if (balance<=10000){
//     console.log("Your balance is fantastic")
// }
// else{
//     console.log ("Your balance is AMAZING")
// }


// // let age= 20;
// let gender= "male";

// function test(){
//     age= 25;
//     gender= "female";
// }
// console.log( age, gender);


// function getCircleArea(radius){
//    const circleArea= Math.PI*radius*radius;
//    return circleArea;
// }
// console.log(getCircleArea(3));


// function celsiusToFahrenheit(celsius){
//     const temperature= (celsius*9/5)+32 +"°F";
//     return temperature;
// }
// console.log(celsiusToFahrenheit(0));
// console.log(celsiusToFahrenheit(100));



// function logString(string, repetitions){
//   for (let i=0; i<repetitions; i++ ){
//     console.log(string);
//   }
// }

// function logString(string, repetitions){
//     console.log(string.repeat(repetitions));
// }

// logString("Hello World!", 3);


// function printNumber(){
//     for(let i=74; i<=98; i++){
//         console.log(i);
//     }
// }

// printNumber();

// for(let i=74; i<=98; i++){
//         console.log(i);
// }

// let number=0;
// for(let i=74; i<=98; i++){
//     console.log(i);
//     number++;
// }

// console.log(`the loop ran ${number}`);


// const emailList =
//   "benjamin@gmail.com|peter@gmail.com|hans@gmail.com|" +
//   "ahmad@gmail.com|sana@gmail.com|virgeen@gmail.com";


//   const emailsArray = emailList.split("|")

//   console.log(emailsArray);

//   function sendEmailTo(recipient){
//     for(let i=0; i<recipient.length; i++){
//     console.log("email sent to" + recipient[i]);
//     }
//     }
     

//   sendEmailTo(emailsArray);



  function getTicketPrice(age, isStudent){
    const ticketPrice= 0;
    if (age<6){
        console.log("The ticket price is 0");
    }
    else if(age >= 65 || isStudent){
        console.log("The ticket price is 50");
    }
    else{
        console.log("The ticket price is 100");
    }
  }

getTicketPrice(5,true)
getTicketPrice(6,false)
getTicketPrice(20,true)
getTicketPrice(65,false)
