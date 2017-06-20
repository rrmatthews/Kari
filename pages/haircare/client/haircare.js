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
      Products.insert({Type:type,Brand:brand,Name:name});
    } else {
      console.log('Invalid Entry...field is blank?');
    }

  }
})

Template.haircare.events({
  'click span'(element, instance) {
  console.log(this.prod._id);
  Products.remove(this.prod._id);
  }
})
