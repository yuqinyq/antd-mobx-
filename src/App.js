import React, {Component} from 'react';
import PrivateRoute from './components/PrivateRoute'
import {Route,Switch} from 'react-router-dom'
import server from './utils/server'
import Login from './routes/Login/index'
import Index from './routes/Index/index'
import './App.css'
import './assets/font/iconfont.css'


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
