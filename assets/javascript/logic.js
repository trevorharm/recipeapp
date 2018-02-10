function valid() {
    var string = $("#inputEmail").val();
    if(string === "") {
        $("#logInSubmit").prop("disabled", true);
        console.log("blank, disabled");
    }

    var substring1 = "@";
    var substring2 = ".com";
    
    if(string.indexOf(substring1) !== -1 && string.indexOf(substring2) !== -1) {
        $("#logInSubmit").prop("disabled", false);
        console.log(string);
    }else{
        $("#logInSubmit").prop("disabled", true);
        console.log(string);
    }
}

function reset() {
        $("mainScreen").show();
        $("#searchRow").show();
        $("#displayRow").hide();
        $("#videoRow").hide();
    
}

function slideTime() {
    setTimeout(function(){ $("#logInModal").slideDown(); }, 500);
}

function slideTime2() {
    setTimeout(function(){ $("#startBox").slideDown(); }, 500);
}

$(document).ready(function() {
           
    
        var ingredient = $('#ingredient');
        var input = $("#inputEmail");
       
        $("startBox").show();
               
        $("#logInBtn").on("click", function() {
            console.log("clicked");
            $("#startBox").slideUp();
            slideTime();
            valid();                          
       }); 
       
       input.on("change", valid);
       input.on("keyup", valid); //on change here? makes you focus or unfocus to run valid();
      
       $(".close").on("click", function() {
            $("#logInModal").slideUp();
           slideTime2();
            
    
       });

       //runs valid function to check input for "@" and ".com" strings before enabling button
       
       
       $("#logInSubmit").on("click", function(e) {
            e.preventDefault();
            
            var email = $("#inputEmail").val().trim();
            console.log("Welcome, " + email + "!");
            $("#mainScreen").slideDown();
            $("#searchRow").slideDown();
            $("#videoRow").hide();
            $("#displayRow").hide();
            $("#startBox").hide();
            $("#logInModal").hide();
       });
    
       
       // 
        $('#submitBtn').on('click', function(e) {
            e.preventDefault();
             $("#videoRow").show();
            $("#displayRow").show();
            $("#searchRow").hide();
            //ajax call

            console.log(ingredient.val());
            
            //empties current display
            $('#recipe-display').empty();
          
            //div to fill with info from results
            var wellDiv = $('<div>');
            wellDiv.attr('id', 'recipe-0');
            wellDiv.html("<h3>" + ingredient.val() + "</h3>");
            
           
            //append div to display
            $('#recipe-display').append(wellDiv);
            //append recipe image
            $("#reset").on("click", reset);
    
        });
    
    
    
    });