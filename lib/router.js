Router.configure({
	layoutTemplate: 'layout',
	loadingTemplate: 'loading',
	notFoundTemplate: 'notFound'
	// waitOn: function() { return Meteor.subscribe('posts')}
});

Router.map(function() {
	// 博客列表首页
	this.route('postsList', {
		path: '/',
		onBeforeAction: function() {
			var getHoverParent = $('html,body').find('.navbar-inner-blog').find('ul>li');
			$.each(getHoverParent, function(index) {
				if(index == 0) {
					$(getHoverParent[index]).find('a').addClass('cur');
				} else {
					$(getHoverParent[index]).find('a').removeClass('cur');
				}
			});
		}
	});
	// instagram
	this.route('instagram', {
		path: '/instagram',
		onBeforeAction: function() {
			var getHoverParent = $('html,body').find('.navbar-inner-blog').find('ul>li');
			$.each(getHoverParent, function(index) {
				if(index == 1) {
					$(getHoverParent[index]).find('a').addClass('cur');
				} else {
					$(getHoverParent[index]).find('a').removeClass('cur');
				}
			});
		}
	});
	// about me
	this.route('aboutme', {
		path: '/aboutme',
		onBeforeAction: function() {
			var getHoverParent = $('html,body').find('.navbar-inner-blog').find('ul>li');
			$.each(getHoverParent, function(index) {
				if(index == 2) {
					$(getHoverParent[index]).find('a').addClass('cur');
				} else {
					$(getHoverParent[index]).find('a').removeClass('cur');
				}
			});
		}
	});
	// meteorjs
	this.route('meteor', {
		path: '/meteor',
		waitOn: function() { return Meteor.subscribe('sites')},
		onBeforeAction: function() {
			var getHoverParent = $('html,body').find('.navbar-inner-blog').find('ul>li');
			$.each(getHoverParent, function(index) {
				if(index == 3) {
					$(getHoverParent[index]).find('a').addClass('cur');
				} else {
					$(getHoverParent[index]).find('a').removeClass('cur');
				}
			});
		}
	});
	// meteorjs提交修改
	this.route('postSite', {
		path: '/postSite',
		waitOn: function() { return Meteor.subscribe('sites')},
		onBeforeAction: function(pause) {
			if(! Meteor.user()) {
				if(Meteor.loggingIn()) {
					this.render(this.loadingTemplate);
				} else {
					this.render('accessDenied');
				}
				pause();
			}
		}
	});
	// 管理登录
	this.route('root', {
		path: '/root',
		onBeforeAction: function(pause) {
			if(Meteor.user()) {
				Router.go('/');
			}
		}
	});
	// 文章详情
	this.route('postPage', {
		path: '/posts/:_id',
		data: function() {return Posts.findOne(this.params._id); }
	});
	// 编辑文章
	this.route('postEdit', {
		path: '/posts/:_id/edit',
		data: function() {return Posts.findOne(this.params._id);},
		onBeforeAction: function(pause) {
			if(! Meteor.user()) {
				if(Meteor.loggingIn()) {
					this.render(this.loadingTemplate);
				} else {
					this.render('accessDenied');
				}
				pause();
			}
		}
	});
	// 提交修改
	this.route('postSubmit', {
		path: '/submit',
		onBeforeAction: function(pause) {
			if(! Meteor.user()) {
				if(Meteor.loggingIn()) {
					this.render(this.loadingTemplate);
				} else {
					this.render('accessDenied');
				}
				pause();
			}
		}
	});
	// 公交卡查询
	this.route('gongjiaoka', {
		path: '/gongjiaoka'
	});
});

