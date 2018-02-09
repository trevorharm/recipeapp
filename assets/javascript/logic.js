function valid() {
    var string = $("#inputEmail").val();
    var substring1 = "@";
    var substring2 = ".com";
    if(string.indexOf(substring1) !== -1 && string.indexOf(substring2) !== -1) {
        $("#logInSubmit").prop("disabled", false);
        console.log(string);
    } else{
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

$(document).ready(function() {
           
    
        var ingredient = $('#ingredient');
        var input = $("#inputEmail");
       
        $("startBox").show();
               
        $("#logInBtn").on("click", function() {
            console.log("clicked");
            $("#startBox").hide();
            $("#logInModal").show();
                   
       }); 
       
       
       $(".close").on("click", function() {
            $("#logInModal").hide();
            $("#startBox").show();
    
       });

       //runs valid function to check input for "@" and ".com" strings before enabling button
       input.on("change", valid);
       
       $("#logInSubmit").on("click", function(e) {
            e.preventDefault();
            
            var email = $("#inputEmail").val().trim();
            console.log("Welcome, " + email + "!");
            $("#mainScreen").show();
            $("#searchRow").show();
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