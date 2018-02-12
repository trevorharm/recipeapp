//VARIABLES==================================================================================

var substring1 = "@";
var substring2 = ".com";
var substring3 = ".net"
var ingredient = $('#ingredient');
var input = $("#inputEmail");
var signUp = $("#signUpEmail");


//FUNCTIONS==================================================================================

function valid() {
    var string = $("#inputEmail").val();
    if(string === "") {
        $("#logInSubmit").prop("disabled", true);
        
    }
    
     //runs valid function to check input for "@" and ".com" strings before enabling button
    if(string.indexOf(substring1) !== -1 &&   (string.indexOf(substring2) !== -1 || string.indexOf(substring3) !== -1)   ) {
        $("#logInSubmit").prop("disabled", false);
       
    }else{
        $("#logInSubmit").prop("disabled", true);
        
    }
}

function valid2() {
    var string2 = $("#signUpEmail").val();
    if(string2 === "") {
        $("#signUpSubmit").prop("disabled", true);
        
    }
    
    if(string2.indexOf(substring1) !== -1 && (string2.indexOf(substring2) !== -1 || string.indexOf(substring3) !== -1)  ) {
        $("#signUpSubmit").prop("disabled", false);
        
    }else{
        $("#signUpSubmit").prop("disabled", true);
        ;
    }
}

function reset() {
       
    $("#displayRow").hide();
    $("#video-display").empty();
    $("#video-display").css("height", "100px");
    $("#logInModal").hide();
    $("#signUpModal").hide();
    $("mainScreen").show();
    $("#searchRow").show();
}

function slideTime() {
    setTimeout(function(){ $("#logInModal").slideDown(); }, 500);
}

function signUpSlide() {
    setTimeout(function(){ $("#signUpModal").slideDown(); }, 500);
}

function slideTime2() {
    setTimeout(function(){ $("#startBox").slideDown(); }, 500);
}



//MAIN PROCESSES/ ON PAGE LOAD==========================================================
$(document).ready(function() {

    //var email;
     
    $("#searchForm").submit(function(e){
        e.preventDefault();
    });

    // $("button").on("click", ".favorite", function(e){
    //     console.log("button");
    //     var favLink = $("<button>");
    //     var favText = e.target.closest("a").text();
    //     favLink.addClass("btn btn-Default");
    //     favLink.text(favText);
    //     $("#favorites-display").append(favLink);
    //     //find nearest sibling <a>
    

    // });
        
       
    
    //log in click event       
    $("#logInBtn").on("click", function() {
        
        $("#startBox").slideUp();
        slideTime();
        valid();                          
    }); 


    $("#signUpBtn").on("click", function() {
        
        $("#startBox").slideUp();
        signUpSlide();
        valid2();                          
    }); 
       
    //validates text on change and keyup
    input.on("change", valid);
    input.on("keyup", valid); 
    signUp.on("change", valid2);
    signUp.on("keyup", valid2);
      
    $(".close1").on("click", function() {
        $("#logInModal").slideUp();
        slideTime2();
    
    });

    $(".close2").on("click", function() {
    $("#signUpModal").slideUp();
    slideTime2();
   
    });

      
       
       
     //logging in================================================ 
    // $("#logInSubmit").on("click", function(e) {
    //     e.preventDefault();
        
    //     let email = $("#inputEmail").val().trim();
    //     console.log("Welcome, " + email + "!");
    //     $("#mainScreen").slideDown();
    //     $("#searchRow").slideDown();
    //     $("#favorites").slideDown();
    //     //$("#videoRow").slideDown();
    //     //$("#displayRow").slideDown();
    //     //$("#videoRow").hide();
    //     //$("#displayRow").hide();
    //     $("#startBox").hide();
    //     $("#logInModal").hide();
    // });

    // // sign up submission click event <=================================
    // $("#signUpSubmit").on("click", function(e) {
    //     e.preventDefault();
        
    //     let email = $("#signUpEmail").val().trim();
    //     console.log("Welcome, " + email + "!");
    //     $("#mainScreen").slideDown();
    //     $("#searchRow").slideDown();
    //     //$("#videoRow").slideDown();
    //     //$("#displayRow").slideDown();
    //     $("#startBox").hide();
    //     $("#signUpModal").hide();
    // });
    
       
    //LOGGED IN, SEARCH ======================================   
    $('#submitBtn').on('click', function(e) {
        e.preventDefault();
        e.stopPropagation();

        $("#videoRow").show();
        $("#displayRow").show();
        //$("#searchRow").hide();
        //ajax call

        console.log(ingredient.val());
        
        //empties current display
        $('#recipe-display').empty();
        
        //div to fill with info from results
        var wellDiv = $('<div>');
        wellDiv.attr('id', 'favHead');
        wellDiv.html("<h2>" + ingredient.val() + " recipes:</h2>");
        
        
        //append div to display
        $('#recipe-display').append(wellDiv);
        //append recipe image
        $("#reset").on("click", reset);

    });

    // $(".favorite").on("click", function(e){
    //     console.log(e.target);
    //     var favLink = $("<button>");
    //     var favText = e.target.closest("a").text();
    //     favLink.addClass("btn btn-Default");
    //     favLink.text(favText);
    //     $("#favorites-display").append(favLink);
    

});

    
    
    
