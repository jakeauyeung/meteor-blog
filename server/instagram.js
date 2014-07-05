Meteor.methods({
	getInstagram: function() {
		var url = 'https://api.instagram.com/v1/users/******/media/recent/?access_token=*****************&count=300';
		this.unblock();
		try {
			var result = HTTP.call('GET', url);
			if(result.statusCode == 200) {
				var resJson = JSON.parse(result.content);
				return resJson;
			} else {
				console.log("Response issue: ", result.statusCode);
				var errorJson = JSON.parse(result.content);
				throw new Meteor.Error(result.statusCode, errorJson.error);
			}
		} catch(e) {
			console && console.log && console.log('Exception calling', url);
			throw e;
		}
	}
})