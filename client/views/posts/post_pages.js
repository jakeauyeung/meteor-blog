Template.postItemDes.events({
	'click .showcomment': function(e) {
		e.preventDefault();
		var getComment = $(e.target).parents('.detail').find('.ds-thread');
		getComment.show();
		DUOSHUO.EmbedThread('.ds-thread');
		$(e.target).hide();
	}
})