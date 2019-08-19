<!--
 * @Descripttion: 
 * @version: 
 * @Author: yuqin
 * @Date: 2019-07-17 14:03:56
 * @LastEditors: yuqin
 * @LastEditTime: 2019-08-19 14:24:27
 -->
## scli-mobx-template

基础的 mobx 模板，集成`mobx` + `mobx-react` + `react-router4` + `axios` + `antd`和相应的 webpack 配置

### Quick Start

```
yarn create react-app my-app
cd antd-demo


拉下代码通过以下命令建立依赖:
$ yarn 
```

- 开始开发: `yarn start`
- 编译到测试环境: `yarn build-test`
- 编译到线上环境: `yarn build`

打包后的 build 的存放远程目录在 package.json 的 homepage 中的配置

### 目录结构

```
├── build                    # 打包后生成的build文件
├── node_modules             # 所有的依赖包
├── public
│   ├── favicon.ico          # Favicon
│   └── index.html
│   └── manifest.json
├── src
│   ├── assets               # 本地静态资源
│   ├── axios                # 后台请求http封装
│   ├── components           # 业务通用组件
│   ├── constants            # 默认常量定义
│   ├── mobile               # mobile端页面
│       ├── pages            # mobile端业务页面入口和常用模板
│       ├── routers          # mobile端路由配置
│       ├── style            # mobile端存放所有的css样式文件
│       ├── App.js           # mobile端顶层组件入口文件
│       └── App.test.js
│   ├── pc                   # pc端页面
│       ├── pages            # pc端业务页面入口和常用模板
│       ├── routers          # pc端路由配置
│       ├── style            # pc端存放所有的css样式文件
│       ├── App.js           # pc端顶层组件入口文件
│       └── App.test.js
│   ├── store                # store状态管理
│   ├── utils                # 工具库
│   ├── index.js             # 项目的整体js入口文件
│   ├── logo.svg
│   └── registerServiceWorker.js
├── .babelrc                 # babel转码文件
├── .editorconfig            # 帮助开发人员在不同的编辑器和IDE之间定义和维护一致的编码样式
├── .env.dev                 # 本地开发的环境变量
├── .env.prod                # 正式环境的环境变量
├── .env.test                # 测试环境的环境变量
├── .eslintignore            # 忽略不需要语法检测的文件
├── .eslintrc                # 定义代码检测规则配置
├── .gitignore               # 忽略git提交无需提交的文件
├── .prettierrc              # 自动化格式项目提交代码配置
├── ant-theme-override.js    # antd默认主题配置
├── config-overrides.js      # 用于修改默认配置
├── log.md                   # 版本更新日志
├── main.js                  # 打包桌面应用入口文件
├── package.json             # 定义了这个项目所需要的各种模块，以及项目的配置信息（比如名称、版本、许可证等元数据）
├── README.md                # 项目说明文档
└── yarn.lock                # yarn命令自动生成的
```

### 环境变量

#### 配置环境变量

开发环境，测试环境，线上环境的变量都配置在不同的文件中除了`PUBLIC_URL`, `NODE_ENV`等内置的变量，自定义变量都需要以`QF_`开头

- 开发环境`.env.dev`
- 测试环境`.env.test`
- 线上环境`.env.prod`

#### 使用环境变量

html 中

```html
<!-- PUBLIC_URL -->
<link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
```

js 中

```javascript
const publicUrl = process.env.QF_BASEURL
// do something
```

### pre-commit

在 commit 之前会做一次 eslint 检测，如果检测不通过，commit 会失败，因此请注意代码规范。  
请自行安装自己 IDE 的 eslint 插件和 prettier 插件

### 命名规范约定

#### 文件夹及文件命名

```
components-> 公用组件文件夹--大写字母开头驼峰命名  例：CustomBreadcrumb（面包屑组件）
pages-> 业务页面文件夹--大写字母开头驼峰命名      例：Home(首页模块)
所有组件命名都以大写驼峰开头，其余小写驼峰命名
```

#### css 命名

```
class 命名以 qf-开头 例： qf-header-image (头部头像样式)
```
......

### electron-react桌面应用
```
$ yarn run electron-start    --桌面应用启动
$ yarn run package           --打包桌面应用
```
