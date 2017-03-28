import Ember from 'ember';

export default Ember.Component.extend({
  addNewRental : false,
  actions : {
    rentalForm : function(){
      this.set('addNewRental', true);
    },
    hideForm : function(){
      this.set('addNewRental', false);
    },
    saveRental1() {
     var params = {
       owner: this.get('owner'),
       area: this.get('area'),
       description: this.get('description'),
       image: this.get('image'),
       cost: this.get('cost'),
     };
     this.set('addNewRental', false);
     this.sendAction('saveRental2', params);
   }
  }
});
