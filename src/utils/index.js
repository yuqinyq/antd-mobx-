/*
 * @Descripttion:工具方法集
 * @version:
 * @Author: yuqin
 * @Date: 2019-07-16 14:05:23
 * @LastEditors: yuqin
 * @LastEditTime: 2019-07-16 14:21:35
 */
import React from 'react'
import { Spin } from 'antd';
import { RetryPage } from '../components/Retry'
import Loadable from 'react-loadable'
let cacloudCache = {}


//* 获取当前的时间戳
const now = () => {
  return Date.now() || new Date().getTime()
}

/**
 * *节流函数
 * @param {*} func 目标函数
 * @param {*} wait 执行时间间隔
 * @param {*} options 配置, leading: false 表示不会立即触发函数， trailing: false 最后一次回调不会被触发，二者不能并存
 */
export const throttleForkedFromUnderScore = (func, wait, options) => {
  let context, args, result

  // setTimeout 的 handler
  let timeout = null

  // 标记时间戳
  let previous = 0

  if (!options) options = {}

  let later = () => {
    previous = options.leading === false ? 0 : now()
    timeout = null
    result = func.apply(context, args)
    if (!timeout) context = args = null
  }

  return function () {
    var _now = now()
    // 设置{ leading: false }之后，第一次不执行 因为 previous = _now
    if (!previous && options.leading === false) previous = _now

    // 距离下一次触发需要的时间间隔
    let remaining = wait - (_now - previous)
    context = this
    args = arguments

    // 时间到了 || 系统时间被调整过的情况
    if (remaining <= 0 || remaining > wait) {
      if (timeout) {
        clearTimeout(timeout)
        timeout = null
      }

      // 重置时间标记
      previous = _now

      // 触发函数
      result = func.apply(context, args)

      // 避免内存泄漏
      if (!timeout) context = args = null

      // 最后一次需要触发的情况
    } else if (!timeout && options.trailing !== false) {
      timeout = setTimeout(later, remaining)
    }
    return result
  }
}

/**
 * *利用生成器实现迭代器和map
 * @param {obj} obj
 */
export function* entries(obj) {
  for (let key of Object.keys(obj)) {
    yield [key, obj[key]]
  }
}

// ! 判断是否是生产环境
export const isDev = () => {
  return process.env.NODE_ENV === 'development'
}

// ! 日志记录 | 异常处理
export const logger = remark => {
  return function (target, name, descriptor) {
    if (isDev) return
    let method = descriptor.value
    descriptor.value = (...args) => {
      console.info(
        `备注: ${remark}, 方法${name}执行之前，检查到此时参数是：`,
        args
      )
      let ret
      try {
        ret = method.apply(target, args)
        console.info(`方法${name}执行成功!`)
      } catch (error) {
        console.error(`${name} 执行失败了!`)
        console.dir(error)
      } finally {
        console.info(`${name} 执行完毕!`)
      }
      return ret
    }
  }
}

// ! 千分位
export const toThousands = num =>
  (num || 0).toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,')

export const deepCompare = (o1, o2) => {
  //标识是否相似
  var flag = true

  var traverse = function (o1, o2) {
    //如果至少有一个不是对象
    if (!(o1 instanceof Object) || !(o2 instanceof Object)) {
      if (o1 !== o2) {
        flag = false
      }
      return
    }
    //如果两个对象的属性数量不一致
    //比如：
    //a:{name:"Jack",age:22}
    //b:{name:"Jack"}
    if (Object.keys(o1).length !== Object.keys(o2).length) {
      flag = false
    }
    //若有不同之处，尽早结束递归
    if (flag) {
      //深度遍历对象
      for (var i in o1) {
        //若都是对象，继续递归
        if (typeof o1[i] === 'object' && typeof o2[i] === 'object') {
          traverse(o1[i], o2[i])
        } //若都不是对象，则比较值
        else if (typeof o1[i] !== 'object' && typeof o2[i] !== 'object') {
          if (o1[i] !== o2[i]) {
            flag = false
          }
        } //一个是对象，一个不是对象，肯定不相似
        else {
          flag = false
        }
      }
    }
  }

  traverse(o1, o2)

  return flag
}



/**
 * 防抖
 * @param {*} func
 * @param {*} wait
 * @param {*} immediate 表示是否需要立即执行
 */
export const debounce = (func, wait, immediate) => {
  let timer, result, args, timestamp, context
  // 延迟执行函数
  let later = () => {
    let last = now() - timestamp
    if (last < wait && last >= 0) {
      timer = setTimeout(later, wait - last)
    } else {
      timer = null
      if (!immediate) {
        result = func.apply(context, args)
        if (timer) args = context = null
      }
    }
  }

  return function () {
    context = this
    args = arguments
    timestamp = now()
    let callNow = immediate && !timer
    if (!timer) timer = setTimeout(later, wait)
    if (callNow) {
      result = func.apply(context, args)
      context = args = null
    }
    return result
  }
}

