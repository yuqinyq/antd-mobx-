/*
 * @Descripttion:
 * @version:
 * @Author: yuqin
 * @Date: 2019-07-17 16:03:34
 * @LastEditors: yuqin
 * @LastEditTime: 2019-07-17 17:57:38
 */

import React, { Component } from 'react'
import { Layout, Menu, Icon } from 'antd'
import SiderMenu from './SiderMenu'
import { menus } from '../../constants'


const { Sider } = Layout


class CustomSider extends Component {

  render() {
    const { collapsed } = this.props
    return (
      <Sider trigger={null} collapsible collapsed={collapsed}>
        {
          collapsed ?
            <div className="qf-nav-logo"></div> :
            <div className="qf-nav-logo">决策系统</div>
        }
        <SiderMenu
          menus={menus}
          theme="dark"
          mode="inline"
          className="sider-menu"
          defaultSelectedKeys={['/qf']}
        />

      </Sider>
    )
  }
}

export default CustomSider
