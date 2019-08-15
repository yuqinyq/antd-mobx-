/*
 * @Descripttion:
 * @version:
 * @Author: yuqin
 * @Date: 2019-07-18 16:56:41
 * @LastEditors: yuqin
 * @LastEditTime: 2019-08-13 15:14:45
 */
import moment from 'moment'

function accMul(arg1, arg2) {
  let m = 0;
  const s1 = arg1.toString();
  const s2 = arg2.toString();
  m += s1.split(".").length > 1 ? s1.split(".")[1].length : 0;
  m += s2.split(".").length > 1 ? s2.split(".")[1].length : 0;
  return Number(s1.replace(".", "")) * Number(s2.replace(".", "")) / 10 ** m;
}

export function digitUppercase(n) {
  const fraction = ['角', '分'];
  const digit = ['零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖'];
  const unit = [['元', '万', '亿'], ['', '拾', '佰', '仟', '万']];
  let num = Math.abs(n);
  let s = '';
  fraction.forEach((item, index) => {
    s += (digit[Math.floor(accMul(num, 10 * 10 ** index)) % 10] + item).replace(/零./, '');
  });
  s = s || '整';
  num = Math.floor(num);
  for (let i = 0; i < unit[0].length && num > 0; i += 1) {
    let p = '';
    for (let j = 0; j < unit[1].length && num > 0; j += 1) {
      p = digit[num % 10] + unit[1][j] + p;
      num = Math.floor(num / 10);
    }
    s = p.replace(/(零.)*零$/, '').replace(/^$/, '零') + unit[0][i] + s;
  }

  return s
    .replace(/(零.)*零元/, '元')
    .replace(/(零.)+/g, '零')
    .replace(/^整$/, '零元整');
}


/**
 * 生成指定区间的随机整数
 * @param min
 * @param max
 * @returns {number}
 */
export function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

/**
 * 计算提示框的宽度
 * @param str
 * @returns {number}
 */
export function calculateWidth(arr) {
  return 30 + arr[0].length * 15
}

/**
 * ajax请求参数格式化
 * @param data
 * @returns {Object}
 */
export function formatParams(data) {
  var obj = []

  if (localStorage && !!localStorage.loginInfor) {
    var token = JSON.parse(localStorage.loginInfor).infor.token
    obj.push(('token=') + token)
  }
  for (var name in data) {
    if (data[name] !== '') {
      obj.push(encodeURIComponent(name) + "=" + encodeURIComponent(data[name]))
    }
  }
  // 添加时间戳
  obj.push(("timestamp=" + Math.round(new Date().getTime() / 1000)));
  obj.sort() // 排序
  let seddata = obj.join('&')// 拼接

  return seddata
}


/**
 * 获取日期区间    本日 本周  本月  本年
 * @param data
 * @returns {Object}   [ startDate,endDate ]
 */

export function getRangeDate(type) {
  let obj = []
  if (type === 'day') {
    obj = [moment(), moment()]
  } else if (type === 'week') {
    obj = [moment().day(1), moment().day(7)]
  } else if (type === 'month') {
    obj = [moment().month(moment().month()).startOf('month'),
    moment().month(moment().month()).endOf('month')]
  } else if (type === 'year') {
    obj = [moment().year(moment().year()).startOf('year'),
    moment().year(moment().year()).endOf('year')]
  } else {
    obj = []
  }
  return obj
}

