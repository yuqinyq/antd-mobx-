/*
 * @Descripttion:
 * @version:
 * @Author: yuqin
 * @Date: 2019-07-18 16:56:40
 * @LastEditors: yuqin
 * @LastEditTime: 2019-08-27 16:06:01
 */
import React from 'react'
import { Icon, Badge, Dropdown, Menu, Modal } from 'antd'
import screenfull from 'screenfull'
import { inject, observer } from 'mobx-react'
import { Link, withRouter } from 'react-router-dom'
import { isAuthenticated } from '../../utils/LoginInfo'

//withRouter一定要写在前面，不然路由变化不会反映到props中去
@withRouter @inject('loginStore') @observer
class HeaderBar extends React.Component {
  state = {
    icon: 'arrows-alt',
    count: 100,
    visible: false,
    avatar: require('./img/timg.jpg')
  }

  componentDidMount() {
    screenfull.onchange(() => {
      this.setState({
        icon: screenfull.isFullscreen ? 'shrink' : 'arrows-alt'
      })
    })
  }

  componentWillUnmount() {
    screenfull.off('change')
  }

  toggle = () => {
    this.props.onToggle()
  }
  screenfullToggle = () => {
    if (screenfull.enabled) {
      screenfull.toggle()
    }
  }
  logout = () => {
    this.props.loginStore.toggleLogin(false)
    this.props.history.push(this.props.location.pathname)
  }

  render() {
    const { icon, count, visible, avatar } = this.state
    const { loginStore, collapsed, location } = this.props
    const notLogin = (
      <div>
        <Link to={{ pathname: '/login', state: { from: location } }} style={{ color: 'rgba(0, 0, 0, 0.65)' }}>登录</Link>&nbsp;
        <img src={require('../../assets/img/defaultUser.jpg')} alt="" />
      </div>
    )
    const menu = (
      <Menu className='menu'>
        <Menu.ItemGroup title='用户中心' className='menu-group'>
          <Menu.Item>你好 - {isAuthenticated()}</Menu.Item>
          <Menu.Item>
              <Link to={{ pathname: '/home/about'}} >个人信息</Link>
          </Menu.Item>
          <Menu.Item><span onClick={this.logout}>退出登录</span></Menu.Item>
        </Menu.ItemGroup>
        <Menu.ItemGroup title='设置中心' className='menu-group'>
          <Menu.Item>个人设置</Menu.Item>
          <Menu.Item>系统设置</Menu.Item>
        </Menu.ItemGroup>
      </Menu>
    )
    const login = (
      <Dropdown overlay={menu}>
        <img onClick={() => this.setState({ visible: true })} src={avatar} alt="" />
      </Dropdown>
    )
    return (
      <div id='headerbar'>
        <Icon
          type={collapsed ? 'menu-unfold' : 'menu-fold'}
          className='trigger'
          onClick={this.toggle} />
        <div style={{ lineHeight: '64px', float: 'right' }}>
          <ul className='header-ul'>
            <li><Icon type={icon} onClick={this.screenfullToggle} /></li>
            <li onClick={() => this.setState({ count: 0 })}>
              <Badge count={loginStore.isLogin ? count : 0} overflowCount={99} style={{ marginRight: -17 }}>
                <Icon type="notification" />
              </Badge>
            </li>
            <li>
              {loginStore.isLogin ? login : notLogin}
            </li>
          </ul>
        </div>
        <Modal
          footer={null} closable={false}
          visible={visible}
          wrapClassName="vertical-center-modal"
          onCancel={() => this.setState({ visible: false })}>
          <img src={avatar} alt="" width='100%' />
        </Modal>
      </div>
    )
  }
}

export default HeaderBar
