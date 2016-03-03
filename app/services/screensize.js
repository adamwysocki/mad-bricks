import Ember from 'ember';

const {
  computed,
  $
} = Ember;

export default Ember.Service.extend({
  _height: 0,
  _width: 0,

  initialize: function() {
    this.captureResize();
    $(window).on('resize', Ember.run.bind(this, this.captureResize));
    this._super();
  }.on('init'),

  height: computed('_height', function() {
    return this.get('_height');
  }),

  width: computed('_width', function() {
    return this.get('_width');
  }),

  captureResize: function() {
    let width = 0, height = 0;

    width   = $(window).width();
    height  = $(window).height();

    this.set('_height', height);
    this.set('_width', width);
  }

});
