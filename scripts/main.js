// let myHeading = document.querySelector('h1');
// myHeading.textContent = 'Hello world!';

// function multiply(num1, num2) {
//     let result = num1 * num2;
//     return result;
// }

// multiply(4, 7);
// multiply(20, 20);
// multiply(0.5, 3);

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('请输入你的名字。');
    if(!myName || myName === null) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.innerHTML = 'Mozilla 酷毙了，' + myName;
    }
  }

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla 酷毙了，' + storedName;
}

myButton.onclick = function() {
    setUserName();
}