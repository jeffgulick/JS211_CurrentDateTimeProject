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

//********** converts a string to a number*************
//getting value from html input
const getString = () => {
  const stringToChange = document.getElementById('stringToNum').value;
  console.log(stringToChange);
  let answer = stringToInt(stringToChange);
//writing number value to html element
  document.getElementById('StringToNumResult').innerHTML = answer + ' is a ' + typeof answer;
}

//function changing to number data type
const stringToInt = (word) => {
  //checking if number is whole number
  if(word % 1 == 0){
    let change = parseInt(word);
    return change;  
  } else {
    let change = parseFloat(word);
    return change;
  }
}

// Write a JavaScript program that takes in different datatypes and prints out whether they are a:
const dataTypeFunc = () => { 
 let x = document.getElementById('data-type-input').value;
 let y 
 let z 
  //if its a number
  if(isNaN(x) === false){
    y = stringToInt(x);
  }

  document.getElementById('dataTypeResult').innerHTML = y + '' + '   data type:  ' + typeof y;
}
dataTypeFunc('5')
const checkDataType = (input) => {
  if (typeof input === 'number') {
    console.log('its a number');
  }
  else if(typeof input === 'string'){
    if(input == "true" || input == "false"){
      console.log('its boolean');
    } 
    else if (input == "null"){
      console.log('its null');
    } else {
      console.log('its a string')
    }
  }
  else if(typeof input === 'undefined'){
    console.log('its undefined');
  }
  return input;
}
let a 
let typeInput = checkDataType(2);
////////////////////////////////////////////////////////////////////////////////////////////////////////
  
// program that converts and adds 2 numbers together.
//function that is grabbing the values from the DOM and then sends to adding function
const numGetAdd = () => {
  //getting both values from the DOM
  x = document.getElementById('addOne').value;
  y = document.getElementById('addTwo').value;
  console.log(x)
  let result = adding(x, y);
  console.log(result);
  //writing results back to the DOM
  document.getElementById('addResult').innerHTML = result + '' + '   data type:  ' + typeof result;
}
//function that checks if NaN then has strings converted to numbers and adds together
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
 console.log(adding('2.5', '2.5'))

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
