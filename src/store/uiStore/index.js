/*
 * @Descripttion:按照 mobx 最佳实践，通过 UIStore 控制页面的一些 UI 效果
 * @version:
 * @Author: yuqin
 * @Date: 2019-07-16 14:46:14
 * @LastEditors: yuqin
 * @LastEditTime: 2019-07-16 14:56:02
 */

import { observable, action, configure } from 'mobx'

configure({ enforceActions: true })

export default class UIStore {
  @observable
  widthTag = 0
  @observable isMobile = false
  @observable isSearch = false
  @observable contentLayoutShow = true
  @observable isLoading = true
  @observable isPocMap = true
  @observable isUploading = false

  constructor(rootStore) {
    this.rootStore = rootStore
  }

  // ! 根据屏幕宽度设置响应式
  @action.bound
  setResponseMode(clientWidth) {
    this.isMobile = clientWidth < 800
  }
  @action.bound
  setChannelSearch() {
    this.isSearch = !this.isSearch
  }

  @action.bound
  setPocMode(){
    this.isPocMap = !this.isPocMap
  }

  @action
  hideContentLayout() {
    this.contentLayoutShow = false
  }

  @action
  showContentLayout() {
    this.contentLayoutShow = true
  }

  @action.bound
  changeWidthTag() {
    this.widthTag = this.widthTag + 1
  }
  @action
  setLoadingStatus(status) {
    this.isLoading = status
  }
  @action
  setUploadingStatus(status) {
    this.isUploading = status
  }
}
