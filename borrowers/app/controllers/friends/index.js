import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {

    deleteFriend(friend)
    {
      friend.deleteRecord();
      friend.destroyRecord();
    }
  }
});
