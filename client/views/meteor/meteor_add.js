Template.postSite.events({
	'submit form': function(e) {
		e.preventDefault();

		var post = {
			author: $(e.target).find('[name=author]').val(), 
			url: $(e.target).find('[name=url]').val(), 
			content: $(e.target).find('[name=content]').val()
		}
		Meteor.call('site', post, function(error, id) {
			if(error) {
				return alert(error.reason);
			}
		});
		Router.go('meteor');
	}
});