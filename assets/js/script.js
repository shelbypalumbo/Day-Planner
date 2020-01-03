$(document).ready(function() {

//Updates the current date to the id currentDay----------------------------------------    
var date = moment().format("dddd, MMMM Do YYYY");
$("#currentDay").text(date); 

//Current, start and end time variables------------------------------------------------
var currentTime = moment().format("HH");
//-------------------------------------------------------------------------------------

var dayHrs = 19;

for( var i = 9; i < dayHrs; i++){
    var timeBlock = $("<div class='time-block row'>");
    var hour = $("<div class='hour col-1'>");
    var task = $("<textarea class='description col-10'>");
    task.attr("data-task", i);
    var save = $("<button class='saveBtn col-1'>").append("<i class='fas fa-save'>");
    $(".container").append(timeBlock);
    timeBlock.append(hour, task, save);
    hour.append(i + ":00");

    if(currentTime > i){
      timeBlock.addClass("past");
      }
      else if(currentTime == i){
      timeBlock.addClass("present");
      }
      else if(currentTime < i){
      timeBlock.addClass("future");
      }
      //console.log(i);
      //console.log(currentTime);
};

//Storage------------------------------------------------------------------------------
$(function(){
    var task = localStorage.getItem("task");
    var textArea = $(".description");
    textArea.text(task);
    console.log(task);
  });

$("button").on("click", function(event) {
    event.preventDefault();
    var task = $("data-task", i);
      localStorage.setItem("task", task);
    });
})