/**
 * ! 按需加载组件
 * ? 通过对loading状态的控制提供错误和超时界面，避免闪屏问题
 * @param {*} { dynamicImport, Load, ...rest }
 */
export const getAsyncComponent = ({ dynamicImport, Load, ...rest }) =>
  Loadable({
    loader: dynamicImport,
    loading: props => {
      if (props.error) {
        return <RetryPage message="Error!" retry={props.retry} />
      } else if (props.timedOut) {
        return <RetryPage message="访问超时!" retry={props.retry} />
      } else if (props.pastDelay) {
        return Load || <Spin />
      } else {
        return null
      }
    },
    timeout: 15000,
    ...rest
  })


export const getBreadCrumbRoutes = (target, arr) => {
  let keyList = []

  const equal = (url1, url2) => {
    const _strEqual = (a, b) => {
      if (b[0] === ':') return !(a === undefined)
      return a === b
    }

    const lst1 = url1.split('/')
    const lst2 = url2.split('/')
    if (lst1.length !== lst2.length) return false
    const length = lst1.length
    for (let i = 0; i < length; i++) {
      if (!_strEqual(lst1[i], lst2[i])) return false
    }
    return true
  }

  const find = (obj, _target) => {
    if (equal(_target, obj.key)) {
      // console.log(444);
      keyList.push({ breadcrumbName: obj.title, path: obj.key })
      return true
      // keyList.push(obj.key) return true
    }
    const children = obj.sub
    if (children && children.length > 0) {
      let found = false
      for (let i = 0; i < children.length; i++) {
        found = find(children[i], _target)
        if (found) {
          keyList.unshift({ breadcrumbName: obj.title, path: obj.key })
          // keyList.unshift(obj.key)

          return true
        }
      }
      return false
    }
  }

  for (let i = 0; i < arr.length; i++) {
    find(arr[i], target)
  }
  const item = (arr || []).find(i => i.key === target)
  if (item && item.sub === undefined) {
    //对于本身是子sub的情况下，不需要shift
  } else {
    keyList.shift()
  }
  return keyList
}

/**
 * *获取子节点的兼容性方法
 * @param ele
 */
export const getChildrenNodes = ele => {
  if (!ele.children) {
    const childs = ele.childNodes
    const eles = []
    for (let i = 0; i < childs.length; i++) {
      if (childs[i].nodeType === 1) {
        eles.push(childs[i])
      }
    }
    return eles
  } else {
    return ele.children
  }
}

/**
 * *秒数转换为时分秒格式
 * @param {*} seconds
 */
export const secondsToTime = seconds => {
  const s = parseInt(seconds, 10)
  if (cacloudCache[seconds + 'time']) {
    return cacloudCache[seconds + 'time']
  }
  let t = '00:00'
  if (s > 0) {
    let hours = Math.floor(s / 3600) || 0
    let minutes = Math.floor(s / 60) % 60 || 0
    let seconds = s % 60 || 0
    if (hours === 0) {
      t = `${minutes < 10 ? '0' + minutes : minutes}:${
        seconds < 10 ? '0' + seconds : seconds
        }`
    } else {
      t = `${hours < 10 ? '0' + hours : hours}:${
        minutes < 10 ? '0' + minutes : minutes
        }:${seconds < 10 ? '0' + seconds : seconds}`
    }
    cacloudCache[seconds + 'time'] = t
  }
  return t
}


/**
 * * 获取媒体的大小
 * @param {*} len
 */
export const getMediaTime = (len, fixed = 1) => {
  if (len !== 0) {
    if (len < 1048576) {
      return (len / 1024).toFixed(fixed) + 'kb'
    } else if (len < 1073741824 && len >= 1048576) {
      return (len / 1024 / 1024).toFixed(fixed) + 'M'
    } else if (len >= 1073741824) {
      return (len / (1024 * 1024 * 1024)).toFixed(fixed) + 'G'
    }
  }
  return '0kb'
}

/**
 * ? 将文件转可读的 URL
 * @param {*} file
 */
export const getObjectURL = file => {
  let url = ''
  if (window.createObjectURL !== undefined) {
    // basic
    url = window.createObjectURL(file)
  } else if (window.URL !== undefined) {
    // mozilla
    url = window.URL.createObjectURL(file)
  } else if (window.webkitURL !== undefined) {
    // chrome
    url = window.webkitURL.createObjectURL(file)
  }
  return url
}


/**
 * 获取html内容
 * @param html
 */
export const getDomHtml = html => {
  let fragment = document.createDocumentFragment()
  let wrapper = document.createElement('div')
  fragment.append(wrapper)
  fragment.querySelector('div').innerHTML = html
  return fragment
}
