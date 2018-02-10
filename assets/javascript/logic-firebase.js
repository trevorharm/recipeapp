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
    var recipes = ["How to", "2", "3", "4"];
    var videos = ["Vid"];
    var newObj;

    $("#signUpSubmit").on("click", function(event) {
        event.preventDefault();
        email = $("#signUpEmail").val().trim();
        // console.log(email);
        convertedEmail = email.replace(".", ",");
        // console.log(convertedEmail);
        database.ref("/users").once("value", function(snapshot) {
            if (snapshot.child(convertedEmail).exists()) {
                alert("That username is taken!");
                // reset();
                var stringJSON = JSON.stringify(snapshot.child(convertedEmail));
                var parseJSON = JSON.parse(stringJSON);
                var newObj = parseJSON;
                console.log(newObj);
                // console.log(newObj.ingredients);
                // console.log(newObj.recipes);
                // console.log(newObj.videos);
            } else {
                alert("There are no users with that email!");
            }
        }, function(errorObject) {
            console.log("The read failed: " + errorObject.code);
        });
    });

    $("#logInSubmit").on("click", function(event) {
        event.preventDefault();
        email = $("#inputEmail").val().trim();
        // console.log(email);
        convertedEmail = email.replace(".", ",");
        // console.log(convertedEmail);
        database.ref("/users").once("value", function(snapshot) {
            if (snapshot.child(convertedEmail).exists()) {
                var stringJSON = JSON.stringify(snapshot.child(convertedEmail));
                var parseJSON = JSON.parse(stringJSON);
                newObj = parseJSON;
                console.log(newObj);
                // console.log(newObj.ingredients);
                // console.log(newObj.recipes);
                // console.log(newObj.videos);
                console.log(newObj.recipes);
                var recipeArray = newObj.recipes;
                recipeArray.forEach(element => {
                    $("#favorites-display").append("<p>" + element + "</p>");
                });
                // for (i = 0; i < newObj.recipes.length; i++) {
                //     $("#favorites-display").append(newObj.recipes[i]);
                // };
            } else {
                alert("There are no users with that email!");
            }
        }, function(errorObject) {
            console.log("The read failed: " + errorObject);
        });
    });

    $("#submitBtn").on("click", function(event) {
        event.preventDefault();
        var newIngredient = $("#ingredient").val().trim();
        ingredients.push(newIngredient);
        database.ref("users/" + convertedEmail).set({
            ingredients: ingredients,
            recipes: recipes,
            videos: videos
        });
        database.ref("/users").once("value", function(snapshot) {
            var stringJSON = JSON.stringify(snapshot.child(convertedEmail));
            var parseJSON = JSON.parse(stringJSON);
            newObj = parseJSON;
            console.log(newObj);
            // console.log(newObj.ingredients);
            // console.log(newObj.recipes);
            // console.log(newObj.videos);
        })
    });

    // $("#favoriteBtn").on("click", function(event) {
    // event.preventDefault();
    // newUser.recipe = results.hits[?]
    // database.ref('users').push(newUser);
    // });

    // database.ref().on("child_added", function(childSnapshot) {
    //     console.log(childSnapshot.val().newUser);
    // }, function(errorObject) {
    //     console.log("Errors handled: " + errorObject.code);
    // });