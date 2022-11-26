export default [
  { text: "首页", link: "/" },
  {
    text: "前端笔记",
    link: "/web/", //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
    items: [
      {
        text: "前端随笔",
        items: [{ text: "React", link: "/pages/60bfcb/" }],
      },
      {
        text: "系列文章",
        items: [
          { text: "《ES6 教程》笔记", link: "/note/es6/" },
          { text: "《Vue》笔记", link: "/note/vue/" },
          { text: "《TypeScript》笔记", link: "/note/ts/" },
        ],
      },
    ],
  },
  {
    text: "后端笔记",
    link: "/backend/",
    items: [
      {
        text: "后端文章",
        items: [
          { text: "Java", link: "/pages/36b96c/" },
          { text: "Python", link: "/pages/8964ae/" },
          { text: "数据库", link: "/pages/16ab31/" },
        ],
      },
      {
        text: "学习笔记",
        items: [
          { text: "《Rust》笔记", link: "/note/rust/" },
          { text: "《SpringBoot》笔记", link: "/note/springboot/" },
          { text: "《Django》笔记", link: "/note/django/" },
          { text: "《Docker》笔记", link: "/note/docker/" },
          { text: "《Python爬虫》笔记", link: "/note/spider/" },
        ],
      },
    ],
  },
  {
    text: "技术分享",
    link: "/technology/",
    items: [
      // { text: "面试", link: "/pages/d569d0/" },
      // { text: "分享", link: "/note/share/" },
    ],
  },
  { text: "友情链接", link: "/friends/" },
  {
    text: "索引",
    link: "/archives/",
    // items: [
    //   { text: '归档', link: '/archives/' },
    // ]
  },
  { text: "关于", link: "/about/" },
  // { text: '分类', link: '/categories/' },
  // { text: '标签', link: '/tags/' },
];
