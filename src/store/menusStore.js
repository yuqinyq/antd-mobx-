/*
 * @Descripttion:
 * @version:
 * @Author: yuqin
 * @Date: 2019-08-28 11:01:12
 * @LastEditors: yuqin
 * @LastEditTime: 2019-08-28 11:12:15
 */
import { observable, action,runInAction } from 'mobx'
import { MenusDataApi } from '../mock/menus'


class MenusStore {
  @observable menus = []  //服务端返回的路由导航

  @action
  async getMenus() {
    const data = await MenusDataApi()
    if (data.success) {
      runInAction('fetch list success', () => {
        this.menus = data.result
      })
    }
  }
}

export default new  MenusStore()
