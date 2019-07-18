
/**
 * powered by yuqin at 2019-07-08
 * last modified by yuqin at 2019-07-08
 * @Description: 对 axios 进行二次封装
 */
import { notification } from "antd";
import axios from "axios";
import qs from "qs";

// ? 服务器code信息
const codeMessage = {
  200: "服务器成功返回请求的数据。",
  201: "新建或修改数据成功。",
  202: "一个请求已经进入后台排队（异步任务）。",
  204: "删除数据成功。",
  400: "发出的请求有错误，服务器没有进行新建或修改数据的操作。",
  401: "用户没有权限（令牌、用户名、密码错误）。",
  403: "用户得到授权，但是访问是被禁止的。",
  404: "发出的请求针对的是不存在的记录，服务器没有进行操作。",
  406: "请求的格式不可得。",
  410: "请求的资源被永久删除，且不会再得到的。",
  422: "当创建一个对象时，发生一个验证错误。",
  500: "服务器发生错误，请检查服务器。",
  502: "网关错误。",
  503: "服务不可用，服务器暂时过载或维护。",
  504: "网关超时。"
};

// TODO 需要封装一个重定向的方法
// const redirectTo = (path, ...rest) => {}



const baseUrl = process.env.YSY_BASEURL;



// 全局的默认配置
axios.defaults.timeout = 15000;
axios.defaults.withCredentials = true;
axios.defaults.baseURL = baseUrl;
axios.defaults.headers = {
  "X-Requested-With": "XMLHttpRequest"
};

//! 控制请求，统一异常处理和消息提示, loading 的控制也可以在这里完成。
let cancel = {};
let promiseArr = {};
const CancelToken = axios.CancelToken;

/**
 * @description 请求拦截，这里处理了重复请求和超时
 */
axios.interceptors.request.use(
  config => {
    if (promiseArr[config.url]) {
      promiseArr[config.url]('canceled the operation by -^ yuqin ^-')
      promiseArr[config.url] = cancel
    } else {
      promiseArr[config.url] = cancel
    }
    return config
  },
  err => {
    notification.error({ message: '提示', description: '连接超时' })
    return Promise.reject(err)
  }
)


/**
 * @description 拦截响应，除了统一的进行异常处理,还可以统一进行交互提示，
 * @description 但是这里只处理错误消息提示，因为接口有些没有返回成功回调的msg!
 */
axios.interceptors.response.use(
  response => {
    // ! 这里统一拦截错误提示，但是后台接口返回的格式不是统一的，只能增加很多判断
    if (response.status !== 200) {
      notification.error({
        message: '提示',
        description: response.statusText || '操作失败，请重新尝试'
      })
    } else {
      if (response.data.success === undefined) {
        if (!response.data) {
          notification.error({
            message: '提示',
            description: '操作失败，请重新尝试'
          })
        }
      } else {
        if (!response.data.success) {
          notification.error({
            message: "提示",
            description: response.data.msg || "操作失败，请重新尝试"
          });
        }
      }
    }

    return response
  },
  err => {
    if (err && err.response) {
      // 对各种特殊情况进行特殊处理
      const {
        data: { code }
      } = err.response
      switch (code) {
        case 401:
          window.location = window.location.hostname + '/login'
          return
        default:
      }

      notification.error({
        message: '提示',
        description:
          err.response.data && err.response.data.msg
            ? err.response.data.msg
            : codeMessage[err.response.status] ||
            `连接服务器失败${err.response.status}`
      })
      // TODO 统一处理各种异常，比如 401 需要跳转到登录页面。
      // switch(err.response.status){
      //   case 400:
      //     break;
      //   case 401:
      //     break;
      //   default:

      // }
    } else if (err.__proto__.__CANCEL__ === true) {
    } else {
      notification.error({ message: '提示', description: '连接到服务器失败' })
    }
    //* 这里是resolve, 所以可以失败了也在 .then 中得到信息，可以方便来关闭 loading 等
    return Promise.resolve(err.response)
  }
)


// ! 导出所有的请求方法
export default {
  /**
   * delete 请求
   */
  delete(url, param) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'delete',
        url,
        params: param,
        cancelToken: new CancelToken(c => {
          cancel = c
        })
      }).then(res => {
        // console.log(res)
        resolve(res)
      })
    })
  },


  deleteSome(url, param) {
    //多次调取批量删除,cancelToken会导致失效
    return new Promise((resolve, reject) => {
      axios({
        method: 'delete',
        url,
        params: param
      }).then(res => {
        // console.log(res)
        resolve(res)
      })
    })
  },

  /**
   * get 请求
   */
  get(url, param = {}) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'get',
        url,
        params: param,
        cancelToken: new CancelToken(c => {
          cancel = c
        })
      }).then(res => {
        resolve(res)
      })
    })
  },
  // 取消防抖操作
  getWithoutCancel(url, param = {}) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'get',
        url,
        params: param
      }).then(res => {
        resolve(res)
      })
    })
  },


  /**
   * post 请求 -- JSON
   * @param {*} url
   * @param {*} param
   */
  postJSON(url, param) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'post',
        url,
        data: param,
        cancelToken: new CancelToken(c => {
          cancel = c
        })
      })
        .then(res => {
          resolve(res)
        })
        .catch(err => {
          reject(err)
        })
    })
  },

  postJSONWithoutCancel(url, param) {
    //对于部分形似表单而非表单的接口，不需要对其进行拦截，以免导致逻辑出错
    return new Promise((resolve, reject) => {
      axios({
        method: 'post',
        url,
        data: param
      }).then(res => {
        resolve(res)
      })
    })
  },

  /**
   * post 表单
   * @param {*} url
   * @param {*} param
   */
  postForm(url, param) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'post',
        url,
        data: qs.stringify(param),
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        },
        cancelToken: new CancelToken(c => {
          cancel = c
        })
      }).then(res => {
        resolve(res)
      })
    })
  },

  /**
   * 文件上传
   */
  upload(url, param, cb = () => { }) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'post',
        url,
        timeout: 100000,
        data: param,
        headers: { 'Content-Type': 'multipart/form-data' },
        onUploadProgress: processEvent => {
          if (processEvent.lengthComputable) {
            cb(processEvent)
          }
        },
        cancelToken: new CancelToken(c => {
          cancel = c
        })
      }).then(res => {
        resolve(res)
      })
    })
  },

  /**
   * put
   */
  put(url, param) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'put',
        url,
        data: param,
        cancelToken: new CancelToken(c => {
          cancel = c
        })
      }).then(res => {
        resolve(res)
      })
    })
  },
  /**
   * put 表单
   * @param {*} url
   * @param {*} param
   */
  putForm(url, param) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'put',
        url,
        data: qs.stringify(param),
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        },
        cancelToken: new CancelToken(c => {
          cancel = c
        })
      }).then(res => {
        resolve(res)
      })
    })
  },
  /**
   * 多文件上传(没有做重复请求的拦截)
   * @param {*} url
   * @param {*} param
   * @param {*} cb
   */
  multipartUpload(url, param, cb = () => { }) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'post',
        url,
        timeout: 100000,
        data: param,
        headers: { 'Content-Type': 'multipart/form-data' },
        onUploadProgress: processEvent => {
          if (processEvent.lengthComputable) {
            cb(processEvent)
          }
        }
      }).then(res => {
        resolve(res)
      })
    })
  }
}

