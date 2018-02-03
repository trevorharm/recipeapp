$(document).ready(function () {

$("#resultDisplay").hide();

$("#submitBtn").on("click", function (event) {
    event.preventDefault();
    $("#resultDisplay").show();
});

});


//working on hiding everthing except for the log in button, click that shows a modal for username, then the main page

    $(document).ready(function() {


    var ingredient = $('#ingredient');
    var healthFlag = $('#health');

    $("#logInModal").hide();

    $("#logIn").on("click", function() {
        console.log("clicked");
        $("#startBox").hide();
        $("#logInModal").show();
        
   });

    $('#submitBtn').on('click', function(e) {
        e.preventDefault();
        console.log(ingredient.val());
        console.log(healthFlag).val();
      
      $('#recipe-display').empty();
      
      
        var wellDiv = $('<div></div>');
        wellDiv.addClass('well');
        wellDiv.attr('id', 'recipeWell');
        
        
        $('#recipeDisplay').append(wellDiv);
        wellDiv.text('<h2>' + ingredient + '</h2>');
        console.log(wellDiv);
        
        

         });
       

    });
   
   
   $(".close").on("click", function() {
        $("#logInModal").hide();
        $("#startBox").show();

   });
   
   $("#logInSubmit").on("click", function(e) {
    var userName = $("#userName").val();
        console.log(userName);
   });

});