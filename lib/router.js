Router.configure({layoutTemplate: 'layout',})
//Router.route('home');
Router.route('about');
Router.route('haircare');
Router.route('', {name: 'home'});
Router.route('hairstyles');
Router.route('feedback');
Router.route('product/:_id',
{name:"product",
 data: function(){
	 const c = Products.findOne(this.prod._id);
	 return c;
 }});
