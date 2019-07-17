
import React, { Component } from "react";
import { Icon, Layout } from 'antd';
const { Header } = Layout;

class CustomHeader extends Component {
  render() {
    return (
      <Header style={{ background: '#fff', padding: 0 }}>
        <Icon
          className="qf-nav-trigger"
          type={this.props.collapsed ? 'menu-unfold' : 'menu-fold'}
          onClick={this.props.onClick}
        />
      </Header>
    )
  }
}
export default CustomHeader
