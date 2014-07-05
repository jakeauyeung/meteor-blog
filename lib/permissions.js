// 检查用户权限问题
ownsDocument = function(userId, doc) {
	return doc && doc.userId === userId;
}