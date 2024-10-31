import { defineConfig } from 'dumi';
import { defineThemeConfig } from 'dumi-theme-antd/dist/defineThemeConfig';


export default defineConfig({
  outputPath: 'docs-dist',
  resolve: {
    // 配置入口文件路径，API 解析将从这里开始
    entryFile: './src/index.ts',
    atomDirs: [
      {type: 'components', dir: './src/components'},
      {type: 'hooks', dir: './src/hooks'},
    ]
  },
  apiParser: {},
  themeConfig: defineThemeConfig({
      name: 'Sword Design Tools',
      title: 'Sword Design Tools',
      lastUpdated: true,
      bannerConfig: {
        showBanner: false
      },
      github: 'https://github.com/',
      description: '轩辕天书出品的营销工具组件库',
      actions: [
        { type: 'primary', text: '开始使用', link: '/guide/home' },
        { type: 'default', text: 'Github', link: 'https://github.com/' }
      ],
      docVersions: {
        '0.0.2': '',
      },
      nav: [
        { title: '文档', link: 'guide/home' },
        { title: '组件', link: 'components/puzzle' },
        { title: 'Hooks', link: 'hooks/use-touch' },
        { title: '更新日志', link: 'version/home' },
      ],
      loading: {
        skeleton: ['/guide', '/version']
      },
      footerLinks: [],
      // resolve: {
      //   // 配置入口文件路径，API 解析将从这里开始
      //   entryFile: './src/index.ts',
      //   atomDirs: [
      //     {type: 'components', dir: './src/components'},
      //     {type: 'hooks', dir: './src/hooks'},
      //   ],
      // },
      features: [
        { title: '开箱即用', details: '接入简单，安装即使用' },
        { title: '多语言支持', details: '支持React/Vue(即将支持)的使用' },
        // { title: '支持AI', details: '部分组件支持接入AI大模型' },
      ]
    })
});
