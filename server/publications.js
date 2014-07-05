Meteor.publish('posts', function(limit) {
	return Posts.find({}, {sort: {submitted: -1}, limit: limit});
});
Meteor.publish('sites', function() {
	return Sites.find();
});