Template.layout.events({
	'click .icon-open': function(e) {
		e.preventDefault();
		$(e.target).parents('.navbar').find('.navbar-inner-blog').toggleClass('open');
	}
});