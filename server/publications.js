// Meteor.publish('hair',function(){
//   return Hair.find();
// })

Meteor.publish('products',function(){
  return Products.find();
})

Meteor.publish('feedback',function(){
  return Feedback.find();
})
