/*
 * @Descripttion:
 * @version:
 * @Author: yuqin
 * @Date: 2019-08-27 16:52:36
 * @LastEditors: yuqin
 * @LastEditTime: 2019-08-28 10:54:40
 */
import { menus } from '../constants/PcMenus'



const flattenToObject = menus => {
  let obj = {}
  for (let i = 0; i < menus.length; i++) {
    obj[menus[i]['key']] = {}
    obj[menus[i]['key']] = {
      ...menus[i]
    }
    if (Array.isArray(obj[menus[i]['key']]['subs'])) {
      const arr = obj[menus[i]['key']]['subs']
      for (let j = 0; j < arr.length; j++) {
        obj[arr[j]['key']] = {}
        obj[arr[j]['key']] = {
          ...arr[j]
        }
      }
    }
  }
  for (let o in obj) {
    delete obj[o]['subs']
  }
  return obj
}

const authObj = flattenToObject(menus)

export const getAuth = data => {
  let arr = []
  for (let i = 0; i< data.length;i++){
    const key = data[i]['key'];
    const o = authObj[key];
    const name = data[i]['title'];
    if (!o) continue;
    o.title = name;
    arr[i] = o ;
    const childrenArr = data[i]['subs'];
    if (Array.isArray(childrenArr)){
      arr[i].subs = [];
      for (let j = 0; j< childrenArr.length; j++){
        const key = childrenArr[j]['key'];
        const o = authObj[key];
        const name = childrenArr[j]['title'];
        // console.log(o);
        if (o) {
          o.title = name;
          arr[i].subs.push(o);
        }
      }
    }
  }
  return arr.filter(d=>d)
}
