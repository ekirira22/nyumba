import Ember from 'ember';

export default Ember.Component.extend({
  isImageShowing : false,
  actions : {
    showImage : function () {
      this.set( 'isImageShowing',true)
    },
    hideImage : function(){
      this.set('isImageShowing',false)
    },
    delete(rental) {
      if (confirm('Are you sure you want to delete this property?')){
        this.sendAction('destroyRental', rental);

      }
    }
  }

});
