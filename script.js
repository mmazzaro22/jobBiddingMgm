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

// add a click event listener to the button
button.addEventListener("click", handleClick);

// define the myFunction function which changes the background color of the body
function myFunction() {
  document.body.style.backgroundColor = "black";
}

// add a click event listener to the button with id "myButton"
button.addEventListener("click", myFunction);

var myButton = document.getElementById("myButton");

myButton.addEventListener("click", function() {
  document.body.style.backgroundColor = "black";
});


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
  hugeH1.style.color = "red";
}