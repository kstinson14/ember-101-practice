import Ember from 'ember';

export default Ember.Component.extend({
  isValid: Ember.computed(
    'model.email',
    'model.firstName',
    'model.lastName',
    'model.twitter',
    {
      get() {
        return !Ember.isEmpty(this.get('model.email')) && !Ember.isEmpty(this.get('model.firstName')) && !Ember.isEmpty(this.get('model.lastName')) && !Ember.isEmpty(this.get('model.twitter'));

      }
    }
  ),
  actions: {
    save() {
      console.log('+= save action in edit-form component');
      if (this.get('isValid'))
      {
        this.get('model').save().then((friend) =>{
          return this.save(friend);
        }, (err) => {
          this.set('errorMessage', 'There was something wrong saving the model');
        });
      }
      else {
        this.set('errorMessage', 'You have to fill all the fields.')
      }
    },
    cancel() {
      console.log('+- cancel action in edit-form component');
      this.cancel();
    }
  }
});
