function reset() {
        $("mainScreen").show();
        $("#searchRow").show();
        $("#displayRow").hide();
        $("#videoRow").hide();
    
}

$(document).ready(function() {
           
    
        var ingredient = $('#ingredient');
        
        $("startBox").show();
        
        
        $("#logInBtn").on("click", function() {
            console.log("clicked");
            $("#startBox").hide();
            $("#logInModal").show();
        //    $('#myForm').validator('update');
       }); 
       
       
       $(".close").on("click", function() {
            $("#logInModal").hide();
            $("#startBox").show();
    
       });
       
       
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