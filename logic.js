// api url
var filters = [];
$( ".filter" ).each(function( item ) {
    var f = $(this).data("filter");
    filters.push(f);
  });
console.log(filters);

var recipe = "https://api.edamam.com/search?q=";
var search = "chicken";
var key = "&app_id=165d9a3a&app_key=13ed1985dcd9cb0a99bedc7ce4a3ef80";
// combine all strings in filters into var nut
var nut = "";
$(filters).each(function (item){
    $(this).text
});
//console.log(nut);
var urlSearch = recipe + search + key;
console.log(urlSearch);
$.ajax({url: urlSearch, success: function(result){
    console.log(result);
}});

  //https://api.edamam.com/search?q=chicken&app_id=165d9a3a&app_key=13ed1985dcd9cb0a99bedc7ce4a3ef80&from=0&to=3&calories=gte%20591,%20lte%20722&health=alcohol-free