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
    
    if(string2.indexOf(substring1) !== -1 && string2.indexOf(substring2) !== -1) {
        $("#signUpSubmit").prop("disabled", false);
        console.log("Looks like an email");
    }else{
        $("#signUpSubmit").prop("disabled", true);
        console.log(string2);
    }
}

function reset() {
       
    $("#displayRow").hide();
    $("#video-display").empty();
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

    var email;
    //var ingredient = $('#ingredient');
    //var input = $("#inputEmail");
    //var signUp = $("#signUpEmail");
    
    
    $("#searchForm").submit(function(e){
        e.preventDefault();
    });

    $("button").on("click", ".favorite", function(e){
        console.log("button");
        var favLink = $("<button>");
        var favText = e.target.closest("a").text();
        favLink.addClass("btn btn-Default");
        favLink.text(favText);
        $("#favorites-display").append(favLink);
        //find nearest sibling <a>
    

    });
        
       
    
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
        wellDiv.attr('id', 'recipe-0');
        wellDiv.html("<h3>" + ingredient.val() + "</h3>");
        
        
        //append div to display
        $('#recipe-display').append(wellDiv);
        //append recipe image
        $("#reset").on("click", reset);

    });

    $(".favorite").on("click", function(e){
        console.log(e.target);
        var favLink = $("<button>");
        var favText = e.target.closest("a").text();
        favLink.addClass("btn btn-Default");
        favLink.text(favText);
        $("#favorites-display").append(favLink);
        //find nearest sibling <a>
        


    });



    // $("#signUpSubmit").on("click", function(event) {
    //     event.preventDefault();
    //     let email = $("#signUpEmail").val().trim();
    //     // console.log(email);
    //     convertedEmail = email.replace(".", ",");
    //     // console.log(convertedEmail);
    //     database.ref("/users").once("value", function(snapshot) {
    //         if (snapshot.child(convertedEmail).exists()) {
    //             alert("That username is taken!");
                 
    //             var stringJSON = JSON.stringify(snapshot.child(convertedEmail));
    //             var parseJSON = JSON.parse(stringJSON);
    //             var newObj = parseJSON;
    //             console.log(newObj);
    //             // console.log(newObj.ingredients);
    //             // console.log(newObj.recipes);
    //             // console.log(newObj.videos);
    //         } else {
    //             //alert("There are no users with that email!");
    //             $("#signUpSubmit").prop("disabled", false);
    //             $("#title").text("Welcome" + email + "!");
    //             $("#mainScreen").slideDown();
    //             $("#searchRow").slideDown();
    //             $("#videoRow").slideDown();
    //             $("#displayRow").slideDown();
    //             $("#startBox").hide();
    //             $("#signUpModal").hide();
    //             //reset();
    //         }
    //     }, function(errorObject) {
    //         console.log("The read failed: " + errorObject.code);
    //     });
    });
    
    
    
