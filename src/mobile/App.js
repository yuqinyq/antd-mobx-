/*
 * @Descripttion:
 * @version:
 * @Author: yuqin
 * @Date: 2019-08-13 15:38:22
 * @LastEditors: yuqin
 * @LastEditTime: 2019-08-14 16:36:49
 */
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import 'antd-mobile/dist/antd-mobile.css';
import Login from './pages/Login'
import PrivateRoute from './components/PrivateRoute'
import Index from './router'
import './style/index.less'

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path='/login' component={Login} />
        <PrivateRoute path='/' component={Index} />
      </Switch>

    )
  }
}
export default App;
