module.exports = [
  { text: '首页', link: '/' },
  {
    text: '前端',
    link: '/web/',  //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
    items: [

      {
        text: '前端文章', items: [
          //{text: 'JavaScript', link: '/pages/8143cc480faf9a11/'}, // 这些link是在相应md文件定义的永久链接。另外，注意结尾是有斜杠的
          { text: 'React', link: '/pages/60bfcb/' },
        ]
      },
      {
        text: '学习笔记', items: [
          // {text: '《JavaScript教程》笔记', link: '/note/javascript/'},
          { text: '《JavaScript高级程序设计》笔记', link: '/note/js/' },
          { text: '《ES6 教程》笔记', link: '/note/es6/' },
          {text: '《Vue》笔记', link: '/note/vue/'},
          // {text: '《TypeScript 从零实现 axios》', link: '/note/typescript-axios/'},
          // {text: '小程序笔记', link: '/note/wx-miniprogram/'},
        ]
      }
    ]
  },
  {
    text: '后端',
    link: '/backend/',
    items: [
      { text: 'Java', link: '/pages/36b96c/' },
      { text: 'Python', link: '/pages/8964ae/' },
	  { text: 'Go', link: '/pages/da9255/' },
      { text: '数据库', link: '/pages/16ab31/' },
      { text: 'SpringCloud', link: '/pages/f299ef/' },
	  
    ]
  },
  {
    text: '技术',
    link: '/technology/',
    items: [
      { text: '面试', link: '/pages/d569d0/' },
      { text: '分享', link: '/pages/524963/' },
    ]
  },
  // {
  //   text: '更多', 
  //   link: '/more/',
  //   items: [
  //     {text: '学习', link: '/pages/f2a556/'},
  //     {text: '面试', link: '/pages/aea6571b7a8bae86/'},
  //     {text: '心情杂货', link: '/pages/2d615df9a36a98ed/'},
  //     {text: '友情链接', link: '/friends/'},
  //   ]
  // },
  // {
  //   text: '收藏',
  //   link: '/pages/beb6c0bd8a66cea6/',
  //   items: [
  //     {text: '网站', link: '/pages/beb6c0bd8a66cea6/'},
  //   ]
  // },
  { text: '友情链接', link: '/friends/' },
  {
    text: '索引',
    link: '/archives/',
    // items: [
    //   { text: '归档', link: '/archives/' },
    // ]
  },
  { text: '关于', link: '/about/' },
  // { text: '分类', link: '/categories/' },
  // { text: '标签', link: '/tags/' },
]
