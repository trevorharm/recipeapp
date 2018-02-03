$(document).ready(function () {

$("#resultDisplay").hide();

$("#submitBtn").on("click", function (event) {
    event.preventDefault();
    $("#resultDisplay").show();
});

});