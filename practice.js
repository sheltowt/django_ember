function new(thing1, thing2){
	return thing1 + thing2;
}

{{#if person}}
  Welcome back, <b>{{person.firstName}} {{person.lastName}}</b>!
{{else}}
  Please log in.
{{/if}}


{{#unless hasPaid}}
  You owe: ${{total}}
{{/unless}}


window.App = Ember.Application.create();

Ember.View.reopen({
  init: function() {
    this._super();
    var self = this;

    // bind attributes beginning with 'data-'
    Em.keys(this).forEach(function(key) {
      if (key.substr(0, 5) === 'data-') {
        self.get('attributeBindings').pushObject(key);
      }
    });
  }
});

App.Router.map(function() {
  this.resource('posts', function() {
    this.route('new');
  });
});

App.Router.map(function() {
  this.resource('post', { path: '/post/:post_id' }, function() {
    this.route('edit');
    this.resource('comments', function() {
      this.route('new');
    });
  });
});