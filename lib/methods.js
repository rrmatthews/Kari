Meteor.methods({
  'Products.insert'(prod) {
    Products.insert(prod);
  },

  'Products.remove'(prodID) {
    Products.remove(prodID);
  },

  'Products.sort'(sortByType) {
    Products.find(sortByType);
  },

  'Feedback.insert'(info) {
    Feedback.insert(info);
  },

  'Feedback.remove'(feedID) {
    Feedback.remove(feedID);
  },
});
