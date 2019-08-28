/*
 * @Descripttion:
 * @version:
 * @Author: yuqin
 * @Date: 2019-07-19 11:22:41
 * @LastEditors: yuqin
 * @LastEditTime: 2019-08-27 15:55:08
 */
import React from 'react'
import './style.less'
import { withRouter } from 'react-router-dom'
import { inject, observer } from 'mobx-react/index'
import 'animate.css'
import LoginForm from './LoginForm'



@withRouter @inject('loginStore') @observer
class Login extends React.Component {
  state = {
  }

  componentDidMount () {
    const isLogin = this.props.loginStore
    if(isLogin){
      this.props.history.go(1)     //当浏览器用后退按钮回到登录页时，判断登录页是否登录，是登录就重定向上个页面
      // this.props.appStore.toggleLogin(false) //也可以设置退出登录
    }
  }



  render () {
    return (
      <div id='login-page'>
        {
          <div>
            <div className="backgroundBox"/>
            <div className='container'>
              <LoginForm
                className={'box showBox'}
                switchShowBox={this.switchShowBox}/>
            </div>
          </div>
        }
      </div>
    )
  }
}

export default Login
