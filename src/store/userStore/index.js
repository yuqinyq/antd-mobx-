/*
 * @Descripttion:user store
 * @version:
 * @Author: yuqin
 * @Date: 2019-07-16 14:47:04
 * @LastEditors: yuqin
 * @LastEditTime: 2019-07-17 11:18:57
 */

import axios from '../../axios'
import { flow, observable, configure, action } from 'mobx'
import {LoginStatusApi ,UserInfoApi } from './api'

configure({ enforceActions: true })

export default class UserStore {
  constructor(rootStore) {
    this.rootStore = rootStore
  }

  // 用户信息
  @observable
  user = observable.map({}, { deep: false, name: 'userInfo' })

  /**
   * 获取用户信息
   */
  getUserInfo = flow(function* getUserInfo(params) {
    const data = yield UserInfoApi(params)
    if (data.success) {
      this.update(data.result)
      console.log('用户信息')
    }
    return data.result
  })

  // 登录状态
  getUserLoginStatus = flow(function* getUserLoginStatus() {
    const data = yield LoginStatusApi()
    if (data.success) {
      this.update(data)
    }
    return data
  })

  // mixin id
  @action.bound
  updateUserId = id => {
    this.update({ id })
  }

  /**
   * 更新数据(传入一个对象)
   */
  @action.bound
  update(data) {
    this.user.merge(data)
  }

  /**
   * 清除所有数据
   */
  @action.bound
  clear() {
    this.user.clear()
  }
}
