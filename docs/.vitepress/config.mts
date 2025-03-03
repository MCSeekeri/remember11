import { defineConfig } from "vitepress";

export default defineConfig({
  title: "Remember11 中文专题站",
  description: "一站式的《Remember11》体验导航",
  lang: "zh-CN",
  head: [
    ["link", { rel: "icon", href: "/images/icon.ico" }],
    [
      "noscript",
      {},
      `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PGPK66PF"
      height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
    ],
    [
      "script",
      {},
      `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-PGPK66PF');`
    ]
  ],
  cleanUrls: true,
  sitemap: {
    hostname: "https://remember11.com",
  },

  themeConfig: {
    logo: "/images/icon.ico",
    nav: [
      {
        text: "简介",
        items: [
          { text: "概述", link: "/begin/概述" },
          { text: "如何使用网站", link: "/begin/如何使用网站" },
          { text: "关于我们", link: "/begin/关于我们" },
        ],
      },
      {
        text: "游玩指南",
        items: [
          { text: "概述", link: "/guide/概述" },
          { text: "通关游戏本体", link: "/guide/通关游戏本体" },
          { text: "阅读Tips和年表", link: "/guide/阅读Tips和年表" },
          { text: "结束", link: "/guide/结束" },
        ],
      },
      { text: "剧情解析（剧透）", link: "/posts/概述" },
      {
        text: "游戏资料",
        items: [
          { text: "概述", link: "/data/概述" },
          {
            text: "游戏攻略",
            items: [
              { text: "快速通关攻略", link: "/data/游戏攻略/快速通关攻略" },
              { text: "全Tips收集攻略", link: "/data/游戏攻略/全Tips收集攻略" },
              { text: "详细解析攻略", link: "/data/游戏攻略/详细解析攻略" },
            ],
          },
          {
            text: "剧情资料",
            items: [
              { text: "全Tips一览", link: "/data/剧情资料/全Tips一览" },
              { text: "游戏年表", link: "/data/剧情资料/游戏年表" },
              { text: "广播剧系列", link: "/data/剧情资料/广播剧系列" },
            ],
          },
          {
            text: "相关采访",
            items: [
              {
                text: "(2004)Message From 声优口白系列",
                link: "/data/相关采访/(2004)Message From 声优口白系列",
              },
              {
                text: "(2020)MAGES同前KID员工进行的特别访谈",
                link: "/data/相关采访/(2020)MAGES同前KID员工进行的特别访谈",
              },
            ],
          },
        ],
      },
      {
        text: "游戏资源",
        items: [
          { text: "概述", link: "/resource/概述" },
          { text: "本体资源", link: "/resource/游戏资源" },
          {
            text: "游戏解包",
            items: [
              { text: "全CG解包", link: "/resource/游戏解包/全CG解包" },
              { text: "全文本解包", link: "/resource/游戏解包/全文本解包" },
            ],
          },
          { text: "游戏设定集", link: "/resource/游戏设定集" },
        ],
      },
      { text: "回到旧版", link: "https://legacy.remember11.com/" },
    ],

    sidebar: {
      "/begin/": [
        {
          text: "简介",
          items: [
            { text: "概述", link: "/begin/概述" },
            { text: "如何使用网站", link: "/begin/如何使用网站" },
            { text: "关于我们", link: "/begin/关于我们" },
          ],
        },
      ],
      "/guide/": [
        {
          text: "游玩指南",
          items: [
            { text: "概述", link: "/guide/概述" },
            { text: "通关游戏本体", link: "/guide/通关游戏本体" },
            { text: "阅读Tips和年表", link: "/guide/阅读Tips和年表" },
            { text: "结束", link: "/guide/结束" },
          ],
        },
      ],
      "/posts/": [
        {
          text: "剧情解析",
          items: [
            { text: "概述", link: "/posts/概述" },
            {
              text: "转移现象",
              items: [
                {
                  text: "第三人格和第三地点",
                  link: "/posts/转移现象/第三人格和第三地点",
                },
                {
                  text: "犬伏景子和凉荫穗鸟",
                  link: "/posts/转移现象/犬伏景子和凉荫穗鸟",
                },
                {
                  text: "阿尔法和欧米茄",
                  link: "/posts/转移现象/阿尔法和欧米茄",
                },
                {
                  text: "7日之中交错的轨迹",
                  link: "/posts/转移现象/7日之中交错的轨迹",
                },
              ],
            },
            {
              text: "隐藏故事",
              items: [
                {
                  text: "悟，榎本，以及“我”",
                  link: "/posts/隐藏故事/悟，榎本，以及“我”",
                },
                { text: "Self在哪里", link: "/posts/隐藏故事/Self在哪里" },
                { text: "优希堂沙也香", link: "/posts/隐藏故事/优希堂沙也香" },
                { text: "优希堂计划", link: "/posts/隐藏故事/优希堂计划" },
              ],
            },
            {
              text: "未完篇章",
              items: [
                {
                  text: "Self的心理学隐喻",
                  link: "/posts/未完篇章/Self的心理学隐喻",
                },
                { text: "丢失的Self篇", link: "/posts/未完篇章/丢失的Self篇" },
              ],
            },
            {
              text: "其他细节",
              items: [
                {
                  text: "钟楼上的影子与Self不存在论",
                  link: "/posts/其他细节/钟楼上的影子与Self不存在论",
                },
                { text: "悠尼计划", link: "/posts/其他细节/悠尼计划" },
                { text: "内海计划", link: "/posts/其他细节/内海计划" },
                { text: "其他琐碎问题", link: "/posts/其他细节/其他琐碎问题" },
              ],
            },
            { text: "结语", link: "/posts/结语" },
          ],
        },
      ],
      "/data/": [
        {
          text: "游戏资料",
          items: [
            { text: "概述", link: "/data/概述" },
            {
              text: "游戏攻略",
              items: [
                { text: "快速通关攻略", link: "/data/游戏攻略/快速通关攻略" },
                {
                  text: "全Tips收集攻略",
                  link: "/data/游戏攻略/全Tips收集攻略",
                },
                { text: "详细解析攻略", link: "/data/游戏攻略/详细解析攻略" },
              ],
            },
            {
              text: "剧情资料",
              items: [
                { text: "全Tips一览", link: "/data/剧情资料/全Tips一览" },
                { text: "游戏年表", link: "/data/剧情资料/游戏年表" },
                { text: "广播剧系列", link: "/data/剧情资料/广播剧系列" },
              ],
            },
            {
              text: "相关采访",
              items: [
                {
                  text: "(2004)Message From 声优口白系列",
                  link: "/data/相关采访/(2004)Message From 声优口白系列",
                },
                {
                  text: "(2020)MAGES同前KID员工进行的特别访谈",
                  link: "/data/相关采访/(2020)MAGES同前KID员工进行的特别访谈",
                },
              ],
            },
          ],
        },
      ],
      "/resource/": [
        {
          text: "游戏资源",
          items: [
            { text: "概述", link: "/resource/概述" },
            { text: "本体资源", link: "/resource/游戏资源" },
            {
              text: "游戏解包",
              items: [
                { text: "全CG解包", link: "/resource/游戏解包/全CG解包" },
                { text: "全文本解包", link: "/resource/游戏解包/全文本解包" },
              ],
            },
            { text: "游戏设定集", link: "/resource/游戏设定集" },
          ],
        },
      ],
    },

    search: {
      provider: "local",
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: "请小心搜索，谨防剧透",
              },
              modal: {
                noResultsText: "无法找到相关结果",
                resetButtonTitle: "清除查询条件",
                footer: {
                  selectText: "选择",
                  navigateText: "切换",
                  closeText: "关闭",
                },
              },
            },
          },
        },
      },
    },

    editLink: {
      pattern: "https://github.com/MCSeekeri/remember11/edit/main/docs/:path",
      text: "在 GitHub 上编辑此页面",
    },

    // footer: {
    //   message:
    //     '<a href="https://beian.miit.gov.cn/">鲁ICP备2021039368号</a><img src="https://www.beian.gov.cn/img/new/gongan.png" alt="公安徽章" style="display: inline;"><a href="https://www.beian.gov.cn/portal/registerSystemInfo">37160202000626</a>',
    // },

    docFooter: {
      prev: "上一页",
      next: "下一页",
    },

    outline: {
      label: "页面导航",
    },

    lastUpdated: {
      text: "最后更新于",
      formatOptions: {
        dateStyle: "short",
        timeStyle: "medium",
      },
    },

    langMenuLabel: "多语言",
    returnToTopLabel: "回到顶部",
    sidebarMenuLabel: "菜单",
    darkModeSwitchLabel: "主题",
    lightModeSwitchTitle: "切换到浅色模式",
    darkModeSwitchTitle: "切换到深色模式",
    skipToContentLabel: "跳转到内容",
  },
});
