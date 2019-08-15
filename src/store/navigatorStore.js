/*
 * @Descripttion:判断机型为移动端还是pc端
 * @version:
 * @Author: yuqin
 * @Date: 2019-08-14 09:55:16
 * @LastEditors: yuqin
 * @LastEditTime: 2019-08-14 10:04:38
 */
import { observable, action } from 'mobx'


class NavigatorStore {
  @observable isMobile = false



  @action judgeNavigator() {
    // 判断是否是移动端设备
    let browser = {
      versions: function () {
        let u = navigator.userAgent;
        return {
          trident: u.indexOf('Trident') > -1, //IE内核
          presto: u.indexOf('Presto') > -1, //opera内核
          webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
          gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1,//火狐内核
          mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
          ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
          android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或者uc浏览器
          iPhone: u.indexOf('iPhone') > -1, //是否为iPhone或者QQHD浏览器
          iPad: u.indexOf('iPad') > -1, //是否iPad
          webApp: u.indexOf('Safari') == -1 //是否web应该程序，没有头部与底部
        };
      }(),
      language: (navigator.browserLanguage || navigator.language).toLowerCase()//检测浏览器语言
    }
    if (browser.versions.mobile || browser.versions.android || browser.versions.ios) {
      this.isMobile = true
    } else {
      this.isMobile = false
    }
  }
}
export default new NavigatorStore()
