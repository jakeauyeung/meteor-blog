Template.postEdit.events({
	'submit form': function(e) {
		e.preventDefault();

		var currentPostId = this._id;

		var postProperties = {
			title: $(e.target).find('[name=title]').val(),
			content: $(e.target).find('[name=content]').val()
		}
		
		Posts.update(currentPostId, {$set: postProperties}, function(error) {
			if(error) {
				alert(error.reason);
			} else {
				Router.go('postPage', {_id: currentPostId});
			}
		});
	},

	'click .delete': function(e) {
		e.preventDefault();

		if(confirm("Delete this post?")) {
			var currentPostId = this._id;
			Posts.remove(currentPostId);
			Router.go('postsList');
		}
	},
	'keyup .md': function(e) {
		var getMDValue = $(e.target).val();
		Session.set("markdown_data",getMDValue);
	}
	
})

Template.postEdit.helpers({
	markdown_data: function() {
		return Session.get('markdown_data');
	}
})