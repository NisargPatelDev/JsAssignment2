// WEB303 Assignment 2


// $(document).ready(function(){
//     $('#convert').click(function(){
//         $("#convert").load("/convert.html");
//     });
// });


$(document).ready(function(){
    $('#convert').click(function(){
        // $('#content').empty();
        // $( "#content").load( "convert.html");
        $("#content").load("convert.html", function(responseTxt, statusTxt, xhr){
            if(statusTxt == "success")
              console.write("External content loaded successfully!");
            if(statusTxt == "error")
              alert("Error: " + xhr.status + ": " + xhr.statusText);
          });
    });

   


    

    $('#prospect').click(function(){
        $('#content').empty();
        $( "#content").load( "prospect.html");


        $("#prospect").load("prospect.html", function(responseTxt, statusTxt, xhr){
            if(statusTxt == "success")
              console.write("External content loaded successfully!");
            if(statusTxt == "error")
              console.write("Error: " + xhr.status + ": " + xhr.statusText);
          });
    });

    $('#retain').click(function(){
        $('#content').empty();
        $( "#content").load( "retain.html");

        $("#retain").load("retain.html", function(responseTxt, statusTxt, xhr){
            if(statusTxt == "success")
              console.write("External content loaded successfully!");
            if(statusTxt == "error")
              console.write("Error: " + xhr.status + ": " + xhr.statusText);
          });
    });
});