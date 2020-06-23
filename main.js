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
// Write a JavaScript program to convert a number to a string.
const numberToString = (number) => {
  if(typeof number === 'string'){
    console.log('already a string')
  } else {
  return number.toString();
  }
}
let newString = numberToString(555)
console.log(newString)
console.log('your number is now a ' +  typeof newString)

// Write a JavaScript program to convert a string to the number.
const stringToInt = (word) => {
  let change = parseInt(word);
  return change;
  // console.log(change)
}
let newInt = stringToInt('7');
console.log(newInt);
console.log(typeof newInt)



// Write a JavaScript program that takes in different datatypes and prints out whether they are a:
const checkDataType = (input) => {
  if (typeof input === 'number') {
    console.log('its a number');
  }else if(typeof input === 'string'){
    console.log('its a string');
  }else if(typeof input === 'boolean'){
    console.log('its boolean');
  }else if(typeof input === 'object'){
    console.log('its Null');
  }else if(typeof input === 'undefined'){
    console.log('its undefined');
  }else if(typeof input === 'nan'){
    console.log('its NaN');
  }
  return input;
}
let a
let typeInput = checkDataType(null);
console.log(typeof typeInput);
  // * Boolean
  // * Null
  // * Undefined
  // * Number
  // * NaN
  // * String
  

  
// Write a JavaScript program that adds 2 numbers together.



// Write a JavaScript program that runs only when 2 things are true.



// Write a JavaScript program that runs when 1 of 2 things are true.



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
