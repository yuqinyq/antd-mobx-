/*
 * @Descripttion:
 * @version:
 * @Author: yuqin
 * @Date: 2019-07-18 16:56:40
 * @LastEditors: yuqin
 * @LastEditTime: 2019-08-21 15:04:21
 */
import '@babel/polyfill'
import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/react-resizable/css/styles.css';
import App from './pc/App';
import Mobile from './mobile/App'
import registerServiceWorker from './registerServiceWorker';
import { HashRouter as Router} from 'react-router-dom'
import { Provider } from 'mobx-react'
import { LocaleProvider } from 'antd'
import zh_CN from 'antd/lib/locale-provider/zh_CN'
import store from './store'
import moment from 'moment';
import 'moment/locale/zh-cn';

moment.locale('zh-cn');
class Root extends React.Component {
  componentWillMount() {
    const {navigatorStore} = store
    navigatorStore.judgeNavigator()
  }

  render() {
    const {navigatorStore} = store
    //打包时，用的HashRouter并加上了basename，因为放在服务器的二级目录下
    return (
      <Router>
        <LocaleProvider locale={zh_CN}>
          <Provider {...store}>
            {navigatorStore.isMobile ? <Mobile /> : <App />}
          </Provider>
        </LocaleProvider>
      </Router>
    )
  }
}

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
