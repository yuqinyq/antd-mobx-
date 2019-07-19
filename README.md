

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
│   ├── pages                # 业务页面入口和常用模板
│   └── routers              # 路由配置
│   ├── store                # store状态管理
│   ├── style                # 存放所有的css样式文件
│   ├── utils                # 工具库
│   ├── App.js               # 顶层组件入口文件
│   ├── App.test.js
│   ├── index.js             # 项目的整体js入口文件
│   ├── logo.svg
│   └── registerServiceWorker.js
├── .babelrc                 # babel转码文件
├── .editorconfig            # 帮助开发人员在不同的编辑器和IDE之间定义和维护一致的编码样式
├── .env.dev                 # 本地开发的环境变量
├── .env.pro                 # 正式环境的环境变量
├── .env.test                # 测试环境的环境变量
├── .eslintignore            # 忽略不需要语法检测的文件
├── .eslintrc                # 定义代码检测规则配置
├── .gitignore               # 忽略git提交无需提交的文件
├── .prettierrc              # 自动化格式项目提交代码配置
├── ant-theme-override.js    # antd默认主题配置
├── config-overrides.js      # 用于修改默认配置
├── log.md                   # 版本更新日志
├── package.json             # 定义了这个项目所需要的各种模块，以及项目的配置信息（比如名称、版本、许可证等元数据）
├── README.md                # 项目说明文档
└── yarn.lock                # yarn命令自动生成的
```
