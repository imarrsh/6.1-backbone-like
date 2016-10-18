var _ = require('underscore');
var Backbone = require('backbone');

// extend Backbone.Model
var Like = Backbone.Model.extend({
  defaults : {
    'likes' : 0,
    'verb': 'Likes'
  },
  // define own initialize function
  initialize : function(){
    console.log('Like Instantiated!');
  },
  // method to update 'likes'
  like: function(){
    var currentLikes = this.get('likes');
    this.set('likes', currentLikes + 1);
    this.pluralize();
  },
  pluralize: function(){
    var likes = this.get('likes');
    if(likes === 1){
      this.set('verb', 'Like');
    } else {
      this.set('verb' , 'Likes');
    }
  }
});

// check likes count and pluralize 'Like' text
// not sure of the advantage of using toJSON in this
// particular context? Played around with this, but
// perhaps my google-foo wasn't on point
Like.prototype.toJSON = function(){
  // call in the og toJSON method from Backbone
  var json = Backbone.Model.prototype.toJSON.call(this);
  // will return a new object with the
  // like or likes property, but not sure
  // how to return that and restore the
  // normal toJSON functionality
  if(this.get('likes') === 1){
    return {
      'like': this.get('likes')
    };
  } else {
    return {
      'likes' : this.get('likes')
    };
  }
};

module.exports = {
  'Like' : Like
};
