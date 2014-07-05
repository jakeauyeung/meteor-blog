Sites = new Meteor.Collection('sites');

// 添加更新，删除功能权限
Sites.allow({
	update: ownsDocument,
	remove: ownsDocument
});

// 以确保用户只能编辑特定的字段
Sites.deny({
	update: function(userId, site, fieldNames) {
		return (_.without(fieldNames, 'url', 'author', 'content').length > 0);
	}
});

// 插入记录
Meteor.methods({
	site: function(postAttributes) {
		var user = Meteor.user();

		if(!user) {
			throw new Meteor.Error(401, "骚年，你真的确定登录了吗？");
		}

		Date.prototype.Format = function(fmt) {
		    var o = {   
		      "M+" : this.getMonth()+1,                 //月份   
		      "d+" : this.getDate(),                    //日   
		      "h+" : this.getHours(),                   //小时   
		      "m+" : this.getMinutes(),                 //分   
		      "s+" : this.getSeconds(),                 //秒   
		      "q+" : Math.floor((this.getMonth()+3)/3), //季度   
		      "S"  : this.getMilliseconds()             //毫秒   
		    };   
		    if(/(y+)/.test(fmt))
		      fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length));
		    for(var k in o)
		      if(new RegExp("("+ k +")").test(fmt))
		    fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));
		    return fmt; 
		  }

		var currentTime = new Date().Format("yyyy-MM-dd hh:mm:ss");

		var site = _.extend(_.pick(postAttributes, 'author', 'url', 'content'), {
			url: postAttributes.url,
			author: postAttributes.author,
			content: postAttributes.content,
			userId: user._id,
			submitted: currentTime
		});
		var siteId = Sites.insert(site);
		return siteId;
	}
});