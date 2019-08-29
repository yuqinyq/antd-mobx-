/*
 * @Descripttion:
 * @version:
 * @Author: yuqin
 * @Date: 2019-08-14 16:07:39
 * @LastEditors: yuqin
 * @LastEditTime: 2019-08-29 15:08:48
 */
import React, { Component } from 'react'
import { Menu, NavBar, Popover, Icon } from 'antd-mobile';
import { inject, observer } from 'mobx-react/index'
import ContentMain from './ContentMain'
import './index.less'
import withRouter from 'react-router-dom/withRouter';
const Item = Popover.Item;

const myImg = src => <img src={`https://gw.alipayobjects.com/zos/rmsportal/${src}.svg`}
  className="am-icon am-icon-xs" alt="" />;

@withRouter @inject('menusStore', 'navigatorStore','loginStore') @observer
class Router extends Component {

  constructor(props) {
    super(props);
    this.state = {
      show: false,
      visible: false,
      selected: '',
    };
  }
  componentDidMount() {
    const { menusStore, navigatorStore } = this.props
    const type = navigatorStore.isMobile ? 'mobile' : 'pc'
    menusStore.getMenus(type)
  }
  onChange = (value) => {
    const { menusStore } = this.props
    let label = '', title = '';
    menusStore.menus.forEach((dataItem) => {
      if (dataItem.value === value[0]) {
        label = dataItem.value;
        title = dataItem.title
        if (dataItem.children && value[1]) {
          dataItem.children.forEach((cItem) => {
            if (cItem.value === value[1]) {
              label = cItem.value;
              title = cItem.title
            }
          });
        }
      }
    });
    this.props.history.replace({ pathname: label });
    this.setState({
      show: false
    })
    menusStore.changePage(value, title)
  }
  handleClick = (e) => {
    e.preventDefault(); // Fix event propagation on Android
    this.setState({
      show: !this.state.show,
    });
  }

  onMaskClick = () => {
    this.setState({
      show: false,
    });
  }

  onSelect = (opt) => {
    // console.log(opt.props.value);
    this.setState({
      visible: false,
      selected: opt.props.value,
    });
  };
  handleVisibleChange = (visible) => {
    this.setState({
      visible,
    });
  };

  render() {
    const { show } = this.state;
    const { menusStore } = this.props
    const menuEl = (
      <Menu
        className="foo-menu"
        data={menusStore.menus}
        value={menusStore.value}
        onChange={this.onChange}

      />
    );

    return (
      <div className={show ? 'menu-active qf-mobile-nav' : 'qf-mobile-nav'}>
        <div className="qf-mobile-box">
          <NavBar
            leftContent="菜单"
            mode="light"
            icon={<img src="https://gw.alipayobjects.com/zos/rmsportal/iXVHARNNlmdCGnwWxQPH.svg" className="am-icon am-icon-md" alt="" />}
            onLeftClick={this.handleClick}
            className="top-nav-bar"
            rightContent={
              <Popover mask
                overlayClassName="fortest"
                overlayStyle={{ color: 'currentColor' }}
                visible={this.state.visible}
                overlay={[
                  (<Item key="4" value="scan" icon={myImg('tOtXhkIWzwotgGSeptou')} data-seed="logId">扫一扫</Item>),
                  (<Item key="5" value="special" icon={myImg('PKAgAqZWJVNwKsAJSmXd')} style={{ whiteSpace: 'nowrap' }}>我的二维码</Item>),
                  (<Item key="6" value="button ct" icon={myImg('uQIYTFeRrjPELImDRrPt')}>
                    <span style={{ marginRight: 5 }} onClick={() => {
                      this.props.loginStore.toggleLogin(false)
                      this.props.history.push(this.props.location.pathname)
                    }}>退出登录</span>
                  </Item>),
                ]}
                align={{
                  overflow: { adjustY: 0, adjustX: 0 },
                  offset: [-10, 0],
                }}
                onVisibleChange={this.handleVisibleChange}
                onSelect={this.onSelect}
              >
                <div style={{
                  height: '100%',
                  padding: '0 15px',
                  marginRight: '-15px',
                  display: 'flex',
                  alignItems: 'center',
                }}
                >
                  <Icon type="ellipsis" />
                </div>
              </Popover>
            }
          >
            {menusStore.title}
          </NavBar>
          <ContentMain />
        </div>
        {show ? menuEl : null}
        {show ? <div className="menu-mask" onClick={this.onMaskClick} /> : null}
      </div>
    )
  }
}
export default Router
