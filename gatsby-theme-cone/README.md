## Usage

Create a Gatsby site from [gatsby-starter-theme-cone](https://github.com/cnfe/gatsby-starter-theme-cone).

```bash
$ yarn global add gatsby-cli // or npm install gatsby-cli -g
$ gatsby new mysite https://github.com/cnfe/gatsby-starter-theme-cone
```

Start developing.

```bash
$ cd mysite
$ yarn start
```

### `gatsby-config.js`

```js
// gatsby-config.js
const { repository } = require('./package.json');

module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-cone`,
      options: {
        // pagesPath: './site/pages',
        GATrackingId: `UA-XXXXXXXXX-X`,
        pathPrefix: '/g2',
        // antd 主题：https://github.com/ant-design/ant-design/blob/master/components/style/themes/default.less
        theme: {
          'primary-color': '#873bf4',
        },
        pwa: true, // 是否开启 gatsby-plugin-offline
        cname: true, // 是否自动从 siteUrl 中提取 CNAME 文件
        codeSplit: true, // 是否开启 gatsby 按路由的代码分割，默认为 false
      },
    },
  ],
  siteMetadata: {
    title: `AntV`,
    description: `Ant Visualization solution home page`,
    githubUrl: repository.url,
    logoUrl: '', // 自定义 logo
    navs: [], // 用于定义顶部菜单
    docs: [], // 用于定义文档页面的二级分类菜单
    examples: [], // 用于定义演示页面的二级菜单，属性见下方
    showSearch: true, // 是否展示搜索框
    showChinaMirror: true, // 是否展示国内镜像链接
    showLanguageSwitcher: true, // 用于定义是否展示语言切换
    showAntVProductsCard: true, // 是否展示 AntV 系列产品的卡片链接
    showGithubCorner: true, // 是否展示角落的 GitHub 图标
    playground: {
      container: '<canvas id="container" />', // 定义演示的渲染节点，默认 <div id="container" />
      playgroundDidMount: 'console.log("playgroundDidMount");',
      playgroundWillUnmount: 'console.log("playgroundWillUnmount");',
    },
    versions: [
      {
        '1.x': 'https://1x.ant.design',
        '2.x': 'https://2x.ant.design',
        '3.x': 'https://ant.design',
        '4.x': 'https://next.ant.design',
      },
    ],
    redirects: [
      {
        from: /\/old-url/,
        to: '/new-url', // 不指定 to 时直接跳转到 https://antv-2018.alipay.com/***
      },
    ],
  },
};
```

### Components

```jsx
import SEO from 'gatsby-theme-cone/site/components/Seo';
import Header from 'gatsby-theme-cone/site/components/Header';
import Footer from 'gatsby-theme-cone/site/components/Footer';
import Banner from 'gatsby-theme-cone/site/components/Banner';
import Features from 'gatsby-theme-cone/site/components/Features';
import Applications from 'gatsby-theme-cone/site/components/Applications';
import Companies from 'gatsby-theme-cone/site/components/Companies';

// gatsby-theme-cone/components/Header for commonjs version

