// api url
var nut = "";
$( ".filter" ).each(function(item) {
    var box = $(this);
    var m = $(this.val);
    console.log(m);
    if (box.checked){
        var f = box.data("health");
        nut += "&health=" + f;
        filters.push(nut);
    }
   
  });
console.log(nut);

var search = "chicken";
var api = "https://api.edamam.com/search?q=";
var key = "&app_id=165d9a3a&app_key=13ed1985dcd9cb0a99bedc7ce4a3ef80";
var urlSearch = api + search + key;
console.log(urlSearch);
$.ajax({url: urlSearch, success: function(result){
    console.log(result);
}});

//https://api.edamam.com/search?q=chicken&app_id=165d9a3a&app_key=13ed1985dcd9cb0a99bedc7ce4a3ef80&from=0&to=3&calories=gte%20591,%20lte%20722&health=alcohol-free