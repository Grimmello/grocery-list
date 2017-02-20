$(function (){
  $("form#groceryList").submit(function(event){
    event.preventDefault();
    var lists = ["grocery1","grocery2","grocery3","grocery4","grocery5","grocery6","grocery7"];
    var lists2 = []
    lists.forEach(function(blank){
      var userInput = $("input#" + blank).val();
      lists2.push(userInput);
    });
    lists2.sort();
    var lists3 = lists2.map(function(x){
      return x.toUpperCase();
    });
    list3.forEach(function(blank){
      $("ul#unorderedList").append("<li>"+blank+"</li>");
    });
    $(".list").show();
    console.log(upper);
  });
});
