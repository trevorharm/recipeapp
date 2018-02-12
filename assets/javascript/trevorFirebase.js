// Initialize Firebase
var config = {
    apiKey: "AIzaSyC7SQ244UWpfL-WnGQX5SmW4pMlYo-_aCw",
    authDomain: "recipe-app-e904e.firebaseapp.com",
    databaseURL: "https://recipe-app-e904e.firebaseio.com",
    projectId: "recipe-app-e904e",
    storageBucket: "",
    messagingSenderId: "319710210801"
};
firebase.initializeApp(config);

var database = firebase.database();

var email = "";
var convertedEmail = "";
var ingredients = [];
var recipes = [];
var videos = [];
var newObj;

$("#signUpSubmit").on("click", function (event) {
    event.preventDefault();
    email = $("#signUpEmail").val().trim();
    convertedEmail = email.replace(".", ",");
    database.ref("/users").once("value", function (snapshot) {
        if (snapshot.child(convertedEmail).exists()) {
            var stringJSON = JSON.stringify(snapshot.child(convertedEmail));
            var parseJSON = JSON.parse(stringJSON);
            var newObj = parseJSON;
            console.log(newObj);
            swal("That Email Address Is In Use. Please Use Login Option If Returning To Site.");
        } else {
            // alert("There are no users with that email!");
            $("#mainScreen").slideDown();
            $("#searchRow").slideDown();
            // $("#favorites").slideDown();
            // $("#videoRow").slideDown();
            $("#startBox").hide();
            $("#signUpModal").hide();
        }
    }, function (errorObject) {
        console.log("The read failed: " + errorObject.code);
    });
});

$("#logInSubmit").on("click", function (event) {
    event.preventDefault();
    email = $("#inputEmail").val().trim();
    convertedEmail = email.replace(".", ",");
    database.ref("/users").once("value", function (snapshot) {
        if (snapshot.child(convertedEmail).exists()) {
            var stringJSON = JSON.stringify(snapshot.child(convertedEmail));
            var parseJSON = JSON.parse(stringJSON);
            newObj = parseJSON;
            console.log(newObj);
            var recipeText = " ";
            var ingredientText = " ";
            var videoText = " ";
            var x;
            var recipeArray = newObj.recipes;
            var ingredientArray = newObj.ingredients;
            var videoArray = newObj.videos;
            for (x in recipeArray) {
                recipeText = recipeArray[x] + " ";
                $("#favorites-display").append("<div>" + recipeText + "</div>");
                recipes.push(recipeArray[x]);
            };
            for (x in ingredientArray) {
                ingredientText = ingredientArray[x] + " ";
                $("#favorites-display").append("<div>" + ingredientText + "</div>");
                ingredients.push(ingredientArray[x]);
            };
            for (x in videoArray) {
                videoText = videoArray[x] + " ";
                $("#favorites-display").append("<div>" + videoText + "</div>");
                videos.push(videoArray[x]);
            };
            // recipes.push(recipeArray);
            // ingredients.push(ingredientArray);
            // videos.push(videoArray);
            $("#mainScreen").slideDown();
            $("#searchRow").slideDown();
            $("#favorites").slideDown();
            $("#videoRow").slideDown();
            $("#startBox").hide();
            $("#logInModal").hide();
        } else {
            // alert("There are no users with that email!");
            swal("That Account Does Not Exist. Please Check The Spelling, Or Sign Up If This Is Your First Time!")
            $("#logInModal").show();

        }
    }, function (errorObject) {
        console.log("The read failed: " + errorObject);
    });
});

$("#submitBtn").on("click", function (event) {
    event.preventDefault();
    var newIngredient = $("#ingredient").val().trim();
    ingredients.push(newIngredient);
    database.ref("users/" + convertedEmail).set({
        ingredients: ingredients,
        recipes: recipes,
        videos: videos
    });
    database.ref("/users").once("value", function (snapshot) {
        var stringJSON = JSON.stringify(snapshot.child(convertedEmail));
        var parseJSON = JSON.parse(stringJSON);
        newObj = parseJSON;
        console.log(newObj);
        // console.log(newObj.ingredients);
        // console.log(newObj.recipes);
        // console.log(newObj.videos);
    });
});