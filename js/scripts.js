$(document).ready(function() {
  $("form#deck").submit(function(event) {
    event.preventDefault();
    var cards = ['ace of spades', '2 of clubs', '3 of clubs'];
    cards.forEach(function(deck){
     $('.output').append("<li>" + deck + "</li>");
    });
  });
});