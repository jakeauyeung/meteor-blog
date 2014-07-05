Template.postSubmit.events({
	'submit form': function(e) {
		e.preventDefault();

		var post = {
			title: $(e.target).find('[name=title]').val(),
			content: $(e.target).find('[name=content]').val()
		}

		Meteor.call('post', post, function(error, id) {
			if(error) {
				return alert(error.reason);
			}
		});
		Router.go('postsList');
	},
	'keyup .md': function(e) {
		var getMDValue = $(e.target).val();
		Session.set("markdown_data",getMDValue);
	}
});
Template.postSubmit.helpers({
	markdown_data: function() {
		return Session.get('markdown_data')
	}
})