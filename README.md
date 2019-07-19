## scli-mobx-template

基础的 mobx 模板，集成`mobx` + `mobx-react` + `react-router4` + `axios` + `antd`和相应的 webpack 配置

### Quick Start

```
yarn create react-app my-app
cd antd-demo

拉下代码通过以下命令建立依赖:
$ yarn 或 npm install
```
- 开始开发: `yarn start`
- 编译到测试环境: `yarn build-test`
- 编译到线上环境: `yarn build`

打包后的 build 的存放目录在 package.json 的 homepage 中的配置

### 环境变量

#### 配置环境变量

开发环境，测试环境，线上环境的变量都配置在不同的文件中除了`PUBLIC_URL`, `NODE_ENV`等内置的变量，自定义变量都需要以`QF_`开头

- 开发环境`.env.dev`
- 测试环境`.env.test`
- 线上环境`.env.pro`

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
