/*
 * @Descripttion:
 * @version:
 * @Author: yuqin
 * @Date: 2019-07-03 17:15:29
 * @LastEditors: yuqin
 * @LastEditTime: 2019-07-17 17:34:28
 */

import { getAsyncComponent } from "../utils";

export const menus = [
  {
    key: "/qf",
    title: "首页",
    icon: "user",
    permission: "",
    level: 0,
    component: getAsyncComponent({
      dynamicImport: () => import("../pages/home/index")
    }),
  }, {
    key: "/qf/dataView",
    title: "数据看板",
    icon: "video-camera",
    permission: "",
    level: 0,
    sub: [{
      key: "/qf/data1",
      title: 'view1',
      icon: '',
      permission: '',
      level: 1,
      component: getAsyncComponent({
        dynamicImport: () => import("../pages/dataView")
      }),
    }]
  }
];



