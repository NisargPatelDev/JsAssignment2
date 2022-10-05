// WEB303 Assignment 2
//Author : Nisarg Patel

$(document).ready(function(){
    $('#convert').click(function(){
        $("#content").load("convert.html", function(responseTxt, statusTxt, xhr){
            if(statusTxt == "success")
              console.write("External content loaded successfully!");
            if(statusTxt == "error")
              alert("Error: " + xhr.status + ": " + xhr.statusText);
          });
    });
    $('#prospect').click(function(){
        $("#prospect").load("prospect.html", function(responseTxt, statusTxt, xhr){
            if(statusTxt == "success")
              console.write("External content loaded successfully!");
            if(statusTxt == "error")
              console.write("Error: " + xhr.status + ": " + xhr.statusText);
          });
    });

    $('#retain').click(function(){
        $("#retain").load("retain.html", function(responseTxt, statusTxt, xhr){
            if(statusTxt == "success")
              console.write("External content loaded successfully!");
            if(statusTxt == "error")
              console.write("Error: " + xhr.status + ": " + xhr.statusText);
          });
    });
});