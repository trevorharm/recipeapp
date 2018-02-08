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

    var newUser = {
    name: "",
    ingredient: "",
    recipe: "",
    video: ""
    };

    $("#logInSubmit").on("click", function(event) {
    event.preventDefault();
    newUser.name = $("#userName").val().trim();
    console.log(newUser.name);
    });

    $("#submitBtn").on("click", function(event) {
    event.preventDefault();
    newUser.ingredient = $("#ingredient").val().trim();
    console.log(newUser.ingredient);
    database.ref('users').child.push(newUser);
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