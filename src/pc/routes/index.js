/*
 * @Descripttion:
 * @version:
 * @Author: yuqin
 * @Date: 2019-07-19 11:25:55
 * @LastEditors: yuqin
 * @LastEditTime: 2019-08-28 15:56:47
 */
import React from 'react'
import { Layout } from 'antd'
import SiderNav from '../../components/SiderNav'
import ContentMain from './ContentMain'
import HeaderBar from '../../components/HeaderBar'

const { Sider, Header, Content } = Layout


class Index extends React.Component {
  state = {
    collapsed: false
  }

  toggle = () => {
    // console.log(this)  状态提升后，到底是谁调用的它
    this.setState({
      collapsed: !this.state.collapsed
    })
  }
  render() {
    // 设置Sider的minHeight可以使左右自适应对齐
    return (
      <div id='page' style={{ height: '100%' }}>
        <Layout style={{ height: '100%', overflow: 'hidden' }}>
          <Sider collapsible
            trigger={null}
            collapsed={this.state.collapsed}
          >

            <SiderNav collapsed={this.state.collapsed} />
          </Sider>
          <Layout style={{ zIndex: '2' }}>
            <Header style={{ background: '#fff', padding: '0 16px' }}>
              <HeaderBar collapsed={this.state.collapsed} onToggle={this.toggle} />
            </Header>
            <Content>
              <ContentMain />
            </Content>
            {/* <Footer style={{textAlign: 'center'}}>决策系统 ©2019 Created by yuqin</Footer> */}
          </Layout>
        </Layout>
      </div>
    );
  }
}
export default Index
