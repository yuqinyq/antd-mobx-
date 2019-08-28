/*
 * @Descripttion:
 * @version:
 * @Author: yuqin
 * @Date: 2019-07-18 16:56:41
 * @LastEditors: yuqin
 * @LastEditTime: 2019-08-27 14:13:43
 */
import http from 'axios'
import { message, notification } from 'antd';
import { formatParams } from './utils'

let baseURL = 'http://tplatform.api.52meicang.com/'

let server = {
  init: () => {
    http.interceptors.request.use(
      config => {
        config.url = baseURL + config.url
        if (config.method === 'post') {
          config.data = formatParams(config.data)
        } else {
          // 导出 get
          config.params.token = JSON.parse(localStorage.loginInfor).infor.token
        }
        return config;
      },
      err => {
        return Promise.reject(err);
      });

    http.interceptors.response.use(function (response) {
      if (response.data) {
        if (response.data.errorCode === "1002" || response.data.errorCode === "1001" || response.data.errorCode === '1003') {
          localStorage.clear()
          // Message({
          //   message: '登录过期或未登录，即将跳转至登录页...',
          //   duration: 800,
          //   center: true,
          //   type: 'warning'
          // })
          message.warning('登录过期或未登录，即将跳转至登录页...', 1, () => {
            console.log(123)
          });
        } else if (response.data.errorCode !== '0') {
          notification.open({
            message: '提示',
            description: response.data.msg
          })
        }
      }
      return response;
    }, function (error) {
      return Promise.reject(error);
    })
  }
}

export default server
