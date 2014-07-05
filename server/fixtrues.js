if(Posts.find().count() === 0) {
	for(var i = 0;i < 70;i++){
	Posts.insert({
		title: '初始化的时候我们的标题应该需要有一点内容',
		author: '狮子',
		submitted: '2014-12-22 8:00',
		content: '不过等等，路由器到底如何准确地知道从 /posts/xyz 中的哪个位置去获得 xyz 路径？毕竟，我们没有传递任何的 _id 给它。事实证明，Iron Router 是足够聪明地自己去发现它。我们告诉路由器使用 postPage 路线，而路由器知道这条路线的某些地方需要使用 _id （因为这是我们定义 path 的办法）。因此，路由器将会在最符合逻辑的地方寻找这个 _id ： Helper 中的数据源，或者说 this 。恰巧我们的 this 对应一个帖子，它就是我们要寻找的拥有 _id 属性的地方。' 
	});
	}
}