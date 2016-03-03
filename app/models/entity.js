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

const {
  attr
} = DS;

export default DS.Model.extend({

  // Setup the object type for this entity
  // so that we know how to draw
  objectType: attr('number'),

  // Setup the defaults if no parameters are given
  // Type represents the collision detector's handling
  type: attr('string'),

  // Collision represents the type of collision
  // another object will receive upon colliding
  collision: attr('string'),

  // Width and Height
  width: attr('number'),
  height: attr('number'),

  // Color
  color: attr('string'),

  // Setup the positional data in 2D

  // Position
  x: attr('number'),
  y: attr('number'),

  // Velocity
  vx: attr('number'),
  vy: attr('number'),

  // Acceleration
  ax: attr('number'),
  ay: attr('number'),

  // Half size for quicker calculations
  halfWidth: computed('width', function() {
    return this.get('width') * 0.5;
  }),

  halfHeight: computed('height', function() {
    return this.get('height') * 0.5;
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
