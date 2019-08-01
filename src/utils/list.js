/*
 * @Descripttion: 列表方法
 * @version:
 * @Author: yuqin
 * @Date: 2019-07-31 10:01:07
 * @LastEditors: yuqin
 * @LastEditTime: 2019-08-01 16:37:50
 */


/**
 * 列表跨行方法
 * @param data 后台请求的list[]
 * @param name 键值
 * @param key 键名
 * @returns {Array}
 */
export function enjambment(data, name, key) {
  return data && data.filter(function (item, index) {
    return item[key] === name;
  }).length;
}


/**
 * 列选择关联方法
 * @param columusList columns列表
 * @param checkedKeys 选中的列选项
 * @param num  显示列的个数大于多少固定最后一列
 * @returns {Array} 渲染出来的新列
 */
export function columnsChoose(columusList, checkedKeys,num) {
  let newColumns = []
  columusList.map((item) => {
    if (checkedKeys.indexOf(item.key) > -1) {
      newColumns.push(item)
    } else if (item.children &&
      (item.children.filter(res => checkedKeys.indexOf(res.key) > -1)).length > 0) {
      newColumns.push(item)
      item.children.map((d, i) => {
        if (checkedKeys.indexOf(d.key) === -1) {
          newColumns[newColumns.length - 1].children.splice(i, 1)
        }
      })
    }
  })
  if(checkedKeys.length > num){
    newColumns[newColumns.length - 1].fixed = 'right'
  }
  return newColumns
}
