import Ember from 'ember';

const {
  computed,
  inject
} = Ember;

const STOPPED = 0;

export default Ember.Component.extend({
  gameState: STOPPED,
  tagName: 'svg',
  scale: 40,
  screensize: inject.service(),
  _width: computed.alias('screensize.width'),
  _height: computed.alias('screensize.height'),
  attributeBindings: ['width', 'height'],
  classNames: ['breakout-board'],
  width: computed( 'scale', '_width', function() {
    return this.get('_width');
  }),
  height: computed( 'scale', '_height', function() {
    return this.get('_height');
  })
});
