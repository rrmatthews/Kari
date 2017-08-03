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

  'Feedback.update'(info) {
    //updating the name
    console.log("okay" + info.Name);
    if (Feedback.findOne({'name':feed.Name})) {
      Feedback.update({'name':feed.Name}, {
        $set: { Name:name }
      });
    } else {
      Meteor.call('Feedback.insert',info);
    }
  },
});
