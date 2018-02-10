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
    var recipes = ["How to"];
    var videos = ["Vid"];

    $("#signUpSubmit").on("click", function(event) {
        event.preventDefault();
        email = $("#signUpEmail").val().trim();
        console.log(email);
        convertedEmail = email.replace(".", ",");
        console.log(convertedEmail);
        database.ref("/users").once("value", function(snapshot) {
            if (snapshot.child(convertedEmail).exists()) {
                alert("That username is taken!");
                var stringJSON = JSON.stringify(snapshot.child(convertedEmail));
                var parseJSON = JSON.parse(stringJSON);
                var newObj = parseJSON;
                console.log(newObj);
                console.log(newObj.ingredients);
                console.log(newObj.recipes);
                console.log(newObj.videos);
                // $("#displayRow").show();
                // $("#videoRow").show();
            } else {
                console.log("Doesn't exist");
            }
        }, function(errorObject) {
            console.log("The read failed: " + errorObject.code);
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
        console.log(convertedEmail);
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