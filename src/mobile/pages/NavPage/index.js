/*
 * @Descripttion:
 * @version:
 * @Author: yuqin
 * @Date: 2019-08-14 17:05:54
 * @LastEditors: yuqin
 * @LastEditTime: 2019-08-15 17:03:17
 */
import React, { Component } from 'react'
import { Flex, WhiteSpace } from 'antd-mobile';
import { Link } from 'react-router-dom'
import NavBarHeader from '../../components/NavBarHeader'
import './index.less'


class Home extends Component {
  render() {
    const NavItem = ({ className = '', ...restProps }) => (
      <Link className={`${className} qf-mobile-navBtn`} {...restProps}>{restProps.title}</Link>
    );

    return (
      <div>
        <NavBarHeader title="导航页" cb={() => {
          this.props.history.replace("login");
          localStorage.clear()
        }} />
        <div className="flex-container padding-top-20">
          <Flex>
            <Flex.Item>
              <NavItem to='/home' title='首页' />
            </Flex.Item>
          </Flex>
          <WhiteSpace size="lg" />
          <Flex>
            <Flex.Item>
              <NavItem to='/drawer' title='抽屉' />
            </Flex.Item>
            <Flex.Item>
              <NavItem to='/menu' title='菜单' />
            </Flex.Item>
            <Flex.Item>
              <NavItem to='/pagination' title='分页器' />
            </Flex.Item>
          </Flex>
          <WhiteSpace size="lg" />
          <Flex>
            <Flex.Item>
              <NavItem to='/segmentedControl' title='分段器' />
            </Flex.Item>
            <Flex.Item>
              <NavItem to='/tabs' title='标签页' />
            </Flex.Item>
            <Flex.Item>
              <NavItem to='/tabBar' title='标签栏' />
            </Flex.Item>
          </Flex>
          <WhiteSpace size="lg" />
          <Flex>
            <Flex.Item>
              <NavItem to='/calendar' title='日历' />
            </Flex.Item>
            <Flex.Item>
              <NavItem to='/inputItem' title='文本输入' />
            </Flex.Item>
            <Flex.Item>
              <NavItem to='/carousel' title='走马灯' />
            </Flex.Item>
          </Flex>
        </div>
      </div>
    )
  }
}
export default Home