const Layout = () => {
  const features = [
    {
      icon:
        'https://gw.alipayobjects.com/zos/basement_prod/5dbaf094-c064-4a0d-9968-76020b9f1510.svg',
      title: 'xxxxx',
      description: 'xxxxxxxxxxxxxxxxxxxxxxxxx',
    },
    {
      icon:
        'https://gw.alipayobjects.com/zos/basement_prod/0a0371ab-6bed-41ad-a99b-87a5044ba11b.svg',
      title: 'xxxxx',
      description: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
    },
    {
      icon:
        'https://gw.alipayobjects.com/zos/basement_prod/716d0bc0-e311-4b28-b79f-afdd16e8148e.svg',
      title: 'xxxxx',
      description: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
    },
  ];
  const cases = [
    {
      logo:
        'https://gw.alipayobjects.com/mdn/rms_23b644/afts/img/A*2Ij9T76DyCcAAAAAAAAAAABkARQnAQ',
      title: '灯塔专业版',
      description:
        '深入金融的基金深入金融的基金深入金融的基金深入金融的基金深入金融的基金深入金融的基金深入金融的基金深入金融的基金深入金融的基金深入金融的基金深入金融的基金',
      link: '#',
      image:
        'https://gw.alipayobjects.com/mdn/rms_23b644/afts/img/A*oCd7Sq3N-QEAAAAAAAAAAABkARQnAQ',
    },
    // ...
  ];
  const companies = [
    {
      name: '公司1',
      image:
        'https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*Z1NnQ6L4xCIAAAAAAAAAAABkARQnAQ',
    },
    {
      name: '公司2',
      image:
        'https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*6u3hTpsd7h8AAAAAAAAAAABkARQnAQ',
    },
    // ...
  ];
  const notifications = [
    {
      type: '测试',
      title: 'G6 3.2 全新上线！',
      date: '2019.12.04',
      link: '#',
    },
  ];

  const downloadButton = {
    text: '下载使用',
    link: 'https://antv.alipay.com/zh-cn/index.html',
  };

  return (
    <>
      <SEO title="菜鸟数据可视化" lang="zh" />
      <Header
        subTitle="子产品名"
        logo={{
          link: 'https://antv.alipay.com',
          img: <img src="url" />,
        }}
        githubUrl="https://github.com/cnfe/g2"
        // docs={[]}
        showSearch={false}
        showGithubCorner={false}
        showLanguageSwitcher={false}
        onLanguageChange={language => {
          console.log(language);
        }}
        defaultLanguage="zh"
      />
      <Footer
      // columns={[]}
      // bottom={<div>powered by antv</div>}
      />

      <Banner
        coverImage={<svg></svg>} // 右侧 banner svg 内容
        title="主页标题"
        description="主页描述内容描述内容描述内容描述内容"
        buttonText="按钮文字"
        buttonHref={'#按钮链接路径'}
        notifications={notifications} // 可传 1-2 个内容，若不传则显示 2 个默认通知
        style={{}}
        className="Banner 的 className"
        video="视频按钮点开后视频的链接，不传则不会出现视频按钮"
        githubStarLink="Github Star 链接，不传则不会出现 GitHub Start 按钮"
        downloadButton={downloadButton} // 不传则不会出现下载按钮
      />
      <Features
        title="优势页面名称" // 可不传
        features={features} // 必传
        style={{}}
        className="Features 的 className"
      />
      <Cases cases={cases} style={{}} className="Cases 的 className" />
      <Companies
        title="公司页面名称" // 必传
        companies={companies} // 必传
        style={{}}
        className="Companies 的 className"
      />
    </>
  );
};
```

## Develop

```bash
yarn install
yarn start
```

Visit https://localhost:8000 to preview.

## Publish to npm

```bash
cd gatsby-theme-cone
npm run release
```

## Deploy

```bash
npm run deploy
```

> Set envoironment variable `GATSBY_PATH_PREFIX` to `/` in deploy service like netlify to preview pathPrefix site in root domain.

## Add Dependency

```bash
cd gatsby-theme-cone
yarn add shallowequal
```

or

```bash
yarn workspace gatsby-theme-cone shallowequal
```

## Related libraries

- [Gatsby](https://www.gatsbyjs.org/docs/)
- [Ant Design](https://github.com/ant-design/ant-design)
- [gatsby-transformer-remark](https://www.gatsbyjs.org/packages/gatsby-transformer-remark/)
- [gatsby-remark-prismjs](https://www.gatsbyjs.org/packages/gatsby-remark-prismjs/?=highlight#line-highlighting)
- [Jest](https://jestjs.io/)
- [Testing Library](https://testing-library.com/)
- [react-i18next](https://react.i18next.com/)
