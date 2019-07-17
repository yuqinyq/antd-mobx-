
import React, { Component } from "react";
import { Layout } from 'antd';
import CustomHeader from '../../components/CustomHeader'
import CustomSider from '../../components/CustomSider'
import ContentRoutes from "../../routes";

const { Content } = Layout;

class SiderDemo extends Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    const { collapsed } = this.state
    return (
      <Layout style={{ height: '100%' }}>
        <CustomSider collapsed={collapsed} />
        <Layout>
          <CustomHeader collapsed={collapsed} onClick={this.toggle}></CustomHeader>
          <Content
            style={{
              margin: '24px 16px',
              padding: 24,
              background: '#fff',
              minHeight: 280,
            }}
          >
            <ContentRoutes />
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default SiderDemo
