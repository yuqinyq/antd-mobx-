/*
 * @Descripttion:
 * @version:
 * @Author: yuqin
 * @Date: 2019-07-18 16:56:40
 * @LastEditors: yuqin
 * @LastEditTime: 2019-08-13 13:59:25
 */
import '@babel/polyfill'
import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.less';
import '../node_modules/react-resizable/css/styles.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {HashRouter} from 'react-router-dom'
import { Provider} from 'mobx-react'
import { LocaleProvider } from 'antd'
import zh_CN from 'antd/lib/locale-provider/zh_CN'
import store from './store'
import moment from 'moment';
import 'moment/locale/zh-cn';

moment.locale('zh-cn');
console.log(window.location.href)
//打包时，用的HashRouter并加上了basename，因为放在服务器的二级目录下
ReactDOM.render(
  <HashRouter>
    <LocaleProvider locale={zh_CN}>
      <Provider {...store}>
        <App/>
      </Provider>
    </LocaleProvider>
  </HashRouter>,
  document.getElementById('root'));
registerServiceWorker();
