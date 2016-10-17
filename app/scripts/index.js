var jQuery = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
// require our model
var Like = require('./models/like').Like;


// wait for DOM to be ready IIFE
(function($){
  // new Like instance
  var likeButton = new Like();
  // get the DOM element we want to update
  var $likeCounter = $('.js-like-count');
  // get the initial value of 'likes'
  $likeCounter.text(likeButton.get('likes'));

  $('#like-me').on('click', function(){
    // call like method to update the model
    likeButton.like();
    // save new 'likes' count to a variable
    var likeCount = likeButton.get('likes');
    // console log some ish
    console.log('liked: current likes =', likeCount);
    // update the DOM element
    $likeCounter.text(likeCount);

  });

}(jQuery));
