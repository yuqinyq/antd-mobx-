import http from 'axios'
import { message, notification } from 'antd';
import { formatParams } from './utils'

let baseURL = ''
if ( process.env.NODE_ENV === 'development' ) {
  // baseURL = 'https://easy-mock.com/mock/5cf60786be427a521b0ac947/reactapi/' // 模拟数据
  // baseURL = 'https://randomuser.me/' // 默认
  baseURL = 'http://tplatform.api.52meicang.com/' // 美仓测试
} else {
  // 生产环境域名
  baseURL = 'http://diaoqii.com/'
}

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
            description:response.data.msg
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
