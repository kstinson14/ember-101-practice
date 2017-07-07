import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    show(model){
      this.get('model').deleteRecord();
      model.deleteRecord();

    }
  }
});
