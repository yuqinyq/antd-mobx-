/*
 * @Descripttion:
 * @version:
 * @Author: yuqin
 * @Date: 2019-08-27 14:59:45
 * @LastEditors: yuqin
 * @LastEditTime: 2019-08-27 15:30:18
 */
import { observable, action } from 'mobx'
import { isAuthenticated, setLoginInfo, logout } from '../utils/LoginInfo'

class LoginStore {
  @observable isLogin = !!isAuthenticated()
  @observable users = []  //模拟用户数据库
  @observable loginUser = {}  //当前登录用户信息

  @action toggleLogin(flag, info = {}) {
    this.loginUser = info  //设置登录用户信息
    if (flag) {
      setLoginInfo(info)
      this.isLogin = true
    } else {
      logout()
      this.isLogin = false
    }

  }
}

export default new LoginStore()
