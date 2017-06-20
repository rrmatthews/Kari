import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup

  Hair.remove({});  // clear the database
  Hair.insert({Looking:'Conditioner',Type:'1'});

  Products.remove({});  // clear the database
  Products.insert({Name:'Coconut Milk Anti-Breakage Serum',Type:'Product',Brand:'OGX'});
});
