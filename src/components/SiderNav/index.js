/*
 * @Descripttion:
 * @version:
 * @Author: yuqin
 * @Date: 2019-07-18 16:56:40
 * @LastEditors: yuqin
 * @LastEditTime: 2019-08-29 10:02:45
 */
import React from 'react'
import CustomMenu from "../CustomMenu/index";
import { inject, observer } from 'mobx-react/index'
import './index.less'

@inject('menusStore', 'navigatorStore') @observer
class SiderNav extends React.Component {

  componentDidMount() {
    const { menusStore, navigatorStore } = this.props
    const type = navigatorStore.isMobile ? 'mobile' : 'pc'
    menusStore.getMenus(type)
  }

  render() {
    const { collapsed, menusStore } = this.props
    return (
      <div style={{ height: '100vh', overflowY: 'scroll', marginRight: '-8px' }}>
        <div className="log-box">
          <i></i>
          {collapsed ? null : <span>决策系统</span>}
        </div>
        <CustomMenu menus={menusStore.menus} />
      </div>
    )
  }
}

export default SiderNav
