/*
 * @Descripttion:
 * @version:
 * @Author: yuqin
 * @Date: 2019-07-18 16:56:40
 * @LastEditors: yuqin
 * @LastEditTime: 2019-08-19 10:59:28
 */
import React, {Component} from 'react';
import PrivateRoute from '../components/PrivateRoute'
import {Route,Switch} from 'react-router-dom'
import server from '../utils/server'
import Login from './pages/Login/index'
import Index from './routes/index'
import './style/index.less'
import '../assets/font/iconfont.css'


server.init()

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
