// api url
$("#submitBtn").on("click", runSearch);
function runSearch(){

event.preventDefault();
var nut = "";
$('input[class="filter"]:checked').each(function(item) {
    
    var box = $(this);
        var f = box.data("f");
        var n = box.data("n");
        nut += "&"+ f + "=" + n;
    });
console.log(nut);

var search = "chicken";
var api = "https://api.edamam.com/search?q=";
var key = "&app_id=165d9a3a&app_key=13ed1985dcd9cb0a99bedc7ce4a3ef80";

var urlSearch = api + search + key + nut;
console.log(urlSearch);
$.ajax({url: urlSearch, success: function(response){
    console.log(response);
    var results = response.hits;
    for (var i = 0; i < 5; i++){
        var element = results[i];
        var dataFood = element.recipe;
        var title = dataFood.label;
        var img = dataFood.image;
        var txt = dataFood.healthLabels;

        console.log(title);
        var textnode = $("<p>");
        $(textnode).append(title);
        textnode.addClass("entry");
        textnode.css('background-image', 'url(' + img + ')');

        $("body").append(textnode);
        txt.forEach(element => {
            var contains = $("<p>");
            $(contains).addClass("desc");
            $(contains).append(element + "  " + "<br>");
            $("body").append(contains);
        });
            
       
        
    }
    // results.forEach(element => {
    //     var x = element.index;
    //     if (x < 5){
    //     var title = element.recipe.label;
    //     var img = element.recipe.image;

    //     console.log(title);
    //     var textnode = $("<p>");
    //     $(textnode).append(title);
    //     textnode.addClass("entry");
    //     textnode.css('background-image', 'url(' + img + ')');
    //     $("body").append(textnode);
    //     }
    // });
    
}});

}
//https://api.edamam.com/search?q=chicken&app_id=165d9a3a&app_key=13ed1985dcd9cb0a99bedc7ce4a3ef80&from=0&to=3&calories=gte%20591,%20lte%20722&health=alcohol-free