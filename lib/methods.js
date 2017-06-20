Meteor.methods({
  'Products.insert'(prod) {
    Products.insert(prod);
  },
  
    'Products.remove'(prodID) {
      Products.remove(prodID);
    }
});
