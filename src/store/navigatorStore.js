/*
 * @Descripttion:判断机型为移动端还是pc端
 * @version:
 * @Author: yuqin
 * @Date: 2019-08-14 09:55:16
 * @LastEditors: yuqin
 * @LastEditTime: 2019-08-27 13:57:32
 */
import { observable, action } from 'mobx'


class NavigatorStore {
  @observable isMobile = false



  @action judgeNavigator() {
    // 判断是否是移动端设备
    let sUserAgent = navigator.userAgent.toLowerCase();
    let bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
    let bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
    let bIsMidp = sUserAgent.match(/midp/i) == "midp";
    let bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
    let bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
    let bIsAndroid = sUserAgent.match(/android/i) == "android";
    let bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
    let bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
    if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {
      this.isMobile = true
    } else {
      this.isMobile = false
    }
  }
}
export default new NavigatorStore()
