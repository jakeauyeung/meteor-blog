Meteor.loginAsAdmin = function(password, callback) {
  //create a login request with admin: true, so our loginHandler can handle this request
  var loginRequest = {admin: true, password: password};

  //send the login request
  Accounts.callLoginMethod({
    methodArguments: [loginRequest],
    userCallback: callback
  });
};

Template.root.events({
	'submit form': function(e) {
		e.preventDefault();

		var getPassWord = $(e.target).find('[name=password]').val();

		if(getPassWord) {
			Meteor.loginAsAdmin(getPassWord);
		} else {
			alert('密码不能为空');
		}
		
	}
});