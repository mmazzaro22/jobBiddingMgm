// get the button element, set the varible named button to the first button in the html file
var button = document.querySelector("button");

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

document.getElementById("myButton").addEventListener("click", myFunction);

function myFunction() {
   console.log("Hello, World!");
}
