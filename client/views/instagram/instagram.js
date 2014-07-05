Template.instagram.helpers({
	instagramData: function() {
		Meteor.call('getInstagram',function(err, result) {
			if(err) {
				alert('Error:' + err.message);
			} else {
				Session.set('instagram',result.data);
			}
		});
		return Session.get('instagram');
	}
})


