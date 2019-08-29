/*
 * @Descripttion:
 * @version:
 * @Author: yuqin
 * @Date: 2019-08-28 11:01:12
 * @LastEditors: yuqin
 * @LastEditTime: 2019-08-29 15:40:02
 */
import { observable, action,runInAction } from 'mobx'
import { MenusDataApi } from '../mock/menus'
import {getAuth} from '../utils/menus'


class MenusStore {
  @observable menus = []  //服务端返回的路由导航
  @observable value = ['/home','/home/main'] //默认选中首页
  @observable title = '主页'

  @action
  changePage(value, title) {
    this.value = value
    this.title = title
  }

  @action
  async getMenus(type) {
    const data = await MenusDataApi()
    if (data.success) {
      runInAction('fetch list success', () => {
        this.menus = getAuth(data.result,type)
      })
    }
  }


}

export default new  MenusStore()
