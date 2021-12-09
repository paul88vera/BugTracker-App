////  popUp function that shows entry window
// TODO: delete button in popUp window needs to delete single array data
// TODO: submit button adds data to entry as single object
// TODO: create selectable assignee's and assigners
// TODO: entries listed as object data
// TODO: add entries to local storage

var addEntry = [];

/* OPENS ENTRY WINDOW */
$("#entryBtn").click(function(){
  var popUp = document.querySelector("#popUp");
  popUp.style.display = "block";

  if (!addEntry) {
    addEntry = [
      {
        title: [],
        status: [],
        type: [],
        assigned: [],
        start: "TimeRanges",
        due: "TimeRanges",
        priority: [],
        hours: "TimeRanges",
        progress: [],
      }
    ]
  };
  console.log(addEntry);
});


/** DATEPICKER */
// $("#calendar").datepicker({
//   minDate: 0
// });

$(function() {
  $("#calendar").datepicker();
});