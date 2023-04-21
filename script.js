// get the button element, set the variable named button to the first button in the html file
var button = document.querySelector("#myButton");

// define the handleClick function which is used in the first button that has the button variable defined to it
function handleClick(event) {
  event.preventDefault(); // prevent the form from submitting

  // get the values of the job name, description, and estimate fields
  var jobName = document.querySelector("#job-name").value;
  var jobDescription = document.querySelector("#job-description").value;
  var jobEstimate = document.querySelector("#job-estimate").value;

  // display a message with the entered job details
  var message = "Job Name: " + jobName + "<br>" +
                "Job Description: " + jobDescription + "<br>" +
                "Job Estimate: $" + jobEstimate;
  document.getElementById("message").innerHTML = message;
}

// define the myFunction function which changes the background color of the body
function myFunction() {
  document.body.style.backgroundColor = "black";
}

// add a click event listener to the button with id "myButton"
button.addEventListener("click", myFunction);

function mySecondFunction() {
  var myMessage = document.getElementById("myMessage");
  myMessage.style.color = "red";
}

var button = document.getElementById("myButton");
button.addEventListener("click", mySecondFunction);

var myMessage = document.getElementById("myMessage");
myMessage.addEventListener("click", function() {
  myMessage.style.color = "red";
});

//my first full javascript code
var hugeH1 = document.getElementById("hugeH1");
hugeH1.addEventListener("click", textColorBlue);

function textColorBlue() {
  hugeH1.style.color = "blue";
}

// get the button element, set the variable named button to the first button in the html file
var button = document.querySelector("#myButton");

// define the handleClick function which is used in the first button that has the button variable defined to it
async function handleClick(event) {
  event.preventDefault(); // prevent the form from submitting

  // get the values of the job name, description, and estimate fields
  var jobName = document.querySelector("#job-name").value;
  var jobDescription = document.querySelector("#job-description").value;
  var jobEstimate = document.querySelector("#job-estimate").value;

  // display a message with the entered job details
  var message = "Job Name: " + jobName + "<br>" +
                "Job Description: " + jobDescription + "<br>" +
                "Job Estimate: $" + jobEstimate;
  document.getElementById("message").innerHTML = message;

  try {
    // retrieve all users and display them in the HTML document
    const response = await fetch('/users');
    const users = await response.json();
    var userList = "";
    users.forEach(user => {
      userList += user.firstName + " " + user.lastName + "<br>";
    });
    document.getElementById("user-list").innerHTML = userList;
  } catch (err) {
    console.error('Unable to retrieve users:', err);
  }
}

// add a click event listener to the button
button.addEventListener("click", handleClick);

// add a click event listener to the button with id "myButton"
button.addEventListener("click", myFunction);


//my third full javascript code
var headHarry = document.getElementById("headHarry");
headHarry.addEventListener("click", textColorRed);

function textColorRed() {
  headHarry.style.color = "red";
}

//my fourth full javascript code
var buttonBob = document.getElementById("buttonBob");
buttonBob.addEventListener("click", buttonBgRed);

function buttonBgRed() {
  buttonBob.style.backgroundColor = "red";
}

//my fifth full javascript code
var divDave = document.getElementById("divDave");
divDave.addEventListener("click", divSahdow);

function divSahdow() {
  divDave.style.boxShadow= "0 0 10px 0 blue";
  divDave.style.borderRadius = "10px";
  divDave.style.padding = "10px 10px 10px 10px";
  divDave.style.transition = " grow-shrink 2s ease-in-out infinite";
}

var exampleDiv = document.getElementById("example-div");
exampleDiv.addEventListener("click", toggleAnimation);

function toggleAnimation() {
  exampleDiv.classList.toggle("animating");
}




