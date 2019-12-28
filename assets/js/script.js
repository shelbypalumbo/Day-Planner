$(document).ready(function () {

//Prints the current date to the id currentDay ---------------------------------------    
var date = moment().format("dddd, MMMM Do YYYY");
$("#currentDay").text(date); 
//------------------------------------------------------------------------------------
var currentTime = moment().format("h:mm:ss a");
var startTime = moment().format('09:00'); //9am
var endTime = moment().format('18:00');  //6pm


$(function(){
    if(currentTime > startTime){
    $(".time-block").addClass("past");
    }
});


$(function(){
    if(currentTime < endTime){
    $(".time-block").addClass("future");
    }
});



})