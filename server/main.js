import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
  Songs.remove({});  // clear the database
  Songs.insert({Title:'Antidote',Artist:'Travis Scott'});
  Songs.insert({Title:'The Waters',Artist:'Mick Jenkins'});

  Hair.remove({});  // clear the database
  Hair.insert({Looking:'Codnditioner',Type:'4C'});
});
