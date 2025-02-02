import { defineConfig } from "vitepress";

export default defineConfig({
  title: "新·Remember11 中文站（Beta）",
  description: "Remember11非官方中文站点",
  lang: "zh-CN",
  head: [["link", { rel: "icon", href: "/images/icon.ico" }]],
  cleanUrls: true,

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
        text: "流程指南",
        items: [
          { text: "概述", link: "/guide/概述" },
          { text: "通关游戏本体", link: "/guide/通关游戏本体" },
          { text: "阅读Tips和年表", link: "/guide/阅读Tips和年表" },
          { text: "结束", link: "/guide/结束" },
        ],
      },
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
              { text: "钟楼上的影子", link: "/posts/其他细节/钟楼上的影子" },
			  { text: "悠尼计划", link: "/posts/其他细节/悠尼计划" },
			  { text: "内海计划", link: "/posts/其他细节/内海计划" },
			  { text: "其他琐碎问题", link: "/posts/其他细节/其他琐碎问题" },
            ],
          },
		    { text: "结语", link: "/posts/结语" },
        ],
      },
      { text: "更新日志及留言板", link: "/keyboardWar/更新日志及留言板" },
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
          text: "流程指南",
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
                { text: "钟楼上的影子", link: "/posts/其他细节/钟楼上的影子" },
				{ text: "悠尼计划", link: "/posts/其他细节/悠尼计划" },
				{ text: "内海计划", link: "/posts/其他细节/内海计划" },
				{ text: "其他琐碎问题", link: "/posts/其他细节/其他琐碎问题" },
              ],
            },
			  { text: "结语", link: "/posts/结语" },
          ],
        },
      ],
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
