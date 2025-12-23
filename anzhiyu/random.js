var posts=["2025/12/22/hexo使用入门/","2025/12/22/VSCode远程连接docker/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };