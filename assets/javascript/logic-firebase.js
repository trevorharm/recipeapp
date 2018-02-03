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
  var name = "";
  var recipes = [];
  var video = "";

  $("#submitBtn").on("click", function(event) {
      event.preventDefault();
      name = "Sam";
      recipes.push("Chicken Paprika");
      recipes.push("Chicken Nuggets");
      recipes.push("Chicken Pot Pie");
      recipes.push("Chicken Dumplings");
      recipes.push("Chicken Fingers");
      video = "Watch: How to Make Chicken Paprika";
      var ingredient = $("#ingredient").val().trim();
    //   console.log(ingredient);
      database.ref().push({
          name: name,
          ingredient: ingredient,
          recipe: recipes,
          video: video
      });
  });

  database.ref().on("child_added", function(childSnapshot) {
      console.log(childSnapshot.val().name);
      console.log(childSnapshot.val().ingredient);
      console.log(childSnapshot.val().recipe);
      console.log(childSnapshot.val().video);
  }, function(errorObject) {
      console.log("Errors handled: " + errorObject.code);
  });