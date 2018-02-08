var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/nash2.jpg') {
      myImage.setAttribute ('src','images/nash2.jpg');
//     } else {
      myImage.setAttribute ('src','images/nash2.jpg');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Welcome To My Website!, ' + myName;
}
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Welcome Back!, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}
