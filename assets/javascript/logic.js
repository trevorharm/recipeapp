//VARIABLES==================================================================================

var substring1 = "@";
var substring2 = ".com";
var ingredient = $('#ingredient');
var input = $("#inputEmail");
var signUp = $("#signUpEmail");


//FUNCTIONS==================================================================================

function valid() {
    var string = $("#inputEmail").val();
    if(string === "") {
        $("#logInSubmit").prop("disabled", true);
        console.log("blank, disabled");
    }
    
     //runs valid function to check input for "@" and ".com" strings before enabling button
    if(string.indexOf(substring1) !== -1 && string.indexOf(substring2) !== -1) {
        $("#logInSubmit").prop("disabled", false);
        console.log(string);
    }else{
        $("#logInSubmit").prop("disabled", true);
        console.log(string);
    }
}

function valid2() {
    var string2 = $("#signUpEmail").val();
    if(string2 === "") {
        $("#signUpSubmit").prop("disabled", true);
        console.log("blank, disabled");
    }
    
     //runs valid for sign up input/button
    if(string2.indexOf(substring1) !== -1 && string2.indexOf(substring2) !== -1) {
        $("#signUpSubmit").prop("disabled", false);
        console.log(string2);
    }else{
        $("#signUpSubmit").prop("disabled", true);
        console.log(string2);
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

function signUpSlide() {
    setTimeout(function(){ $("#signUpModal").slideDown(); }, 500);
}

function slideTime2() {
    setTimeout(function(){ $("#startBox").slideDown(); }, 500);
}



//MAIN PROCESSES/ ON PAGE LOAD==========================================================
$(document).ready(function() {
   
    var email;
    //var ingredient = $('#ingredient');
    //var input = $("#inputEmail");
    //var signUp = $("#signUpEmail");
    
    
    $("#searchForm").submit(function(e){
        e.preventDefault();
    });
        
    //$("startBox").show();
        
    
    //log in click event       
    $("#logInBtn").on("click", function() {
        console.log("clicked");
        $("#startBox").slideUp();
        slideTime();
        valid();                          
    }); 


    $("#signUpBtn").on("click", function() {
        console.log("clicked");
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

      
       
       
      
    $("#logInSubmit").on("click", function(e) {
        e.preventDefault();
        
        let email = $("#inputEmail").val().trim();
        console.log("Welcome, " + email + "!");
        $("#mainScreen").slideDown();
        $("#searchRow").slideDown();
        $("#videoRow").hide();
        $("#displayRow").hide();
        $("#startBox").hide();
        $("#logInModal").hide();
    });

    // sign up submission click event
    $("#signUpSubmit").on("click", function(e) {
    e.preventDefault();
    
    let email = $("#signUpEmail").val().trim();
    console.log("Welcome, " + email + "!");
    $("#mainScreen").slideDown();
    $("#searchRow").slideDown();
    $("#startBox").hide();
    $("#signUpModal").hide();
    });
    
       
       
    $('#submitBtn').on('click', function(e) {
        e.preventDefault();
        e.stopPropagation();

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