Accounts.registerLoginHandler(function(loginRequest) {
  if(!loginRequest.admin) {
    return undefined;
  }

  if(loginRequest.password != '密码') {
    return null;
  }
  
  var userId = null;
  var user = Meteor.users.findOne({username: '用户名'});
  if(!user) {
    userId = Meteor.users.insert({username: '用户名'});
  } else {
    userId = user._id;
  }
  return {
    userId: userId,
  }
});