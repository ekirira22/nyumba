import DS from 'ember-data';

export default DS.Model.extend({
  owner : DS.attr (),
  description : DS.attr (),
  area : DS.attr (),
  cost : DS.attr (),
  image : DS.attr (),
});
