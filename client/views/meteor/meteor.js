Template.meteor.helpers({
  sites: function() {
  	// var data = [{"author":"jakeauyeung","url": "http://www.baidu.com", "content":"baidu"},{"author":"jakeauyeung","url": "http://www.baidu.com", "content":"baidu"}];
    return Sites.find({}, {sort: {submitted: -1}});
  }
});