/**
 * @Description:  统一管理 Store 是最佳实践
 */
import UserStore from './userStore'
import UIStore from './uiStore';
class Store {
  //* 组合多个store
  //! 不同的store之间可以实现通信
  constructor() {
    this.userStore = new UserStore(this)
    this.uiStore = new UIStore(this)
  }
}

export const store = new Store()
