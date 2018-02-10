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
    var newIngredient = "";
    var recipes = ["How to", "2", "3", "4"];
    var videos = ["Vid"];
    var newObj;

    $("#signUpSubmit").on("click", function(event) {
        event.preventDefault();
        email = $("#signUpEmail").val().trim();
        convertedEmail = email.replace(".", ",");
        database.ref("/users").once("value", function(snapshot) {
            if (snapshot.child(convertedEmail).exists()) {
                alert("That username is taken!");
                var stringJSON = JSON.stringify(snapshot.child(convertedEmail));
                var parseJSON = JSON.parse(stringJSON);
                var newObj = parseJSON;
                console.log(newObj);
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
        convertedEmail = email.replace(".", ",");
        database.ref("/users").once("value", function(snapshot) {
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
                }
                for (x in ingredientArray) {
                    ingredientText = ingredientArray[x] + " ";
                    $("#favorites-display").append("<div>" + ingredientText + "</div>");
                }
                for (x in videoArray) {
                    videoText = videoArray[x] + " ";
                    $("#favorites-display").append("<div>" + videoText + "</div>");
                }
            } else {
                alert("There are no users with that email!");
            }
        }, function(errorObject) {
            console.log("The read failed: " + errorObject);
        });
    });

    $("#submitBtn").on("click", function(event) {
        event.preventDefault();
        database.ref("/users").once("value", function(snapshot) {
            if (snapshot.child(convertedEmail).exists()) {
                var stringJSON = JSON.stringify(snapshot.child(convertedEmail));
                var parseJSON = JSON.parse(stringJSON);
                newObj = parseJSON;
                console.log(newObj);
                var x;
                var savedIngredient = " ";
                var ingredientArray = newObj.ingredients;
                for (x in ingredientArray) {
                    savedIngredient = ingredientArray[x] + " ";
                    ingredients.push(savedIngredient);
                }
                console.log(ingredients);
            }
            newIngredient = $("#ingredient").val().trim();
            ingredients.push(newIngredient);
            console.log(ingredients);
            database.ref("users/" + convertedEmail).set({
                ingredients: ingredients,
                recipes: recipes,
                videos: videos
            });
        });

        database.ref("/users").once("value", function(snapshot) {
            var stringJSON = JSON.stringify(snapshot.child(convertedEmail));
            var parseJSON = JSON.parse(stringJSON);
            newObj = parseJSON;
            console.log(newObj);
        });
    });