import { moduleForModel, test } from 'ember-qunit';

const width = 60, height = 20, x = 400, y = 100;

moduleForModel('entity', 'Unit | Model | entity', {
  // Specify the other units that are required for this test.
  needs: ['model:entity']
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});

test('halfWidth works', function(assert) {
  const entity = this.subject({width: width, height: height, x: x, y: y});
  assert.equal(entity.get('halfWidth'), width * 0.5);
});

test('halfHeight works', function(assert) {
  const entity = this.subject({width: width, height: height, x: x, y: y});
  assert.equal(entity.get('halfHeight'), height * 0.5);
});

test('midX works', function(assert) {
  const entity = this.subject({width: width, height: height, x: x, y: y});
  assert.equal(entity.get('midX'), width * 0.5 + x);
});

test('midY works', function(assert) {
  const entity = this.subject({width: width, height: height, x: x, y: y});
  assert.equal(entity.get('midY'), height * 0.5 + y);
});

test('top works', function(assert) {
  const entity = this.subject({width: width, height: height, x: x, y: y});
  assert.equal(entity.get('top'), y);
});

test('left works', function(assert) {
  const entity = this.subject({width: width, height: height, x: x, y: y});
  assert.equal(entity.get('left'), x);
});

test('right works', function(assert) {
  const entity = this.subject({width: width, height: height, x: x, y: y});
  assert.equal(entity.get('right'), x + width);
});

test('bottom works', function(assert) {
  const entity = this.subject({width: width, height: height, x: x, y: y});
  assert.equal(entity.get('bottom'), y + height);
});
