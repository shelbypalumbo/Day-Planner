$(document).ready(function () {

//---------------Updates the current date to the id currentDay -----------------------   
var date = moment().format("dddd, MMMM Do YYYY");
$("#currentDay").text(date); 


//-----------------------Time-block Variables----------------------------------------- 
var currentTime = moment().format("h");

var hour9am = $("#hour9am").text();
  hour9am = hour9am[0];
var hour10am = $("#hour10am").text();
  hour10am = hour10am[0] + hour10am[1]
var hour11am = $("#hour11am").text();
  hour10am = hour11am[0] + hour11am[1]
var hour12am = $("#hour12am").text();
  hour10am = hour12am[0] + hour12am[1]
var hour1pm = $("#hour1pm").text();
  hour1pm = hour1pm[0];
var hour2pm = $("#hour2pm").text();
  hour2pm = hour2pm[0];
var hour3pm = $("#hour3pm").text();
  hour3pm = hour3pm[0];
var hour4pm = $("#hour4pm").text();
  hour4pm = hour4pm[0];
var hour5pm = $("#hour5pm").text();
  hour5pm = hour5pm[0];


//----------------------Conditionals for Styling----------------------------------------
if ( hour9am > currentTime){
    $("#hour9 .description ").addClass("past");
  } else if( hour9am == currentTime){
    $("#hour9 .description ").addClass("present"); 
  } else if (hour9am > currentTime){
    $("#hour9 .description ").addClass("future");  
  }

if (hour10am < currentTime){
    $("#hour10 .description ").addClass("past");
  } else if( hour10am == currentTime){
    $("#hour10 .description ").addClass("present"); 
  } else if (hour10am > currentTime){
    $("#hour10 .description ").addClass("future");  
  }

if (hour11am < currentTime){
  $("#hour11 .description ").addClass("past");
} else if( hour11am == currentTime){
  $("#hour11 .description ").addClass("present"); 
} else if (hour11am > currentTime){
  $("#hour11 .description ").addClass("future");  
}

if (hour12am < currentTime){
  $("#hour12 .description ").addClass("past");
} else if( hour12am == currentTime){
  $("#hour12 .description ").addClass("present"); 
} else if (hour12am > currentTime){
  $("#hour12 .description ").addClass("future");  
}

if (hour1pm < currentTime){
  $("#hour13 .description ").addClass("past");
} else if( hour1pm == currentTime){
  $("#hour13 .description ").addClass("present");  
} else if (hour1pm > currentTime){
  $("#hour13 .description ").addClass("future");  
}

if (hour2pm < currentTime){
  $("#hour14 .description ").addClass("past");  
} else if( hour2pm == currentTime){
  $("#hour14 .description ").addClass("present");  
} else if (hour2pm > currentTime){
  $("#hour14 .description ").addClass("future");  
}

if (hour3pm < currentTime){
  $("#hour15 .description ").addClass("past");  
} else if( hour3pm == currentTime){
  $("#hour15 .description ").addClass("present");  
} else if (hour3pm > currentTime){
  $("#hour15 .description ").addClass("future");  
};

if (hour4pm < currentTime){
  $("#hour16 .description ").addClass("past");  
} else if( hour4pm == currentTime){
  $("#hour16 .description ").addClass("present");  
} else if (hour4pm > currentTime){
  $("#hour16 .description ").addClass("future");  
}

if (hour5pm < currentTime){
  $("#hour17 .description ").addClass("past");  
} else if( hour5pm == currentTime){
  $("#hour17 .description ").addClass("present");  
} else if (hour5pm > currentTime){
  $("#hour17 .description ").addClass("future");  
}

//--------------------------------An Attempt at Storage----------------------------------
$(function(){
  var task = localStorage.getItem("task1");
  var textArea = $(".9am");
  textArea.text(task);
});

$(function(){
  var task = localStorage.getItem("task2");
  var textArea = $(".10am");
  textArea.text(task);

});
$(function(){
  var task = localStorage.getItem("task3");
  var textArea = $(".11am");
  textArea.text(task);

});
$(function(){
  var task = localStorage.getItem("task4");
  var textArea = $(".12am");
  textArea.text(task);

});
$(function(){
  var task = localStorage.getItem("task5");
  var textArea = $(".1pm");
  textArea.text(task);

});
$(function(){
  var task = localStorage.getItem("task6");
  var textArea = $(".2pm");
  textArea.text(task);

});

$(function(){
  var task = localStorage.getItem("task7");
  var textArea = $(".3pm");
  textArea.text(task);

});
$(function(){
  var task = localStorage.getItem("task8");
  var textArea = $(".4pm");
  textArea.text(task);

});
$(function(){
  var task = localStorage.getItem("task9");
  var textArea = $(".5pm");
  textArea.text(task);

});


$("button").on("click", function(event) {
  event.preventDefault();
  var task = $(".9am").val();
    localStorage.setItem("task1", task);
  });

  $("button").on("click", function(event) {
    event.preventDefault();
    var task = $(".10am").val();
      localStorage.setItem("task2", task);
    });
    $("button").on("click", function(event) {
      event.preventDefault();
      var task = $(".11am").val();
        localStorage.setItem("task3", task);
      });
      $("button").on("click", function(event) {
        event.preventDefault();
        var task = $(".12am").val();
          localStorage.setItem("task4", task);
        });
        $("button").on("click", function(event) {
          event.preventDefault();
          var task = $(".1pm").val();
            localStorage.setItem("task5", task);
          });
          $("button").on("click", function(event) {
            event.preventDefault();
            var task = $(".2pm").val();
              localStorage.setItem("task6", task);
            });
            $("button").on("click", function(event) {
              event.preventDefault();
              var task = $(".3pm").val();
                localStorage.setItem("task7", task);
              });
              $("button").on("click", function(event) {
                event.preventDefault();
                var task = $(".4pm").val();
                  localStorage.setItem("task8", task);
                });
                $("button").on("click", function(event) {
                  event.preventDefault();
                  var task = $(".5pm").val();
                    localStorage.setItem("task9", task);
                  });
//--------------------------------------------------------------------------------------
})