Meteor.Blog
===============
基于meteor开发的个人网站,包含博客系统

![此处输入图片的描述][1]
  [1]: http://jakeauyeung.qiniudn.com/meteor-blog.png
  [2]: http://jakeauyeung.com

  预览：[JAKEAUYEUNG][2]

####博客

 1. 支持后台管理 http://demo.com/root,后台管理配置管理员 server/admin.js
 2. 支持markdown写文章，并且及时预览
 3. 支持多说评论功能 配置文件/client/application/layout.html
 4. 支持编辑，修改，删除文章


####其他

 1. instagram 配置API server/instagram.js
 2. aboutme client/aboutme
 3. meteorjs client/meteor 支持添加（当用户登录）


####启动服务

```
npm install -g meteoritr
npm install -g forever
git clone https://github.com/jakeauyeung/meteor-blog.git
cd meteor-blog
mrt
```


####外接mongodb服务
```
meteor bundle ../../bundle.tgz
tar zxvf bundle.tgz
PORT=3000 MONGO_URL=mongodb://localhost:27017/blog ROOT_URL=http://demo.com forever start bundle/main.js
```

