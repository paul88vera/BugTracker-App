// Variables
var title = document.getElementById("title");
var issue = document.getElementById("issue");
var assigned = document.getElementById("assigned");
var startTime = document.getElementById("startTime");
var dueDate = document.getElementById("dueDate");
var priority = document.getElementById("priority");
var timer = document.getElementById("timer");
var progress = document.getElementById("progress");
//Pop-up screen for entries
function pop() {
  var popUp = document.getElementById("popUp");
  popUp.style.display = "block";
}
//Closing & Deleting new entries
function cls() {
  var popUp = document.getElementById("popUp");
  popUp.style.display = "none";
}
//Title Entry Function
function title() {
  var x = document.getElementById("titleEntry").innerHTML;
  document.getElementById("popTitle").innerHTML = x;
}
//New Entry function
const addNewEntry = document.querySelector("new-call");
addNewEntry.addEventListener("click", newEntry());
function newEntry() {
  const newTr = document.createElement("table-row");
  newTr.classList.add('entry');
  document.getElementById("titleBar").appendChild(newTr);
}