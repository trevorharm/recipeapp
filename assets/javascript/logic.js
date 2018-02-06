function reset() {
        $("mainScreen").show();
        $("#searchRow").show();
        $("#displayRow").hide();
    
}

$(document).ready(function() {
    
    
        var ingredient = $('#ingredient');
        
        
        $("#mainScreen").hide();
        $("#logInModal").hide();
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
       
       
       $("#logInSubmit").on("click", function(e) {
            e.preventDefault();
            var userName = $("#userName").val().trim();
            console.log("Welcome, " + userName + "!");
            $("#mainScreen").show();
            $("#displayRow").hide();
            $("#startBox").hide();
            $("#logInModal").hide();
       });
    
       
       // 
        $('#submitBtn').on('click', function(e) {
            e.preventDefault();
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