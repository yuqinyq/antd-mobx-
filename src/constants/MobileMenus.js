/*
 * @Descripttion:
 * @version:
 * @Author: yuqin
 * @Date: 2019-08-28 14:42:13
 * @LastEditors: yuqin
 * @LastEditTime: 2019-08-29 14:13:46
 */
export const menus = [
  {
    title: '首页',
    icon: 'home',
    key: '/home',
    subs: [
      { key: '/home/main', title: '主页', icon: '' },
    ]
  }, {
    title: 'antd-mobile组件',
    icon: '',
    key: '/home/antd',
    subs: [
      {
        title: '抽屉',
        icon: '',
        key: '/home/antd/drawer',
      },
      {
        title: '分页器',
        icon: '',
        key: '/home/antd/pagination',
      }, {
        title: '分段器',
        icon: '',
        key: '/home/antd/segmentedControl',
      }, {
        title: '标签页',
        icon: '',
        key: '/home/antd/tabs',
      }, {
        title: '标签栏',
        icon: '',
        key: '/home/antd/tabBar',
      }, {
        title: '日历',
        icon: '',
        key: '/home/antd/calendar',
      }, {
        title: '文本输入',
        icon: '',
        key: '/home/antd/inputItem',
      }, {
        title: '走马灯',
        icon: '',
        key: '/home/antd/carousel',
      },
    ]
  }, {
    title: '报表示例',
    icon: '',
    key: '/home/chart',
    subs: [
      {
        title: '报表一',
        icon: '',
        key: '/home/chart/one',
      }, {
        title: '报表二',
        icon: '',
        key: '/home/chart/two',
      }, {
        title: '报表三',
        icon: '',
        key: '/home/chart/three',
      }
    ]
  }
]
