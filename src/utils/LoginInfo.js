/*
 * @Descripttion:
 * @version:
 * @Author: yuqin
 * @Date: 2019-08-27 15:00:54
 * @LastEditors: yuqin
 * @LastEditTime: 2019-08-27 15:31:01
 */

export function isAuthenticated() {
  return getLoginStatus()
}

export function getLoginStatus() {
  if (localStorage.getItem("qfLoginInfo")) {
    return true
  } else {
    return false
  }
}

export function getLoginInfo() {
  let loginInfo = {}
  if (localStorage.getItem("qfLoginInfo")) {
    loginInfo = JSON.parse(localStorage.getItem("qfLoginInfo"))
  } else {
    loginInfo = {}
  }
  return loginInfo
}
export function setLoginInfo(data) {
  localStorage.setItem("qfLoginInfo", JSON.stringify(data))
}
export function logout() {
  localStorage.clear()
}
