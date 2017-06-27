Template.haircare.helpers({
  hairline() {return Hair.find()},
  productlist() {return Products.find()}
})


Template.haircare.events({
  'click button' (element, instance) {
    const name = instance.$('#name').val();
    const type = $("#ptype :selected").text();
    const brand = instance.$('#brand').val();

    instance.$('#name').val("");
    instance.$('#brand').val("");
    if (name != "" || brand != "") {
      console.log('adding '+name);
      var prod =
        {
          Type:type,Brand:brand,Name:name
        };
      Meteor.call('Products.insert',prod);
    } else {
      console.log('Invalid Entry...field is blank?');
    }

  }
})

Template.haircare.events({
  'click span'(element, instance) {
  console.log(this.prod._id);
  var prodID = this.prod._id

  Meteor.call('Products.remove',prodID);
  //Products.remove(this.prod._id);
  }
})
