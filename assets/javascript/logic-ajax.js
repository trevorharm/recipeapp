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

var search = $("#ingredient").val();
var api = "https://api.edamam.com/search?q=";
var key = "&app_id=165d9a3a&app_key=13ed1985dcd9cb0a99bedc7ce4a3ef80";

var urlSearch = api + search + key + nut;
console.log(urlSearch);
$.ajax({url: urlSearch, success: function(response){
    console.log(response);
    var results = response.hits;
    for (var i = 0; i < 9; i++){
        
        var element = results[i];
        var dataFood = element.recipe;
        var title = dataFood.label;
        var img = dataFood.image;
        var txt = dataFood.healthLabels;
        var link = dataFood.url;

        console.log(link);
        var column = $("<div>");
        column.addClass("col-xs-4");
        var textnode = $("<a>");
        //favorite button
        var favBtn = $("<button>");
        favBtn.addClass("btn btn-primary favorite");
        favBtn.attr("id", "button-" + i);
        favBtn.html("<span class='glyphicon glyphicon-star'></span>");
        
        $(textnode).append(title);
        textnode.addClass("entry");
        textnode.css('background-image', 'url(' + img + ')');
        textnode.attr("href", link);
        textnode.attr("target", "_blank");
        $(column).append(textnode);
        $(column).append(favBtn);
        $("#recipe-display").append(column);
        txt.forEach(element => {
            var contains = $("<p>");
            $(contains).addClass("desc");
            $(contains).append(element + "  " + "<br>");
            //$("#recipe-display").append(contains);
            
            
        }); 
        
    }
    getVideo(search);
}});
function getVideo(term){
var api2="https://api.vimeo.com/videos?query=";
var search2= term + "%20recipe";
var key2 = "&access_token=f54cc8963e206b7972d91dd2d9c17cd8";
var vidSearch = api2 + search2 + key2;
$.ajax({url: vidSearch, success: function(response){
    console.log(response);
    for (var i =0; i< 9; i++)
    {
        var y = response.data.length;
        console.log(y);
        //var x = Math.floor(Math.random(0, y));
        var x = Math.floor(Math.random() * Math.floor(y));
        console.log(x);
        var recipex = response.data[x];
        var name = recipex.name;
        console.log(name);
        var vid = recipex.embed.html;
        $(vid).attr("height","480");
        $(vid).attr("width","720");
        console.log(vid);
       $("body").append(vid);
    }
}});
}
}
//https://api.edamam.com/search?q=chicken&app_id=165d9a3a&app_key=13ed1985dcd9cb0a99bedc7ce4a3ef80&from=0&to=3&calories=gte%20591,%20lte%20722&health=alcohol-free
