/*
 * @Descripttion:
 * @version:
 * @Author: yuqin
 * @Date: 2019-07-18 16:56:41
 * @LastEditors: yuqin
 * @LastEditTime: 2019-08-27 14:58:40
 */
import {observable, action} from 'mobx'
import {isAuthenticated,authenticateSuccess,logout} from '../utils/Session'

class AppStore {
  @observable isLogin = !!isAuthenticated()  //利用cookie来判断用户是否登录，避免刷新页面后登录状态丢失
  @observable users = []  //模拟用户数据库
  @observable loginUser = {}  //当前登录用户信息

  @action toggleLogin(flag,info={}) {
    this.loginUser = info  //设置登录用户信息
    if (flag) {
      authenticateSuccess(info.username)
      this.isLogin = true
    } else {
      logout()
      this.isLogin = false
    }

  }
}

export default new AppStore()
