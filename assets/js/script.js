$(document).ready(function() {

//Updates the current date to the id currentDay----------------------------------------    
var date = moment().format("dddd, MMMM Do YYYY");
$("#currentDay").text(date); 

//Current, start and end time variables------------------------------------------------
var currentTime = moment().format("hh a");
var endTime = moment("18", 'HH').format('hh a');
var startTime = moment("09", 'HH').format('h a');
//-------------------------------------------------------------------------------------

var dayHrs = 18;

for( var i = 9; i < dayHrs; i++){
    var timeBlock = $("<div class='time-block row'>");
    var hour = $("<div class='hour col-1'>");
    var task = $("<textarea class='description col-10'>");
    var save = $("<button class='saveBtn col-1'>").append("<i class='fas fa-save'>");
    
    $(".container").append(timeBlock);
    timeBlock.append(hour, task, save);
    hour.append(i + ":00");
}

$(function() {
    if(hour < currentTime){
    $(".time-block").addClass("past");
    }
    else if(currentTime = hour){
    $(".time-block").addClass("present");
    }
    else if(hour > currentTime){
        $(".time-block").addClass("future");
        }
});


console.log(currentTime);
console.log(startTime);
console.log(endTime);
console.log(e);

})