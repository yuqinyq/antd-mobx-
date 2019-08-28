/*
 * @Descripttion:
 * @version:
 * @Author: yuqin
 * @Date: 2019-07-18 16:56:40
 * @LastEditors: yuqin
 * @LastEditTime: 2019-08-27 15:59:05
 */
import React, {Component} from 'react';
import PrivateRoute from '../components/PrivateRoute'
import {Route,Switch} from 'react-router-dom'
import Login from './pages/Login/index'
import Index from './routes/index'
import './style/index.less'
import '../assets/font/iconfont.css'


class App extends Component {
  render() {
    return (
      <Switch>
        <Route path='/login' component={Login}/>
        <PrivateRoute path='/' component={Index}/>
      </Switch>
    )
  }
}

export default App;
