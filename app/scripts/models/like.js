var _ = require('underscore');
var Backbone = require('backbone');

// extend Backbone.Model
var Like = Backbone.Model.extend({
  defaults : {
    likes : 0
  },
  // define own initialize function
  initialize : function(){
    console.log('Like Instantiated!');
  },
  like : function(){
    var currentLikes = this.get('likes');
    this.set('likes', currentLikes + 1);
  }
});

module.exports = {
  'Like' : Like
};
