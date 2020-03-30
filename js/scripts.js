$(document).ready(function() {
  $("form#deck").submit(function(event) {
    event.preventDefault();
    var suits = ["of spades", "of hearts", "of diamonds", "of clubs"];
    var number = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"];
    suits.forEach(function(deck){
     $('.output').append("<li>" + deck + "</li>");
    });
  });
});