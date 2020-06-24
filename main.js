// **THIS IS INCREDIBLY IMPORTANT THAT YOU DO BOTH SECTIONS!!! You will be doing only front-end work in 421 and you need to brush up on your HTML elements**


// ***************************
//          PART ONE
// ***************************
// Write a JavaScript program to display the current day and time, start with:
console.log(new Date)

const displayDate = () => {
  const currentDate = new Date()

  document.getElementById("display-element").innerHTML = currentDate;
}
// ***converts a number to a string***************
const numberToString = (number) => {
  if(typeof number === 'string'){
    console.log('already a string')
  } else {
  return number.toString();
  }
}
console.log(numberToString(2))

//********** converts a string to a number*************
const stringToInt = (word) => {
  let change = parseInt(word);
  return change;
}

// Write a JavaScript program that takes in different datatypes and prints out whether they are a:
const checkDataType = (input) => {
  if (typeof input === 'number') {
    console.log('its a number');
  }else if(typeof input === 'string'){
    //checking for booleen and null since all html inputs are strings
    if(input == "true" || input == "false"){
      console.log('its boolean');
    } else if (input == "null"){
      console.log('its null');
    }else{
      console.log('its a string')
    }
  }else if(typeof input === 'boolean'){
    console.log('its boolean');
  }else if(typeof input === 'object'){
    console.log('its Null');
  }else if(typeof input === 'undefined'){
    console.log('its undefined');
  }
  return input;
}
let a = 'hello'
let typeInput = checkDataType('true');
////////////////////////////////////////////////////////////////////////////////////////////////////////

//checking for a number in a string and converting to a number
if(isNaN(a) === false){
  console.log('theres a number in your string, i will change it to a number')//checking if string is a number or NaN
  a = stringToInt(a);
  console.log(typeof a);
  console.log(a);
} else{
  console.log('its a string')
  console.log(a);
}




  

  
// program that converts and adds 2 numbers together.
const adding = (num1, num2) => {
  //checking if input is number in a string
  if(isNaN(num1) === false && isNaN(num2) === false){
    console.log('***********')
    one = stringToInt(num1);
    two = stringToInt(num2);
    return one + two;
    //if input is already not a string
  } else {
    return num1 + num2;
  }

}
 console.log(adding('2', '2'))

//program that runs only when 2 things are true.
const bothTrue = (thing1, thing2) => {
  if(thing1 == true && thing2 == true){
    console.log('whats up');
  } else {
    console.log('try again');
  }
}


// program that runs when 1 of 2 things are true.
const oneTrue = (thing1, thing2) => {
  if(thing1 == true || thing2 == true){
    console.log('whats up');
  } else {
    console.log('try again');
  }
}

// Write a JavaScript program that runs when both things are not true.  

// ***************************
//         PART TWO
// ***************************

// 1. download Live-Server by Ritwick Dey, 
// 2. reload VS Code, 
// 3. click the "Go Live" button
// 4. Go local host 5500 or http://127.0.0.1:5500/index.html to see your web page
// 5. Or go use the `npm start` command and navigate to localhost:8080 (ctrl + C to close)
// 6. go to `index.html` 
// 7. create inputs, buttons and event listeners that render the code blocks you built above to the DOM.




// Additional Resources
// Video1: https://player.vimeo.com/video/377147232
// Video2: https://www.youtube.com/embed/bkvH28PXLWc
// Video3: https://www.youtube.com/embed/TrGI9Yki-24
