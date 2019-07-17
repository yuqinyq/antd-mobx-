/*
 * @Descripttion:侧边栏
 * @version:
 * @Author: yuqin
 * @Date: 2019-07-17 16:03:34
 * @LastEditors: yuqin
 * @LastEditTime: 2019-07-17 17:40:12
 */

import React from 'react'
import { Menu, Icon } from 'antd'
import { Link } from 'react-router-dom'

const renderMenuItem = ({
  key,
  title,
  permission,
  icon,
  component,
  noexact,
  ...props
}) => (
    <Menu.Item key={key} {...props}>
      <Link to={key}>
        {icon ? <Icon type={icon} /> : null}
        <span>{title}</span>
      </Link>
    </Menu.Item>
  )

const renderSubMenuItem = ({
  key,
  title,
  permission,
  icon,
  sub,
  component,
  noexact,
  ...props
}) => {
  return (
    <Menu.SubMenu
      key={key}
      title={
        <span>
          <Icon type={icon} />
          <span>{title}</span>
        </span>
      }
      {...props}
    >
      {sub && sub.length && sub.map(item => item ? renderMenuItem(item) : null)}
    </Menu.SubMenu>
  )
}

export default ({ menus, ...props }) => (
  <Menu {...props}>
    {menus &&
      menus.length &&
      menus.map(
        item => {
          return item.sub && item.sub.length
            ? renderSubMenuItem(item)
            : (item ? renderMenuItem(item) : null)
        }
      )}
  </Menu>
)
