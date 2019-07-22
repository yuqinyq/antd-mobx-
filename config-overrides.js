
const rewireMobX = require('react-app-rewire-mobx');
const rewireLess = require('react-app-rewire-less');
const {injectBabelPlugin} = require('react-app-rewired');
const overrideAntdThemeStyle = require('./ant-theme-override');
const rewirePreloadPlugin = require('react-app-rewire-preload-plugin')
const path = require('path')
const webpack = require('webpack');

module.exports = function override(config, env){

  // less support
  config = rewireLess.withLoaderOptions({
    modifyVars: overrideAntdThemeStyle
  })(config, env);

  // preact support when env === 'production'
  if(env === 'production'){
    console.info("⚡ Production build with Preact, by yuqin");
    //config = rewirePreact(config, env);
  }

  //  处理环境变量
  //  防止与create-react-app冲突,.dev文件名字与脚手架规范名字不同

  const QF =/^QF_/i;

  const qf = process.env.NODE_QF;

  let  envPath = `.env.${qf}`;

  require('dotenv').config({path:envPath});

  const raw = Object.keys(process.env)
    .filter(key => QF.test(key))
    .reduce(
      (env, key) => {
        env[key] = process.env[key];
        return env;
      },
      {NODE_ENV:process.env.NODE_ENV}
    );


  let stringified = {
    'process.env': Object.keys(raw).reduce((env, key) => {
      env[key] = JSON.stringify(raw[key]);
      return env;
    }, {})
  }

  // antd On demand loading
  config = injectBabelPlugin(['import', { libraryName: 'antd', libraryDirectory: 'es', style: true }], config);


  if (qf !=='dev') config = {
    ...config,
    devtool:'none'
  }

  // mobx decorators support
  config = rewireMobX(config, env);

  // preload plugin made by GoogleChromelabs
  config = rewirePreloadPlugin(config, env, {
    rel: 'preload',
    include: 'initial'
  });
  const oResolve = Object.assign({}, config.resolve)
  config.resolve = {
    ...oResolve,
    modules: oResolve.modules.concat([path.resolve(__dirname, './src')])
  }


  let oPlugins = config.plugins


  //  去掉原来的DefinePlugin  重新加载,
  // oPlugins.splice(3,1);

  //  覆盖原有DefinePlugin，
  //  全局加载环境变量
  config.plugins = [
    new webpack.DefinePlugin(stringified),
    ...oPlugins
  ]
  return config;
}
