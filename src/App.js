/*
 * @Descripttion:最顶层组件：路由跳转
 * @version:
 * @Author: yuqin
 * @Date: 2019-07-15 16:55:06
 * @LastEditors: yuqin
 * @LastEditTime: 2019-07-17 14:50:19
 */

import React from "react";
import { Provider } from "mobx-react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import { store } from "./store";
import Auth from "./components/Auth/Auth";
import { Exception } from "./components/Exception";
import { LocaleProvider } from 'antd'
import zhCN from 'antd/lib/locale-provider/zh_CN';
import { getAsyncComponent } from "./utils/index";



// * 按需加载的组件
const AsyncLogin = getAsyncComponent({ dynamicImport: () => import('./pages/login') });
const AsyncGlobalLayout = getAsyncComponent({
  dynamicImport: () => import("./pages/globalLayout")
});

export const App = () => (
  <Provider {...store}>
    <LocaleProvider locale={zhCN}>
      <Router>
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/login" push />} />
          <Route exact path="/login" component={AsyncLogin} />
          <Auth>
            <Switch>
              <Route path="/qf" component={AsyncGlobalLayout} />
              <Route exact path="/500" render={() => <Exception type="500" />} />
              <Route render={() => <Exception type="404" />} />
            </Switch>
          </Auth>
        </Switch>
      </Router>
    </LocaleProvider>

  </Provider>
);

