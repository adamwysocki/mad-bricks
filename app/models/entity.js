//
// Entity.js
//
// An entity is a brick, paddle, projectile, prize, ball, or wall (top, left, right)
//

import DS from 'ember-data';
import Ember from 'ember';

const {
  computed
} = Ember;

export default DS.Model.extend({

  // Setup the object type for this entity
  // so that we know how to draw and apply physics
  objectType: DS.attr('number'),

  // Setup the defaults if no parameters are given
  // Type represents the collision detector's handling
  type: DS.attr('string'),

  // Collision represents the type of collision
  // another object will receive upon colliding
  collision: DS.attr('string'),

  // Width and Height
  width: DS.attr('number'),
  height: DS.attr('number'),

  // Setup the positional data in 2D

  // Position
  x: DS.attr('number'),
  y: DS.attr('number'),

  // Velocity
  vx: DS.attr('number'),
  vy: DS.attr('number'),

  // Acceleration
  ax: DS.attr('number'),
  ay: DS.attr('number'),

  // Half size for quicker calculations
  halfWidth: computed('width', function() {
    return this.get('width') * 0.05;
  }),

  halfHeight: computed('height', function() {
    return this.get('height') * 0.05;
  }),

  // Getters for the mid point of the rect
  midX: computed('width', 'x', function() {
     return this.get('halfWidth') + this.get('x');
  }),

  midY: computed('height', 'y', function() {
     return this.get('halfHeight') + this.get('y');
  }),

  // Getters for the top, left, right, and bottom
  // of the rectangle
  top: computed('y', function() {
      return this.get('y');
  }),

  left: computed('x', function() {
      return this.get('x');
  }),

  right: computed('x', 'width', function() {
      return this.get('x') + this.get('width');
  }),

  bottom: computed('y', 'height', function() {
      return this.get('y') + this.get('height');
  })

});
