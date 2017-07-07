import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
  delete(article) {
    article.deleteRecord();
    article.save();
    
  }
}
});
