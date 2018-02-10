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

    var userName = "";

    var ingredients = [];
    var recipes = [];
    var videos = [];

    $("#logInSubmit").on("click", function(event) {
        event.preventDefault();
        userName = $("#userName").val().trim();
        console.log(userName);
        database.ref("/users").once("value", function(snapshot) {
            if (snapshot.child(userName).exists()) {
                alert("That username is taken!");
                // console.log(snapshot.child(userName));
                // console.log(snapshot.val().userName.recipes);
                var stringJSON = JSON.stringify(snapshot.child(userName));
                // console.log(stringJSON);
                var parseJSON = JSON.parse(stringJSON);
                // console.log(parseJSON);
                var newObj = parseJSON;
                console.log(newObj);
                console.log(newObj.ingredients);
                console.log(newObj.recipes);
                console.log(newObj.videos);
                $("#displayRow").show();
                $("#videoRow").show();
                // console.log(Object.keys(newObj)[0]);
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
    // console.log(ingredients);
        database.ref("users/" + userName).set({
            ingredients: ingredients,
            recipes: recipes,
            videos: videos
        });
    });

    // $("#favoriteBtn").on("click", function(event) {
    // event.preventDefault();
    // newUser.recipe = results.hits[?]
    // database.ref('users').push(newUser);
    // });

    database.ref().on("child_added", function(childSnapshot) {
        console.log(childSnapshot.val().newUser);
    }, function(errorObject) {
        console.log("Errors handled: " + errorObject.code);
    });